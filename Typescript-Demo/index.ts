let num: number = 7; 

if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

let prices: number[] = [100, 250, 75, 400, 150, 50];
let threshold: number = 100; 

for (let i = 0; i < prices.length; i++) {
    if (prices[i] > threshold) {
        console.log(prices[i]);
    }
}

let numbers: number[] = [10, 20, 30, 40, 50]; 
let sum: number = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);

