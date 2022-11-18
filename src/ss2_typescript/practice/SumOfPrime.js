var sum = 0;
var prime = 2;
var count = 0;
var isPrime;
while (count < 20) {
    isPrime = true;
    for (var i = 2; i <= prime / 2; i++) {
        if (prime % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        sum += prime;
        count++;
        console.log(prime);
    }
    prime++;
}
console.log("Tổng 20 số nguyên tố đầu tiên là: " + sum);
