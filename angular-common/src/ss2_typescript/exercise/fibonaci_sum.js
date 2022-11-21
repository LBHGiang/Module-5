// @ts-ignore
function fibonacci(num1, num2, count, sum) {
    sum += num2;
    var num3 = num1 + num2;
    console.log("num 1: " + num1 + " , num 2: " + num2 + " , sum: " + sum + " , count" + count);
    if (count <= 0) {
        return sum;
    }
    return (fibonacci(num2, num3, --count, sum));
}
var quantity = 3;
console.log("Tổng của " + quantity + "số fibinaci đầu tiên bằng: " + fibonacci(0, 1, 3, 0));
