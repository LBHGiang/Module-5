function displayAndSumFibonacci(number: number) {

    let fiboArr: number[] = [0, 1];
    let sum: number = 1;

    while (number > fiboArr.length) {

        let c: number = 0;

        c = fiboArr[fiboArr.length - 2] + fiboArr[fiboArr.length - 1];

        sum += c;

        fiboArr.push(c);
    }

    return "Fibonacci line is - " + fiboArr.toString() + " and the sum of its is: " + sum
}

console.log(displayAndSumFibonacci(20));