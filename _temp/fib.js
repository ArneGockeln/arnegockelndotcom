// Fibonacci Sequence in JavaScript
var terms = 10, a = 0, b = 1, fib = 0;
for(var i = 0; i <= terms; i++) {
    console.log(a);
    fib = a + b;
    a = b;
    b = fib;
}