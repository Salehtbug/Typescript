var num = 7;
if (num % 2 === 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}
var prices = [100, 250, 75, 400, 150, 50];
var threshold = 100;
for (var i = 0; i < prices.length; i++) {
    if (prices[i] > threshold) {
        console.log(prices[i]);
    }
}
var numbers = [10, 20, 30, 40, 50];
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);
