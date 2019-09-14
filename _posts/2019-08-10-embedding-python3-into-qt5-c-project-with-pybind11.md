---
layout: post
title: "Embedding Python3 into Qt5 C++ project with pybind11"
date: 2019-08-10 18:14:57 +0200
author: Arne Gockeln
categories: [softwaredev]
image: /082019/hitesh-choudhary-D9Zow2REm8U-unsplash.jpg
imagecopyright: "Photo by Hitesh Choudhary on Unsplash"
---

The project I am working on right now requires an embedded python interpreter where you can load python scripts and the software reacts to it.

The software is developed in C++11 with the [Qt5 framework](https://www.qt.io){:target="_blank"}. To make the python interpreter available in my application I use the [pybind11 library](https://pybind11.readthedocs.io/en/stable/intro.html){:target="_blank"}.

## Dev Environment

My working environment is macOS 10.14, Qt 5.13 Open Source, Python 3.8 and Apple LLVM version 10.0.1 (clang-1001.0.46.4).

You need the Python3 developer files. I have installed them using brew. On macOS you can use

```plain
$ brew install python3
```

I have copied the pybind11 header files to my project folders sub directory `extern/includes/pybind11`.

## Python Script

This is the python script I want to load and to play with.

```python
# test.py
from strategy import PythonHandler

def initialize(pc: PythonHandler):
    pc.debug("print initialize")
```

## Pro file

In your qmake .pro file you need to add the paths to your Python3 and pybind11 libs and include directory. Like this:

```plain
PYTHON_VERSION=$$(PYTHON_VERSION)
isEmpty( PYTHON_VERSION ) {
  win32:PYTHON_VERSION=38
  unix:PYTHON_VERSION=3.8
  macx:PYTHON_VERSION=3.8
}

# adding the extern includes path for pybind11
INCLUDEPATH += $$PWD/../extern/includes

macx {
    # add python3.8 libs
    LIBS += -L/usr/local/python$${PYTHON_VERSION}/lib -lpython$${PYTHON_VERSION} -ldl -lutil
    INCLUDEPATH += /usr/local/python$${PYTHON_VERSION}/include/python$${PYTHON_VERSION}
}
```

## Implementation

### PythonController
Add two new c++ classes to your project. I named it `PythonController` and `PythonHandler`. The controller sets up the python interpreter and loads the python file. The handler will be exposed to the python file. 

```cpp
// PythonController.h
#ifndef PYTHONCONTROLLER_H
#define PYTHONCONTROLLER_H

#include <QObject>

// avoid conflicts between Python.h and Qt slots
#undef slots
#include<pybind11/pybind11.h>
#include<pybind11/embed.h>
#define slots Q_SLOTS

namespace py = pybind11;
class PythonHandler;

class PythonController: public QObject {
  Q_OBJECT
public:
  // Constructor
  PythonController(QObject* parent = nullptr);
  // load python file
  void load(const QString& file);
  // call python function "initialize" with a PythonHandler pointer
  void pyInitialize(PythonHandler* handler);

signals:
  // fire signal if the file does not exist
  void fileDoesNotExist(const QString& filename);
  // fire signal if an error occurred
  void pythonError(const QString& error);

private:
  // this is the python interpreter
  py::scoped_interpreter guard{};
  // this holds the module which is loaded by the python file
  py::module m_module;
  // this holds the local dictionary
  py::dict m_local;
};
```

Let`s do the implementation step by step. First the constructor.

```cpp
PythonController::PythonController(QObject* parent): QObject(parent) {
  m_local = py::dict();
}
```
Nothing special. Just initializing the m_local variable with a python dictionary. You can ignore the dictionary, I use it in my project.

Next the `load` method: 

```cpp
void PythonController::load(const QString &file) {
  QFileInfo fi(file);
  if ( ! fi.exists() ) {
    emit fileDoesNotExist(file);
    return;
  }

  try {
    // add the python script path to the sys path to load it as a module
    auto sys_dict = py::dict("mpath"_a=fi.absolutePath().toStdString().c_str());
    auto sys_path = "import sys\n"
                    "sys.path.insert(1, '{mpath}')"_s.format(**sys_dict);

    // set path for module import
    py::exec(sys_path, py::globals(), m_local);

    // import module from file
    m_module = py::module::import(fi.baseName().toStdString().c_str());

  } catch(py::error_already_set &e) {
    qDebug() << "py::error_already_set:" << e.what();
  } catch(py::key_error &e) {
    qDebug() << "py::key_error:" << e.what();
  } catch(py::value_error &e) {
    qDebug() << "py::value_error:" << e.what();
  } catch(py::index_error &e) {
    qDebug() << "py::index_error:" << e.what();
  } catch(py::stop_iteration &e) {
    qDebug() << "py::stop_iteration:" << e.what();
  } catch(std::exception &e) {
    qDebug() << "std::exception:" << e.what();
  } catch(...) {
    qDebug() << "unknown exception";
  }

}
```

Ok, first I check if the python file exists. If not I emit a signal `fileDoesNotExist` and return. In the try block comes a bit magic. **If you do not add the python file path to the sys path, your module cannot be loaded. Because python is not aware of the module folder.** Instead you will get an error:

```plain
libc++abi.dylib: terminating with uncaught exception of type pybind11::error_already_set: AttributeError: module 'test' has no attribute 'initialize'
```

With py::exec the interpreter is now aware of the new module folder. With py::module::import I load the python file as a module and save a reference to the variable m_module. 

```cpp
void PythonController::pyInitialize(PythonHandler* handler) {
    // get function from python
    py::function func_initialize = py::reinterpret_borrow<py::function>( 
        m_module.attr("initialize") 
    );
    // check if function is a cpp function and callable
    if ( func_initialize.is_cpp_function() ) {
      emit pythonError("initialize is not a function");
      return;
    }

    // call the function with PythonHandler pointer parameter
    func_initialize(py::cast(handler, py::return_value_policy::reference));
}
```

The method `pyInitialize` calls the function inside the python script. 
With py::cast you can convert the PythonHandler pointer to a python object. 

```cpp 
// add module "strategy" with PythonHandler class
PYBIND11_EMBEDDED_MODULE(strategy, m) {
  py::class_<PythonHandler>(m, "PythonHandler")
      .def("debug", &PythonHandler::debug);
}
```

Finally we have to expose the PythonHandler class to python. You have to put the PYBIND11_EMBEDDED_MODULE macro at the end of the .cpp file.

### PythonHandler

The Python Handler is the class that we want to expose to the python script.

```cpp
// PythonHandler.h
#ifndef PYTHONHANDLER_H
#define PYTHONHANDLER_H

#include <QObject>
#include <string>

class PythonHandler: public QObject {
  Q_OBJECT
public:
  PythonHandler(QObject* parent = nullptr);
  void debug(const std::string& msg); // Yes I know I mixed types

signals:
  void onMessage(const QString& msg);
};

#endif // PYTHONHANDLER_H
```

```cpp
// PythonHandler.cpp
#include "pythonhandler.h"

// Constructor
PythonHandler::PythonHandler(QObject* parent) : QObject(parent) {}
// The debug method which we call inside the python script
void PythonHandler::debug(const std::string &msg) {
  // emit the Qt signal
  emit onMessage(QString::fromStdString(msg));
}
```

Now in `main.cpp` we instantiate the classes and connect the Qt signals.

```cpp
// main.cpp
#include "pythoncontroller.h"
#include "pythonhandler.h"

int main(int argc, char *argv[]) {
    // ... QCoreApplication stuff
    // ... QCommandLineParser stuff
    QCommandLineOption pylocation("f", "Location of the python file", "Path");

    if ( parser.isSet(pylocation) ) {
        QString pyfile = parser.value(pylocation);
        // the Python controller
        PythonController pycontroller;
        // the Python handler
        PythonHandler pyhandler;
        // Connecting to the onMessage signal of PythonHandler
        QObject::connect(&pyhandler, &PythonHandler::onMessage, [&](const QString& msg) {
          qDebug() << "main debug callback" << msg;
        });
        // Connecting to the pythonError signal of PythonController
        QObject::connect(&pycontroller, &PythonController::pythonError, [&](const QString& error) {
          qDebug() << "pythonError:" << error;
        });

        // load the python file
        pycontroller.load(pyfile);
        // call the python method "initialize"
        pycontroller.pyInitialize(&pyhandler);
    }
}
```

## Summary

So what looks very simple is the result of many hours google, stackoverflow, 
desperation phase, thoughts about to drop this feature and at the end a friday evening and a bag of rosemary chips.

The solution was to set the module path in the sys.path of python at runtime. 

Hope this helps someone saving some time and energy.