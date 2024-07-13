function isPowerOfTwo(n) {
    if (n <= 0) {
        return false;
    }
    return Math.log2(n) % 1 == 0;
}
console.log(isPowerOfTwo(16));