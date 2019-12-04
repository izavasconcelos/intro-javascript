/*var nome = "Izabela Vasconcelos";
var idade = 24;
var idade2 = 20;
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade);
alert (idade+idade2);
console.log(nome);
console.log(frase.replace("Japão","Brasil"));
console.log(frase.toUpperCase());
var lista = ["maça", "pêra", "laranja"];
console.log(lista);
lista.push("uva");
console.log(lista);
console.log(lista.length);

lista.pop();
console.log(lista);
console.log(lista.length);

console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.toString()[0]);
console.log(lista.join(" - "));

var fruta = {nome:"maça", cor:"vermelha"};
console.log(fruta.nome);
console.log(fruta.cor);

var fruta = [{nome:"maça", cor:"vermelha"},{nome:"uva", cor:"roxa"}];
console.log(fruta[0].nome); 

var idade = prompt("Qual sua idade?");
if(idade>=18){
    alert("Maior de idade!");
}else{
    alert("Menor de idade!")
}*/

/*var count = 0;

while(count < 5){
    console.log(count);
    count++;
}

for(i=0;i<5;i++){
    console.log(i);
}
var d = new Date();
alert(d.getMonth()+1);
*/

function soma(a,b){
    return a+b;
}

function validaIdade(idade){
    if(idade>= 18){
        return true;
    }else{
        return false;
    }

}
//var idade = prompt("qual sua idade?")
//console.log(validaIdade(idade));
function botao(){
    document.getElementById("click").innerHTML = "Obrigada!!";
    //alert("Obrigada!!");
}
function redirecionar(){
    window.open("https://www.youtube.com/")
}

function trocar(elemento){
    //document.getElementById("mouse").innerHTML = "Novo texto";
    //alert("trocar texto")
    elemento.innerHTML = "Novo texto";
}
function voltar(elemento){
    //document.getElementById("mouse").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Pagina carregou");
}
function change(elemento){
    console.log(elemento.value);
}

