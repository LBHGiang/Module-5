// @ts-ignore
let sum: number = 0;
// @ts-ignore
let prime: number = 2;
// @ts-ignore
let count: number = 0;
// @ts-ignore
let isPrime: boolean;

while (count < 20) {
    isPrime = true;
    for (let i = 2; i <= prime / 2; i++) {
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