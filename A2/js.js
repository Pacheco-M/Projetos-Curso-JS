function SejaBemVindo(){
    console.log("Seja Bem Vindo");
}

console.log("chamando SejaBemVindo()");
SejaBemVindo();

//POO
var objProf = {
    nome: "Prof Pacheco",
    curso: "Curso JavaS",
    Aula: function(){
        console.log("Ministrando aula de JavaS");
    }
};

console.log("objProf");
console.log(objProf);

console.log("acessando propriedades do objeto");
console.log(objProf.nome);
console.log(objProf.curso);

console.log("chamando metodo do obj");
objProf.Aula();

console.log("Programação Sincrona:");

for(let index = 0;index < 11; index++){
    console.log(index);
}

console.log("fim");
console.log("Programação assincrona");

setTimeout(function(){console.log("executando")}, 2000);

console.log("termino");
