console.log("===========")
console.log("ATIVIDADE 1")
console.log("")
numero = 0
if (numero > 0){
    console.log("o numero é POSITIVO");
}
else if (numero < 0){
    console.log("o numero é NEGATIVO");
}
else if (numero == 0){
    console.log("o numero é igual a ZERO");
}
console.log("===========")
console.log("ATIVIDADE 2")
console.log("")
numero = 18;
if (numero > 17){
    console.log("ela é MAIOR de idade");
}
else if (numero < 18 ){
    console.log("ela é MENOR de idade");
}
console.log("===========")
console.log("ATIVIDADE 3")
console.log("")

numero = 10
    if(numero % 2 == 0){
console.log(" o numero é PAR");
    }else {
console.log("o numero é IMPAR");
    }
    console.log("===========")
    console.log("ATIVIDADE 4")
    console.log("")

    numero01 = 40
    numero02 = 30
    numero03 = 20

    if (numero01 > numero02){
        console.log("o numero 1 é maior que o numero 2");
        if (numero01 > numero03)
            console.log("o numero 1 é maior que o numero 3")
        console.log("o maior numero é o 1")
    }
    if (numero02 > numero01){
        console.log("o numero 2 é maior que o numero 1");
        if (numero01 > numero03)
            console.log("o numero 2 é maior que o numero 3")
        console.log("o maior numero é o 2")
}
if (numero03 > numero01){
    console.log("o numero 3 é maior que o numero 1");
    if (numero03 > numero02)
        console.log("o numero 3 é maior que o numero 2")
    console.log("o maior numero é o 3")
}

console.log("===========")
console.log("ATIVIDADE 5")
console.log("")

letrausuario = "A"

if (letrausuario.toLowerCase() == "a"){
    console.log("VOGAL");
} 
else if (letrausuario.toLowerCase() == "e"){
    console.log("VOGAL");
} 
else if (letrausuario.toLowerCase() == "i"){
    console.log("VOGAL");
} 
else if (letrausuario.toLowerCase() == "o"){
    console.log("VOGAL");
} 
else if (letrausuario.toLowerCase() == "u"){
    console.log("VOGAL");
}
 else {
    console.log ("CONSOANTE")
}

console.log("===========")
console.log("ATIVIDADE 6")
console.log("")

nota = 1

if (nota >= 7){
console.log("alunos aprovado")
}
else if(nota >= 5){
        console.log("aluno que estão de recuperação")
}
else  {
    console.log("esta reprovado")
}
console.log("===========")
console.log("ATIVIDADE 7")
console.log("")

var numero01, numero02, numero03, numero04
numero01 = 5
numero02 = 4
console.log("5 + 4 =", numero01+numero02)
console.log("5 - 4 =", numero01-numero02)
console.log("5 * 4 =", numero01*numero02)
console.log("5 / 4=", numero01/numero02)

console.log("===========")
console.log("ATIVIDADE 8")
console.log("")

var ano
ano = 2028
if(ano % 4 ==0 ){
    console.log("esse ano é bissesto ")
}
else{
    console.log("esse ano não é bissesto")
}

console.log("===========")
console.log("ATIVIDADE 10")
console.log("")

var peso, altura, minhaaltura, imc
peso = 100
altura = 1,85

minhaaltura = altura * altura
imc = peso / minhaaltura
if (imc <= 18.5){
    console.log("abaixo do peso")
}
else if (imc>=18.5 <= 24.9){
    console.log("peso ideal")
}
else (imc >=24.9 , "acima do peso")

console.log("===========")
console.log("ATIVIDADE 11")
console.log("")

var meses
meses = "março"

if (meses =="março"|| meses == "maio" || meses == "julho" || meses == "outubro" || meses == "dezembro" ) {
console.log ("possui 30 dias no mes de", meses)
}
else if ( meses == "janeiro" || meses =="abril" || meses == "junho" || meses == "setembro" || meses == "novembro") {
    console.log ("possui 31 dias no mes de", meses)
}
else { (meses == "fevereiro")
    console.log ( meses, "mes que tem 29 dias")
}

console.log("===========")
console.log("ATIVIDADE 12")
console.log("")

var lados1 = 10
    var lados2 = 30
    var lados3 = 20
 
    if (lados1 == lados2 && lados2 == lados3){
        console.log("é um triângulo equilátero")
    }else if(lados1 == lados2 != lados3 || lados2 == lados3 != lados1 || lados3 == lados1 != lados3){
        console.log("triângulo isósceles") }
    else {lados1 != lados2 != lados3
        console.log("Triangulo Escaleno")}
        

console.log("===========")
console.log("ATIVIDADE 13")
console.log("")

var aleatorio=Math.floor (Math.random() * 101)
    var chute=77
 
    console.log(aleatorio)
 
    if(chute==aleatorio){
        console.log("acertou!!")
    }else if(chute>aleatorio){
        console.log("errou! Ele é menor ")
    }else if(chute<aleatorio){
        console.log("errou! Ele é maior")
    }else{
        console.log("Dados invalidos")
}
        