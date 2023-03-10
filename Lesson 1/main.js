"use strict";
export const __esModule = true;
// let username:string;
// username = "123"
// let pass:number;
// pass=123
// let User:string[];
// User = ["Nghĩa","Tiến","Trường"];
// let arrNumber:number[]=[1,2,3]
// let arrMix:Array<number|String> =[1,"Nghĩa",2]
// const Product: {id:number,productName:String,productPrice:number,productImage:String} = {
//     id:1,
//     productName:"Iphone 14",
//     productPrice: 14000000,
//     productImage: "abcxyz",
// }
// console.log(username)
// console.log(pass)
// console.log(User)
// console.log(arrNumber)
// console.log(arrMix)
// console.log(Product)
function sum(lab, quiz, assighment, thi) {
    var tong = lab + quiz + assighment + thi;
    console.log(lab);
    console.log(quiz);
    console.log(assighment);
    console.log(thi);
    if (tong <= 20) {
        console.log(tong);
        console.log("Bạn đã trượt môn.");
    }
    else {
        console.log(tong);
        console.log("Bạn đã qua môn");
    }
}
sum(1, 2, 3, 4);
