function isPrime(num) {
    if (num < 2) return false;
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) return false;
    }
    return true;
}
console.log(isPrime(7)) //output: true;
console.log(isPrime(10)) //output: false;