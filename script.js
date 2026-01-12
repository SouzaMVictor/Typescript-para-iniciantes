// // function somar(a:number, b:number){
// //     return a + b;
// // }
// // somar(2,4)
// // 203 union types (|)
// // let total: string| number = 200;
// // total ="4000";
// // function isNumber(value: string| number){
// //     if (typeof value === "number"){
// //         return true;
// //     } else{
// //         return false;
// //     }
// // }
// // console.log(isNumber(200));
// // console.log(isNumber("200"));
// // //union types no DOM
// // const  button = document.querySelector('button');
// // //const button: HTMLButtonElement | null
// // if (button){
// //     button.click();
// // }
// // button?.click(); //optional chaining
// // //só vai ativar se for u html button element
// // //203 union types 2
// // //exercicio
// // function toNumber (value: number | string){
// //     if (typeof value === "number"){
// //         return value;
// //     } else if (typeof value === "string"){
// //         return Number(value)
// //     }else {
// //         throw "value deve ser um number | string"
// //     }
// // }
// // console.log(toNumber("20"))
// //204 type e interface: TYPE
// // definir um objeto é bem parecido no ts
// // type Produto= {
// //     nome: string;
// //     preco: number;
// //     teclado: boolean
// // }
// // //deixa a linguagem mais limpa
// // function preencherDados(dados: Produto){
// //     document.body.innerHTML += `
// //     <div>${dados.nome}</div>
// //     <div>${dados.preco}</div>
// //     <p> inclui teclado: ${dados.teclado ? "sim" : "não"}</p>
// //     `
// // }
// //  const computador: Produto ={
// //     nome: "computador",
// //     preco: 2000,
// //     teclado: true
// //  }
// // preencherDados({
// //     nome: "computador",
// //     preco: 2000,
// //     teclado: true
// // })
// // preencherDados({
// //     nome: "notebook",
// //     preco: 2000,
// //     teclado: false
// // })
// // type Categorias =   "desing" | "programação" | "marketing";
// // function preencehrCategoria(categoria: Categorias){
// //     if( categoria === "desing"){
// //         console.log("categoria de desing")
// //     }
// //     if( categoria === "programaçãos"){
// //         console.log("categoria de programação")
// //     }
// //     if( categoria === "marketing"){
// //         console.log("categoria de marketing")
// //     }
// // }
// // preencehrCategoria("programação");
// // preencehrCategoria("marketing");    
// // preencehrCategoria("desenvolvimento");
// //204 type e interface: interface
// // interface ProductInterface {
// //     nome: string;
// //     preco: number;
// //     teclado: boolean;
// // }
// //204 type e interface: exercicio
// async function fetchProduct(){
//     const response = await fetch("https://api.origamid.dev/json/notebook.json")
//     const data = await response.json();
//     console.log(data);
//     showProduct(data)
// }
// fetchProduct();
// interface Empresa {
//     fundacao: number;
//         nome: string;
//         pais: string;
// }
// interface Product{
//     nome: string;
//     preco: number;
//     descricao: string;
//     garantia: string;
//     seguroAcidentes: boolean;
//     empresaFabricante: Empresa;
//     empresaMontadora: Empresa;
// }
// function showProduct(data: Product){
//     document.body.innerHTML = `
//     <div>
//         <h2>${data.nome}</h2>
//         <p>Preço: R$${data.preco}</p>
//         <div>
//             <p>Fabricante: ${data.empresaFabricante.nome}</p>
//         </div>
//         <div>
//             <p>Montadora: ${data.empresaMontadora.nome}</p>
//         </div>
//     </div>
//     `
// }
var numeros = [12, 20, 30, 50, 60];
var valores = [5, 3, 8, "taxa", 4, "12"];
function maiorQueDez(data) {
    return data.filter(function (n) { return n > 10; });
}
function filtrarValores(data) {
    return data.filter(function (v) { return typeof v === "number"; });
}
filtrarValores(valores);
maiorQueDez(numeros);
