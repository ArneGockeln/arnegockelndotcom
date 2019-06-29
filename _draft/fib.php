<?php 
$terms = 30;
$a = 0; 
$b = 1;
for($i = 0; $i < $terms; $i++) {
    echo "$a \n";
    $fib = $a + $b;
    $a = $b;
    $b = $fib;
}