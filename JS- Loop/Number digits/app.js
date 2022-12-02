let n = prompt("Та тоо оруулна уу");
let count = 0;

while(n!==0){
    count  = count + 1;
    n = Math.floor(n/10);
}
console.log(count);