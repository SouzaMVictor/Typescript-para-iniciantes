// // // // // function somar(a:number, b:number){
// // // // //     return a + b;
// // // // // }
// // // // // somar(2,4)
// // // // // 203 union types (|)
// // // // // let total: string| number = 200;
// // // // // total ="4000";
// // // // // function isNumber(value: string| number){
// // // // //     if (typeof value === "number"){
// // // // //         return true;
// // // // //     } else{
// // // // //         return false;
// // // // //     }
// // // // // }
// // // // // console.log(isNumber(200));
// // // // // console.log(isNumber("200"));
// // // // // //union types no DOM
// // // // // const  button = document.querySelector('button');
// // // // // //const button: HTMLButtonElement | null
// // // // // if (button){
// // // // //     button.click();
// // // // // }
// // // // // button?.click(); //optional chaining
// // // // // //só vai ativar se for u html button element
// // // // // //203 union types 2
// // // // // //exercicio
// // // // // function toNumber (value: number | string){
// // // // //     if (typeof value === "number"){
// // // // //         return value;
// // // // //     } else if (typeof value === "string"){
// // // // //         return Number(value)
// // // // //     }else {
// // // // //         throw "value deve ser um number | string"
// // // // //     }
// // // // // }
// // // // // console.log(toNumber("20"))
// // // // //204 type e interface: TYPE
// // // // // definir um objeto é bem parecido no ts
// // // // // type Produto= {
// // // // //     nome: string;
// // // // //     preco: number;
// // // // //     teclado: boolean
// // // // // }
// // // // // //deixa a linguagem mais limpa
// // // // // function preencherDados(dados: Produto){
// // // // //     document.body.innerHTML += `
// // // // //     <div>${dados.nome}</div>
// // // // //     <div>${dados.preco}</div>
// // // // //     <p> inclui teclado: ${dados.teclado ? "sim" : "não"}</p>
// // // // //     `
// // // // // }
// // // // //  const computador: Produto ={
// // // // //     nome: "computador",
// // // // //     preco: 2000,
// // // // //     teclado: true
// // // // //  }
// // // // // preencherDados({
// // // // //     nome: "computador",
// // // // //     preco: 2000,
// // // // //     teclado: true
// // // // // })
// // // // // preencherDados({
// // // // //     nome: "notebook",
// // // // //     preco: 2000,
// // // // //     teclado: false
// // // // // })
// // // // // type Categorias =   "desing" | "programação" | "marketing";
// // // // // function preencehrCategoria(categoria: Categorias){
// // // // //     if( categoria === "desing"){
// // // // //         console.log("categoria de desing")
// // // // //     }
// // // // //     if( categoria === "programaçãos"){
// // // // //         console.log("categoria de programação")
// // // // //     }
// // // // //     if( categoria === "marketing"){
// // // // //         console.log("categoria de marketing")
// // // // //     }
// // // // // }
// // // // // preencehrCategoria("programação");
// // // // // preencehrCategoria("marketing");
// // // // // preencehrCategoria("desenvolvimento");
// // // // //204 type e interface: interface
// // // // // interface ProductInterface {
// // // // //     nome: string;
// // // // //     preco: number;
// // // // //     teclado: boolean;
// // // // // }
// // // // //204 type e interface: exercicio
// // // // async function fetchProduct(){
// // // //     const response = await fetch("https://api.origamid.dev/json/notebook.json")
// // // //     const data = await response.json();
// // // //     console.log(data);
// // // //     showProduct(data)
// // // // }
// // // // fetchProduct();
// // // // interface Empresa {
// // // //     fundacao: number;
// // // //         nome: string;
// // // //         pais: string;
// // // // }
// // // // interface Product{
// // // //     nome: string;
// // // //     preco: number;
// // // //     descricao: string;
// // // //     garantia: string;
// // // //     seguroAcidentes: boolean;
// // // //     empresaFabricante: Empresa;
// // // //     empresaMontadora: Empresa;
// // // // }
// // // // function showProduct(data: Product){
// // // //     document.body.innerHTML = `
// // // //     <div>
// // // //         <h2>${data.nome}</h2>
// // // //         <p>Preço: R$${data.preco}</p>
// // // //         <div>
// // // //             <p>Fabricante: ${data.empresaFabricante.nome}</p>
// // // //         </div>
// // // //         <div>
// // // //             <p>Montadora: ${data.empresaMontadora.nome}</p>
// // // //         </div>
// // // //     </div>
// // // //     `
// // // // }
// // // // //trabalhando com arrays
// // // // const numeros = [12,20,30,50,60]
// // // // const valores = [5,3,8,"taxa",4, "12"]
// // // // function maiorQueDez(data: Array<number>){
// // // //    return data.filter( n => n >10)
// // // // }
// // // // function filtrarValores(data: Array<number | string>){
// // // //     return data.filter(v => typeof v === "number")
// // // // }
// // // // filtrarValores(valores)
// // // // maiorQueDez(numeros)
// // // // //arrays dentro de arrays
// // // // const dados = [
// // // //     ["clifford", 10],
// // // //     ["margarida", 6],
// // // //     ["scooby", 4]
// // // // ]
// // // //exercicio com arrays
// // // // async function fetchCursos() {
// // // //   const response = await fetch('https://api.origamid.dev/json/cursos.json');
// // // //   const data = await response.json();
// // // //   console.log(data)
// // // //   mostrarCursos(data);
// // // // }
// // // // fetchCursos();
// // // // interface Curso{
// // // //     nome: string;
// // // //     aulas: number;
// // // //     gratuito: boolean;
// // // //     horas: number;
// // // //     idAulas: number[];
// // // //     nivel: "iniciante" | "avancado";
// // // //     tags: string[]
// // // // }
// // // // function mostrarCursos(cursos: Curso[]) {
// // // //     cursos.forEach(curso => {
// // // //         let color;
// // // //         curso.nivel === "iniciante" ? color = "blue" : color = "red";
// // // //         // if (curso.nivel === "iniciante"){
// // // //         //     color = "blue";
// // // //         // } else if (curso.nivel === "avancado"){
// // // //         //     color = "red";
// // // //         // }
// // // //     document.body.innerHTML += `
// // // //         <div>
// // // //             <h2 style="color: ${color}">${curso.nome}</h2>
// // // //             <p>Horas: ${curso.horas}</p>
// // // //             <p>Aulas: ${curso.aulas}</p>
// // // //             <p>Tipo: ${curso.gratuito ? "Gratuito" : "Pago"}</p>
// // // //             <p>Tags: ${curso.tags.join(", ")}</p>
// // // //             <p>ID: ${curso.idAulas.join(" | ")}</p>
// // // //         </div>
// // // //     `
// // // //     })
// // // // }
// // // //any type
// // // // function normalizar(texto: string){
// // // //     //por padrao é any, colocado implicitamente
// // // //     return texto.trim().toLowerCase();
// // // // }
// // // // console.log(normalizar(" TeXtO qUalQueR."))
// // // // // console.log(normalizar(2000))
// // // // // ts da erro se colocar o numero, pq o any foi removido
// // // // // as vezes o any faz sentido
// // // // async function fetchJSON(url: string){
// // // //     const response = await fetch(url);
// // // //     const data = await response.json();
// // // //     // nesse caso o any faz sentido pq pode vir qualquer coisa dentro do json
// // // //    manipularData(data);
// // // // }
// // // // function manipularData(data: {nome: string}){
// // // //     console.log(data.nome);
// // // // }
// // // // null e undefined
// // // //null é ausencia de valor, comum em funcoes no dom
// // // const button = document.querySelector("button");
// // // const config = localStorage.getItem("config");
// // // //antes de colocar qualquer elemento de dom, verificar se ele existe ou nao
// // // if (button !== null){
// // //     button.click();
// // // }
// // // //checagem convencional
// // // if(button){
// // //     button.click();
// // // }
// // // //checagem simplificada booleana
// // // button?.click();
// // // // checagem com optional chaining
// // // //undefined
// // // //propriedade foi instaciada mas sem valor na memoria
// // // let total;
// // // console.log(total)
// // // //retorna undefined
// // // //mesma coisa com funções, vai dar undefined
// // // //propriedade opcional
// // // interface Produto{
// // //     nome?: string;
// // // }
// // // const jogo: Produto ={
// // //     nome: "ragnarok"
// // // }
// // // const livro: Produto ={
// // // }
// // // jogo.nome;
// // // //ao passar o mouse por cima de nome, ele mostra que pode ser string ou undefined
// // // livro.nome;
// // // //ele permite criar com nome pq pode ou nao ter
// // // jogo.nome?.toLocaleUpperCase();
// // // // livro.nome.toLocaleUpperCase();
// // // //se nao colocar o ? vai dar erroo no runtime pq ele pode ser undefined
// // // // pode ser feita outra verificação comum
// // // if (jogo.nome){
// // //     jogo.nome.toLocaleUpperCase();
// // // }
// // //objetos e instancias
// // //classes e funcoes construtoras
// // class Produto{
// //     nome: string;
// //     preco: number;
// //     constructor(nome: string, preco: number){
// //         this.nome = nome;
// //         this.preco = preco
// //     }
// //     precoReal(){
// //         return `R$ ${this.preco}`
// //     }
// // }
// // const livro = new Produto("Clifford", 200);
// // console.log(livro.precoReal())
// // //instance of
// // console.log(livro instanceof Produto)
// // //true
// // class Livro {
// //     autor: string;
// //     constructor(autor: string){
// //         this.autor = autor;
// //     }
// // }
// // class Jogo{
// //     jogador: number;
// //     constructor(jogador: number){
// //         this.jogador  = jogador;
// //     }
// // }
// // function buscarProduto(busca: string){
// //     if (busca === "O Hobbit"){
// //         return new Livro ("J.R.R. Tolkien");
// //     }
// //     if (busca === "Dark Souls"){
// //         return new Jogo (1);
// //     }
// //     return null
// // }
// // const produto1 = buscarProduto("O Hobbit");
// // if (produto1 instanceof Livro){
// //     produto1.autor;
// // }
// // if (produto1 instanceof Jogo){
// //     produto1.jogador;
// // }
// // // produto1?.autor;
// // // nao sabe se é livro ou jogo
// // instance of 3 exercicio
// // trocar o link de http por https
// // const link = document.getElementById('origamid');
// // //definiu a varivel com o id
// // // link. sozinho nem aparece href pq o ts nao sabe se é nulo ou um html anchor element
// // // as classes desse link sao htmlanchor element que foi criada a partir de um htmlelement
// // //visto a partir da verificação no .dir
// // //fazer verificação
// //  if(link instanceof HTMLAnchorElement){
// //     link.href = link.href.replace("http://", "https://");
// //  }
// // // nem sempre classe que o ts retorna é a final portanto preciso fazer a verificação
// // query selector no ts
// // como saber quais tipos de elementos o  QS pode retornar
// //https://developer.mozilla.org/en-US/docs/Web/API/
// // const video = document.querySelector('#videoprincipal')
// // // quando usado o id "#" o ts nao sabe que eh um video element e coloca como Element | null
// // // verificar com instanceof o video element
// // if(video instanceof HTMLVideoElement){
// //     // video?.volume
// //     // nao preciso do opcional chaining pq ja foi verificado que nao pode ser null
// //     console.log(video.volume);
// // }
// // query selector 2
// // qsAll
// // retorna uma nodelist de elementos
// // const links = document.querySelectorAll(".link");
// // //node list de Element s
// // // console.log(NodeListOf)
// // // NodelistOf é uma interface
// // // da certo se eun definit links: NodeListOf
// // console.log(links)
// // // NodeList(3) [a.link, a.link, button.link]
// // console.log(links instanceof NodeList);
// // // retorna true
// // links.forEach((link) => {
// //   if (link instanceof HTMLAnchorElement) {
// //     console.log(link.href);
// //     // link sozinho nao vai funcionar pq o ts ts so sabe que é um element, mas o button la nao tem href
// //   }
// // });
// // // nodelist tambem tem for each 
// // // qsAll nao pode ser tratado como array!porem pode transfomrar
// // const dados = [1,2,3];
// // const arrayLinks = Array.from(links)
// // // array de elementos
// // const anchorLinks = arrayLinks.filter((link) => link instanceof HTMLAnchorElement);
// // // agora pode usar filter
// // console.log(anchorLinks);
// // // (2) [a.link, a.link]
// // qs 3 exercicio 
// const links = document.querySelectorAll(".link");
// // function ativarElemento(elemento: Element){
// //     elemento.style
// // }
// // nao deixa passar pq diz que nao tem style no element
// function ativarElemento(elemento: HTMLElement){
//     elemento.style.color = 'red';
//     elemento.style.border = '2px solid red';
// }
// // links.forEach((link) =>{
// //     if (link instanceof HTMLAnchorElement)
// //     ativarElemento(link)
// // })
// // nao pinta o botao pq botao no é htmlanchorelement
// // links.forEach((link) =>{
// //     if (link instanceof HTMLAnchorElement || link instanceof HTMLButtonElement){
// //         ativarElemento(link)
// //     }
// // })
// // mais complexo do que deveria
// links.forEach((link =>{
//     if (link instanceof HTMLElement){
//         ativarElemento(link)
//     }
// }))
// // tanto o a tanto o button herdam o htmlelement
// // 
// eventos e callback
// addEventListener
// tipo de evento que vai ocorrer e qual função de callback
// const button = document.querySelector('button');
// function handleClick(evento: Event){
//     console.log(evento)
//     // PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
// }
// event nao tem todas as propriedades e metodos necessarios 
// function handleClick(evento: PointerEvent){
//     console.log(evento.pageX)
// pointervent é mais especifico, seja pra mouse, dedo na tela ou canetinha
// }
// button?.addEventListener('pointerdown', handleClick)
// function handleScroll(evento: Event){
//     console.log(evento)
// Event {isTrusted: true, type: 'scroll', target: document, currentTarget: Window, eventPhase: 3, …}
// }
// window.addEventListener('scroll', handleScroll)
// scroll nao é um evento de u elemento especifico mas sim da janela inteira
// function ativarMenu(evento: Event){
// function ativarMenu(evento: MouseEvent){
// function ativarMenu(evento: PointerEvent){
// function ativarMenu(evento: PointerEvent | MouseEvent | KeyboardEvent){
// if (evento instanceof MouseEvent){
// console.log(evento.pageX)   
// }
//cuidado com eventos que nao tem no Event
// necessario fazer verificação 
// }
// document.documentElement.addEventListener('mousedown', ativarMenu)
// mouse down nao tem no touch event
// document.documentElement.addEventListener('touchstart', ativarMenu)
// touch start nao tem no mouse event
// window.addEventListener('keydown', ativarMenu)
// keydwon nao tem no mouse event nem pointer event
// eventos e callback 2
// const button = document.querySelector('button');
// function handleClick(this: HTMLButtonElement, event: MouseEvent){
//     console.log(this)
//     // faz referencia ao objeto que foi usado pra ativar a função
// }
// button?.addEventListener('click', handleClick)
// melhor nao usar o this dessee jeito e sim com um target e currenttarget
// const button = document.querySelector('button');
// function handleClick( event: MouseEvent){
// const elemento = event.currentTarget; 
// if (elemento instanceof HTMLButtonElement){
//     console.log(elemento)
// }
// event target ou null
// problema é que é do tipo button
//necessario verificar se é instancia de button element, ai ele permite usar as props do botao
// if (event.currentTarget instanceof HTMLButtonElement){
// console.log(event.currentTarget.innerText)
// }
// }
// button?.addEventListener('click', handleClick)
// eventos e callback 3 exercicio
// Estado dos elementos - criar o ts que ativa e inativa o menu
// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button
// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button
// 1 passo - selecionar botão
// 2 passo - adicionar evento de pointerdown, ja que é mais abrangente
// ja verificando a existencia do botão com o optional chaining
// 3 passo - criar a função do toggle menu com o evento de PointerEvent
// 4 passo - dentro da função selecionar o nav
// 5 passo - criar uma constante button que recebe o event.currentTarget
// é o elemento recebeu o eventlistener 
// 6 passo - adicionar um toggle com a classe active no nav
// 7 passo - verificar se o button é instance of de HTMLElement e adicionar os atributos
// 8 passo - verificar se o botao esta ativo ou nao para voltar os estados dos aria
// se contem a classe active
// nav for diferente de null como é boolean 
// const btnMobile = document.getElementById('btn-mobile')
// function toggleMenu(event: PointerEvent){
//     const nav = document.getElementById('nav')
//     const button = event.currentTarget;
//     if(button instanceof HTMLElement && nav){
//         const active = nav.classList.contains('active');
//         if(active){
//             nav?.classList.remove('active');
//             button.setAttribute('aria-expanded', 'false')
//             button.setAttribute('aria-label', 'Abrir menu')
//         }else{
//             nav.classList.add('active');
//             button.setAttribute('aria-expanded', 'true')
//             button.setAttribute('aria-label', 'Fechar menu')
//         }
//     }
// }
// btnMobile?.addEventListener('pointerdown', toggleMenu)
// generics 1
// tipo generico é a forma de declaarar um parametro para nossa função classe ou interface
// function retorno(a: string | number | boolean){
//     return a;
// }
// console.log(retorno('a game').tolowe)
// console.log(retorno(200))
// console.log(retorno(true))
// no caso de tentar acessar os metodos do retorno, ele nao consgue pq nao sabe o tipo correto
// function retorno<variavel>(a: variavel): variavel{
//     return a;
// }
// console.log(retorno('A gaMe').toLocaleLowerCase())
// console.log(retorno(200))
// console.log(retorno(true))
// const numeros = [1,2,3,4,5,6,7,8,9];
// const frutas = ["banana", "pera","uva","maçã","limão", "laranja" ];
// function firstFive<TipoLista>(lista: TipoLista[]): TipoLista[]{
//     return lista.slice(0,5);
// }
// console.log(firstFive(numeros));
// console.log(firstFive(frutas));
// function notNull(arg:string){
//     if (arg!= null) return arg;
//     else return null
// }
// console.log(notNull('victor')?.toLocaleUpperCase())
// bom mas se for qualquer coisa alem de string ele nao vai deixar vir
// importante passar un tipo generico
// function notNull2<T>(arg:T){
//     if (arg!= null) return arg;
//     else return null;
// }
// console.log(notNull2(200)?.toLocaleUpperCase())
// console.log(notNull2(200)?.toFixed())
// tipo generico vai impedir de colocar um metodo errado 
// function tipoDado(a:string){
//     const result = {
//         dado: a,
//         tipo: typeof a,
//     };
//     console.log(result)
//     // {dado: 'teste'}
//     return result
// }
// tipoDado("teste")
// queremos colocar qualquer dado como parametro
// function tipoDado<T> (a: T) {
//     const result = {
//         dado: a,
//         tipo: typeof a,
//     };
//     console.log(result)
//     return result
// }
// tipoDado("teste")
// {dado: 'teste', tipo: 'string'}
// tipoDado(200)
// {dado: 200, tipo: 'number'}
// tipoDado(true)
// {dado: true, tipo: 'boolean'}
// function extractText(el: HTMLElement){
//     return el.innerText
// }
// const link = document.querySelector('a')
// if(link){
//     console.log(extractText(link))
// }
// assim funciona, mas e se retornar um objeto?
// function extractText<Tipo extends HTMLElement>(el: Tipo){
//     return{
//     text: el.innerText,
//     el
//     }
// }
// const link = document.querySelector('a')
// if(link){
// console.log(extractText(link).el)
// el está como htmlelement, perdeu a referencia que era anchor element,
// apos adiiconar que o tipo generico Tipo para o el e extender que é um html element, ele volta a ser anchor element
// }
// exemplo de tipo generico numa api
// função pra pegar dados da api
// async function getData<T>(url:string): Promise<T>{
// assumindo T como tipo generico e colocando como promise 
//     const response = await fetch(url);
//     return await response.json()
// }
// interface Notebook{
//     nome: string
//     preco: number
// }
// criando a interface ele perde o tipo any pega esses metodos da interface
// função pra lidar com o dado da api
// async function handleData(){
//     const notebook: Notebook = await getData<Notebook>(
// assumi Notebook pra ser a interface de notebook
// assumindo o tipo Notebook pro getdata 
//         "https://api.origamid.dev/json/notebook.json"
//     )
//     console.log(notebook)
//     console.log(notebook.nome)
//     console.log(notebook.preco)
// }
// handleData()
// functions 1
// interfaces sao criadas em todos os tipos de funções
// função normal declarada
// function somar (a: number, b:number,c?: number): number{
// c pode ser numero ou undefined caso nao seja usado
// return a+b
// }
// somar (3,5)
// arrow function
// const subtrair =(a: number, b: number) => a-b;
// subtrair(4,3)
// como tipo, dificilmente usado
// type Callback = (event: MouseEvent) => void
// void
// no js, uma função sem return é undefined
// no ts, uma função sem return é void
function pintarTela(cor) {
    document.body.style.background = cor;
}
pintarTela("wheat");
// function pintarTela(cor: string): void pq a função nao tem retorno
function isString(value) {
    if (typeof value === 'string') {
        return true;
    }
}
console.log(isString('teste'));
// true
console.log(isString(200));
// undefined
// functions 2 
// retorno never
// funções que geram erro ou abortam a aplicação
// function abortar (mensagem: string):{
// ai fica void
// function abortar (mensagem: string):never{
//     throw new Error(mensagem)
// }
// abortar('um erro ocorreu aqui')
// console.log('tente novamente')
// unreacheable code
// metodos dentro das interfaces
