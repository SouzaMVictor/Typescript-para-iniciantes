TYPES

define qual deve ser o dado que vai ser usado

type Categorias =   "desing" | "programação" | "marketing";

function preencehrCategoria(categoria: Categorias){

    if( categoria === "desing"){

        console.log("categoria de desing")

    }

    if( categoria === "programaçãos"){

        console.log("categoria de programação")
	//This comparison appears to be unintentional because the types 'Categorias' and '"programaçãos"' have no overlap
    }

    if( categoria === "marketing"){

        console.log("categoria de marketing")
	//Argument of type '"desenvolvimento"' is not assignable to parameter of type 'Categorias'.
    }

}

preencehrCategoria("programação");

preencehrCategoria("marketing");    

preencehrCategoria("desenvolvimento");


INTERFACE

usa-se interface pra definir objetos e types pra definir dados mais primitivos

interface InterfaceDados {
	nome: string;
	preco: number;
	teclado: boolean;
}