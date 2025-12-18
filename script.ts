// function somar(a:number, b:number){
//     return a + b;
// }
// somar(2,4)

// 203 union types (|)

// let total: string| number = 200;
// total ="4000";

// function isNumber(value: string| number){
//     if (typeof value === "number"){
//         return true;
//     } else{
//         return false;
//     }
// }
// console.log(isNumber(200));
// console.log(isNumber("200"));

// //union types no DOM
// const  button = document.querySelector('button');
// //const button: HTMLButtonElement | null

// if (button){
//     button.click();
// }
// button?.click(); //optional chaining
// //só vai ativar se for u html button element

// //203 union types 2
// //exercicio

function toNumber (value: number | string){
    if (typeof value === "number"){
        return value;
    } else if (typeof value === "string"){
        return Number(value)
    }else {
        throw "value deve ser um number | string"
    }
}
console.log(toNumber("20"))