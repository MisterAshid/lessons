//Bodlogo-1
console.log("1. 10 хүртэлх натурал тоог хэвлэх программ бич" ,)

let too1 = 1;

while(too1 <= 10){
    console.log("1." , too1);
    too1 += 1;
}

//Bodlogo-2
console.log("2. 10 хүртэлх натурал тооны сондгой тоонуудыг хэвлэх программ бич"
 , );

let too2= 1;

while(too2 <= 10){
    if(too2% 2 !==0){
        console.log("2." , too2)
    }
    too2 += 1;
}

//Bodlogo-3
console.log("3. 10 хүртэлх натурал тооны тэгш тоонуудыг хэвлэх программ бич" , )

let too3= 1;

while(too3 <= 10){
    if(too3 % 2 ===0){
        console.log("3." , too3)
    }
    too3 += 1;
}

//Bodlogo-4
console.log("4. 100 хүртэлх натурал тооны нийлбэрийг олох программ бич" , )
 
let too4=0;
let sum=0;

while(too4 <= 100){
    sum= sum + too4;
    too4 += 1;
}
console.log("4." , sum)

//Bodlogo-5
console.log("5. N хүртэлх натурал тооны хэвлэх болон тэдгээр тооны нийлбэрийг олох программ бич")

let too5=1;

// //Bodlogo-6
// console.log("6. Өгөгдсөн тоог анхны мөн эсэхийг олох программ бич")

// let too6 = parseInt (prompt("Та дурын тоо оруулна уу? "));

// if(too6 === 2){
//     console.log("$(too6) бол анхны тоо мөн байна");
// }else{
//     let i = 2;
//     while(i < too6){
//        if(too % i === 0){
//         console.log("$(too6) бол анхны тоо биш");
//         break;
//        }else{
//         console.log("$(too6) бол анхны тоо мөн байна");
//        }
//     }
// }
