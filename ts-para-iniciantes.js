//@ts-check



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
//aula 2
const produtos = [
    {
        nome: "sr dos aneis",
        tipo: "livro"
    },
    {
        nome: "biblia",
        tipo: "livro"
    },
    {
        nome: "todo poderoso",
        tipo: "filme"
    },
    {
        nome: "clifford",
        tipo: "desenho"
    }
];

function filtrarLivros (dados){
    return dados.filter((item) => item.tipo === "livro")
}
console.log(filtrarLivros(produtos))