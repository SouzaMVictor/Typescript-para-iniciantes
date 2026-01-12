// // function somar(a:number, b:number){
// //     return a + b;
// // }
// // somar(2,4)
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
function fetchCursos() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('https://api.origamid.dev/json/cursos.json')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    mostrarCursos(data);
                    return [2 /*return*/];
            }
        });
    });
}
fetchCursos();
function mostrarCursos(cursos) {
    cursos.forEach(function (curso) {
        var color;
        curso.nivel === "iniciante" ? color = "blue" : color = "red";
        // if (curso.nivel === "iniciante"){
        //     color = "blue";
        // } else if (curso.nivel === "avancado"){
        //     color = "red"; 
        // }
        document.body.innerHTML += "\n        <div>\n            <h2 style=\"color: ".concat(color, "\">").concat(curso.nome, "</h2>\n            <p>Horas: ").concat(curso.horas, "</p>\n            <p>Aulas: ").concat(curso.aulas, "</p>\n            <p>Tipo: ").concat(curso.gratuito ? "Gratuito" : "Pago", "</p>\n            <p>Tags: ").concat(curso.tags.join(", "), "</p>\n            <p>ID: ").concat(curso.idAulas.join(" | "), "</p>\n        </div>\n    ");
    });
}
