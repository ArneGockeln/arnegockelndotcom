---
layout: post
title: "macOS Mojave missing C++ headers"
date: 2019-09-24 11:16:40 +0200
author: Arne Gockeln
categories: [softwaredev]
image: /092019/zan-ilic-0WzeC6JtbHU-unsplash.jpg
imagecopyright: "Photo by Zan Ilic on Unsplash"
---
I ran into some issues in compiling vcpkg on macOS 10.14.6 (Mojave). First one was that I needed to use `gcc` instead of Apple Clang Compiler. brew fixed that problem. But then the compiler sends the following build failures:

```plain
[6/66] Building CXX object CMakeFiles/vcpkglib.dir/src/vcpkg/archives.cpp.o
FAILED: CMakeFiles/vcpkglib.dir/src/vcpkg/archives.cpp.o 
/usr/local/bin/g++-9  -DDISABLE_METRICS=0 -I../include -O3 -DNDEBUG -isysroot /Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX10.15.sdk -mmacosx-version-min=10.14   -std=c++1z -MD -MT CMakeFiles/vcpkglib.dir/src/vcpkg/archives.cpp.o -MF CMakeFiles/vcpkglib.dir/src/vcpkg/archives.cpp.o.d -o CMakeFiles/vcpkglib.dir/src/vcpkg/archives.cpp.o -c ../src/vcpkg/archives.cpp
In file included from /Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX.sdk/usr/include/wchar.h:90,
                 from /usr/local/Cellar/gcc/9.2.0/include/c++/9.2.0/cwchar:44,
                 from /usr/local/Cellar/gcc/9.2.0/include/c++/9.2.0/bits/postypes.h:40,
                 from /usr/local/Cellar/gcc/9.2.0/include/c++/9.2.0/bits/char_traits.h:40,
                 from /usr/local/Cellar/gcc/9.2.0/include/c++/9.2.0/string:40,
                 from /usr/local/Cellar/gcc/9.2.0/include/c++/9.2.0/stdexcept:39,
                 from /usr/local/Cellar/gcc/9.2.0/include/c++/9.2.0/array:39,
                 from /usr/local/Cellar/gcc/9.2.0/include/c++/9.2.0/tuple:39,
                 from /usr/local/Cellar/gcc/9.2.0/include/c++/9.2.0/functional:54,
                 from /usr/local/Cellar/gcc/9.2.0/include/c++/9.2.0/pstl/glue_algorithm_defs.h:13,
                 from /usr/local/Cellar/gcc/9.2.0/include/c++/9.2.0/algorithm:71,
                 from ../include/pch.h:22,
                 from ../src/vcpkg/archives.cpp:1:
/usr/local/Cellar/gcc/9.2.0/lib/gcc/9/gcc/x86_64-apple-darwin18/9.2.0/include-fixed/stdio.h:222:7: error: conflicting declaration of 'char* ctermid(char*)' with 'C' linkage
  222 | char *ctermid(char *);
      |       ^~~~~~~
```

I tried different gcc versions but it didn't solve the problem. What I found out was that the latest Xcode version is missing the appropriate header files. So to install it you need to run:

```plain
$ sudo installer -pkg /Library/Developer/CommandLineTools/Packages/macOS_SDK_headers_for_macOS_10.14.pkg -target /
Password: ****
installer: Package name is macOS_SDK_headers_for_macOS_10.14
installer: Installing at base path /
installer: The install was successful.
```

If you get an error that states that the command does not exist, you probably need to install the xcode command line tools first by running:

```plain
$ xcode-select --install
```

**Note:** If you still do not find the pkg file, you need to download the latest command line tools from [https://developer.apple.com/download/more/](https://developer.apple.com/download/more/). Got that problem again after updating macOS Mojave to macOS Catalina.

Here is the build result:

```plain
$ ./bootstrap-vcpkg.sh 
-- The C compiler identification is AppleClang 11.0.0.11000033
-- The CXX compiler identification is GNU 9.2.0
-- Check for working C compiler: /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc
-- Check for working C compiler: /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc -- works
-- Detecting C compiler ABI info
-- Detecting C compiler ABI info - done
-- Detecting C compile features
-- Detecting C compile features - done
-- Checking whether CXX compiler has -isysroot
-- Checking whether CXX compiler has -isysroot - yes
-- Checking whether CXX compiler supports OSX deployment target flag
-- Checking whether CXX compiler supports OSX deployment target flag - yes
-- Check for working CXX compiler: /usr/local/bin/g++-9
-- Check for working CXX compiler: /usr/local/bin/g++-9 -- works
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- Looking for pthread.h
-- Looking for pthread.h - found
-- Looking for pthread_create
-- Looking for pthread_create - found
-- Found Threads: TRUE  
-- Configuring done
-- Generating done
-- Build files have been written to: /Users/arnegockeln/src/cpp/vcpkg/toolsrc/build.rel
[0/2] Re-checking globbed directories...
[66/66] Linking CXX executable vcpkg
```

Thank you, internet!