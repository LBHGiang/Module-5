// @ts-ignore
function isPrime(number: number): boolean {
    let isPrime = number >= 2;
    for (let i = 2; i <= number / 2; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
}

// @ts-ignore
let array: Array<number> = [1, 5, 9, 2, 6, 15, 19, 35, 51, 53];

// @ts-ignore
let sum: number = 0;
for (let element of array) {
    // @ts-ignore
    if (isPrime(element)) {
        sum += element;
    }
}
console.log("Tổng các số nguyên tố trong mảng trên là: " + sum);
