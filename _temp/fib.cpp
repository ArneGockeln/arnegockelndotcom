#include <iostream>
int main(int argc, char const *argv[]) {
    int terms = 10;
    int a = 0, b = 1, fib = 0;
    for(int i = 0; i <= terms; i++) {
        std::cout << a << std::endl;
        fib = a + b;
        a = b;
        b = fib;
    }
    return 0;
}
