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
// //trabalhando com arrays
// const numeros = [12,20,30,50,60]
// const valores = [5,3,8,"taxa",4, "12"]
// function maiorQueDez(data: Array<number>){
//    return data.filter( n => n >10)
// }
// function filtrarValores(data: Array<number | string>){
//     return data.filter(v => typeof v === "number")
// }
// filtrarValores(valores)
// maiorQueDez(numeros)
// //arrays dentro de arrays
// const dados = [
//     ["clifford", 10],
//     ["margarida", 6],
//     ["scooby", 4]
// ]
//exercicio com arrays 

// async function fetchCursos() {
//   const response = await fetch('https://api.origamid.dev/json/cursos.json');
//   const data = await response.json();
//   console.log(data)
//   mostrarCursos(data);
// }

// fetchCursos();

// interface Curso{
//     nome: string;
//     aulas: number;
//     gratuito: boolean;
//     horas: number;
//     idAulas: number[];
//     nivel: "iniciante" | "avancado";
//     tags: string[]
// }
// function mostrarCursos(cursos: Curso[]) {
//     cursos.forEach(curso => {
//         let color;
//         curso.nivel === "iniciante" ? color = "blue" : color = "red";
//         // if (curso.nivel === "iniciante"){
//         //     color = "blue";
//         // } else if (curso.nivel === "avancado"){
//         //     color = "red"; 
//         // }

//     document.body.innerHTML += `
//         <div>
//             <h2 style="color: ${color}">${curso.nome}</h2>
//             <p>Horas: ${curso.horas}</p>
//             <p>Aulas: ${curso.aulas}</p>
//             <p>Tipo: ${curso.gratuito ? "Gratuito" : "Pago"}</p>
//             <p>Tags: ${curso.tags.join(", ")}</p>
//             <p>ID: ${curso.idAulas.join(" | ")}</p>
//         </div>
//     `
//     })
// }


//any type

// function normalizar(texto: string){
//     //por padrao é any, colocado implicitamente
//     return texto.trim().toLowerCase();
// }
// console.log(normalizar(" TeXtO qUalQueR."))
// // console.log(normalizar(2000))
// // ts da erro se colocar o numero, pq o any foi removido

// // as vezes o any faz sentido

// async function fetchJSON(url: string){
//     const response = await fetch(url);
//     const data = await response.json();
//     // nesse caso o any faz sentido pq pode vir qualquer coisa dentro do json
//    manipularData(data);
// }

// function manipularData(data: {nome: string}){
//     console.log(data.nome);
// }



// null e undefined

//null é ausencia de valor, comum em funcoes no dom

const button = document.querySelector("button");
const config = localStorage.getItem("config");

//antes de colocar qualquer elemento de dom, verificar se ele existe ou nao
if (button !== null){
    button.click();
}
//checagem convencional

if(button){
    button.click();

}
//checagem simplificada booleana


button?.click();
// checagem com optional chaining

//undefined
//propriedade foi instaciada mas sem valor na memoria

let total;
console.log(total)
//retorna undefined
//mesma coisa com funções, vai dar undefined


//propriedade opcional

interface Produto{
    nome?: string;
}

const jogo: Produto ={
    nome: "ragnarok"
}
const livro: Produto ={
}

jogo.nome;
//ao passar o mouse por cima de nome, ele mostra que pode ser string ou undefined
livro.nome;
//ele permite criar com nome pq pode ou nao ter

jogo.nome?.toLocaleUpperCase();
livro.nome.toLocaleUpperCase();
//se nao colocar o ? vai dar erroo no runtime pq ele pode ser undefined

// pode ser feita outra verificação comum
if (jogo.nome){
    jogo.nome.toLocaleUpperCase();
}