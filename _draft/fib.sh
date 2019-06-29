#!/bin/bash
# Fibonacci Sequence in Bash
TERMS=10
A=0
B=1
for((i=0; i<=TERMS; i++))
do
    echo "$A "
    FIB=$((A + B))
    A=$B
    B=$FIB
done