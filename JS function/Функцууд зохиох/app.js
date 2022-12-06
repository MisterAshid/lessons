//1. Өгөгдсөн 2 тооны ихийг олох функц бич.
let number1 = parseFloat(prompt("Эхний тоо"));
let number2 = parseFloat(prompt("Дараагийн тоо"));

let result = x(number1, number2);
function x (a , b){
    if(a > b) return a;
    else if (a < b) return b;
    else return "tentsuu"
}
console.log(`MAX: ${result}` );