
//=====================================================
//aula 1
// const frase = "Front-end";
// const total = 100.05;
// const empresas = ["Google", "Facebook", "Amazon"];
// console.log(frase.toLocaleUpperCase())
// console.log(total.toFixed(1)) // retorna uma *string* com 1 casa decimal --> 100.0

// const mapempresas = empresas.map((empresas) => {
//     empresas.toLocaleLowerCase()
// });
// console.log(mapempresas);
// const body = document.body;
// body.style.background = "black";
// body.style.color = "green";

// document.body.innerHTML = JSON.stringify(mapempresas)

// const button = document.querySelector("button");// seleciona o que pode ser um botao ou null
// button.click(); //se for null vai dar erro, o que é o caso


// const operação = 100 + {};
// console.log(operação);

// apesar do  tscheck ajudar muito eh necssario criar um arquivo de ts proprieamente dito
//=========================================================================================
// //aula 2
// const produtos = [
//     {
//         nome: "sr dos aneis",
//         tipo: "livro"
//     },
//     {
//         nome: "biblia",
//         tipo: "livro"
//     },
//     {
//         nome: "todo poderoso",
//         tipo: "filme"
//     },
//     {
//         nome: "clifford",
//         tipo: "desenho"
//     }
// ];

// function filtrarLivros (dados){
//     return dados.filter((item) => item.tipo === "livro")
// }
// console.log(filtrarLivros(produtos))

// function somar (a:number, b:number){
//     return a + b;
// }
// console.log(somar(2, 5))

//aula 201 ==========================================================

// let preco = 200
// const carro: {
//     marca: string;
//     ano: number;
// } = {
//     marca: "ford",
//     ano: 1988
// }


// const barato: boolean | string = 200 <  400 ? true : "caro"

// function somar (a:number,b:number){
//     return a+b;
// }
// somar(2,4)

// const nintendo = {
//     nome: "switch",
//     // preco: "2000",
// }

// function transformarPreco(produto: {nome:string; preco:string}) {
//     produto.preco = "R$" + produto.preco;
//     return produto
// }

// const novoProduto =  transformarPreco(nintendo);

// console.log(novoProduto)

// aual 201 parte 2

// function normalizarTexto(texto:string){
//     return texto.trim().toLocaleLowerCase();

// }

// console.log(normalizarTexto("   Olá MUNDo   "));
// //olá mundo

const input = document.querySelector("input");
const total = localStorage.getItem("total");

if (input && total) {
  input.value = total;
  calcularGanho(Number(input.value));
}

function calcularGanho(value: number) {
  const p = document.querySelector("p");
  if (p) {
    p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
  }
}
function totalMudou() {
  if (input) {
    const value = Number(input.value);
    localStorage.setItem("total", input.value);
    calcularGanho(Number(input.value));
  }
}
if (input) {
  input.addEventListener("keyup", totalMudou);
}
