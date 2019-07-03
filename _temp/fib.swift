// Fibonacci Sequence in Swift
let terms = 30
var A = 0
var B = 1
for _ in 0...terms {
    print(String(A))
    let fib = A + B
    A = B
    B = fib
}