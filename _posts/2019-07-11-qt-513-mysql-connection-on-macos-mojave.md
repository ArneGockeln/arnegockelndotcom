---
layout: post
title: "Qt 5.13 MySql connection on macOS Mojave and MAMP"
date: 2019-07-11 15:15:26 +0200
author: Arne Gockeln
categories: [softwaredev]
keywords: "qt, qmysql, macOS"
description: "How to connect to mysql server with Qt 5.13 on macOS Mojave."
---
Today I went crazy because I tried to connect to a mysql server, running inside a MAMP session, using Qt 5.13 on macOS Mojave. 

This is what I did. First I created a demo project with Qt Creator. A console program. Very basic.

```cpp
// Filename main.cpp
#include <QCoreApplication>
#include <QtSql>
#include <QDebug>

int main(int argc, char *argv[])
{
  QCoreApplication a(argc, argv);
  auto db = QSqlDatabase::addDatabase("QMYSQL");
  db.setPort(8889);
  db.setHostName("localhost");
  db.setUserName("root");
  db.setPassword("root");
  db.setDatabaseName("stockstest");

  if ( ! db.open() ) {
    qDebug() << db.lastError();
    qFatal("Could not load database!");
  }

  qDebug() << "Connected.";

  QSqlQuery q(db);
  q.prepare("SELECT * FROM DividendData");
  if ( ! q.exec() ) {
      qDebug() << q.lastError();
  } else {
      qDebug() << "Read data.";
      QSqlRecord record = q.record();
      int cols = record.count();

      QString temp;
      for ( int c = 0; c < cols; c++ ) {
          temp += record.fieldName( c ) + (( c < cols - 1 ) ? "\t" : "" );
      }
      qDebug() << temp;

      while ( q.next() ) {
          temp = "";
          for ( int c = 0; c < cols; c++ ) {
              temp += q.value( c ).toString() + ( ( c < cols - 1 ) ? "\t" : "" );
          }
          qDebug() << temp;
      }
  }

  db.close();

  return a.exec();
}

```

And the .pro file:

```bash
QT -= gui
QT += sql

CONFIG += c++11 console
CONFIG -= app_bundle
DEFINES += QT_DEPRECATED_WARNINGS

SOURCES += \
        main.cpp

# Default rules for deployment.
qnx: target.path = /tmp/$${TARGET}/bin
else: unix:!android: target.path = /opt/$${TARGET}/bin
!isEmpty(target.path): INSTALLS += target
```

After compiling and running the program I've got an error message

```bash
$ ./qtsqltest 
QSqlDatabase: QMYSQL driver not loaded
QSqlDatabase: available drivers: QSQLITE QODBC QODBC3 QPSQL QPSQL7
QSqlError("", "Driver not loaded", "Driver not loaded")
Could not load database!
Abort trap: 6
```

Ok. So the **QMYSQL driver is not available**. 

Now. After several **hours** of research, test and frustration I found the solution. You have to build the mysql plugin for Qt yourself. This is how:

## Install mysql-client

First, if not already done install the mysql-client with homebrew. 

```bash
$ brew install mysql-client
$ ll /usr/local/Cellar/mysql-client/
total 0
drwxr-xr-x   3 arnegockeln  staff    96B 11 Jul 12:20 .
drwxrwxr-x  11 arnegockeln  admin   352B 11 Jul 14:57 ..
drwxr-xr-x  10 arnegockeln  staff   320B 11 Jul 12:20 5.7.23
```

## Build libqsqlmysql.dylib

Second, within your Qt Creator you open the sqldriver project for mysql. My Qt installation is in `~/sourcecode/sdk/QtLatest/5.13.0`. From there the mysql sqldriver project is in the folder: `~/sourcecode/sdk/QtLatest/5.13.0/Src/qtbase/src/plugins/sqldrivers/mysql/mysql.pro`.

Now add two lines to the `mysql.pro` file:

```
TARGET = qsqlmysql

HEADERS += $$PWD/qsql_mysql_p.h
SOURCES += $$PWD/qsql_mysql.cpp $$PWD/main.cpp

QMAKE_USE += mysql

OTHER_FILES += mysql.json

PLUGIN_CLASS_NAME = QMYSQLDriverPlugin
include(../qsqldriverbase.pri)

# add this two lines with your path to the mysql-client
INCLUDEPATH += "/usr/local/Cellar/mysql-client/5.7.23/include"
QMAKE_LIBDIR += "/usr/local/Cellar/mysql-client/5.7.23/lib"
```

Build the project.

If you wonder why there is no file in `build-mysql-Debug`, Qt Creator moves the compiled driver dylib to the folder `~/sourcecode/sdk/QtLatest/5.13.0/Src/qtbase/plugins/sqldrivers/`. But that is not what we want.

## Move dylib to correct directory

We need to copy the dylib to the correct location. That is `~/sourcecode/sdk/QtLatest/5.13.0/clang_64/plugins/sqldrivers/`.

```
$ pwd
~/sourcecode/sdk/QtLatest/5.13.0
$ cp Src/qtbase/plugins/sqldrivers/libqsqlmysql* clang_64/plugins/sqldrivers/
```

## Done.

Now the QMYSQL driver is available to Qt and you can compile and run your program again. 
