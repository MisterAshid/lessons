let arrayofNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];

//Нийлбэр
let sum = 0;

for(const value of arrayofNumbers){
    sum+=value;
}

console.log(`Niilber`, sum)

//Хамгийн их тоо
let max = 0;

for(let i = 0; i < arrayofNumbers.length; i++){
    if(max < arrayofNumbers[i]){
        max = arrayofNumbers[i];
    }
}
console.log(`max utga ${max}`);

//Хамгийн бага тоо
let min = 0;

for(let a = 0; a > arrayofNumbers.length; a++){
    if(min > arrayofNumbers[a]){
        min = arrayofNumbers[a];
    }
}

console.log(`min utga ${min}`)