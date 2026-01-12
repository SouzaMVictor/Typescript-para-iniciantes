qualquer tipo de dado vai poder possuir qualquer outro valor

apenas colocar | pra deixar o ts saber
  

function isNumber(value: string| number){

    if (typeof value === "number"){

        return true;

    } else{

        return false;

    }

}

console.log(isNumber(200));
//true
console.log(isNumber("200"));
//false

