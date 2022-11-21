// @ts-ignore
function isPrime(number) {
    var isPrime = number >= 2;
    for (var i = 2; i <= number / 2; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
}
// @ts-ignore
var array = [1, 5, 9, 2, 6, 15, 19, 35, 51, 53];
// @ts-ignore
var sum = 0;
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var element = array_1[_i];
    // @ts-ignore
    if (isPrime(element)) {
        sum += element;
    }
}
console.log("Tổng các số nguyên tố trong mảng trên là: " + sum);
