let n = prompt("Та тоо оруулна уу(10000-аас бага)");
let sum = Number(n);

if(0>sum){
    console.log ("Алдаатай байна")
}else{
    let a = 0;
    let b = 0;
    while(a < sum){
        a = a+1;
        b =b+1;
    }
    console.log(`${b}`);
}

