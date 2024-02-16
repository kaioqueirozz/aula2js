let lado1 = Number(prompt("Digite o primeiro lado do triângulo:"))
let lado2 = Number(prompt("Digite o segundo lado do triângulo:"))
let lado3 = Number(prompt("Digite o terceiro lado do triângulo:"))

if (lado1 == lado2 && lado2 == lado3){
  console.log("O triângulo é equilátero")
} else if(lado1 != lado2 && lado2!= lado3 && lado1 != lado3){
  console.log("O triângulo é escaleno")
}else {
  console.log("O triângulo é isósceles")  
}