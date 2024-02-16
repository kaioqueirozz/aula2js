let numero = Number(prompt("Digite um número:"))
if (numero % 2 == 0 && numero>0) {
  console.log(`O número ${numero} é par e positivo`)
} else {
  console.log(`O número ${numero} ou é impar ou não é positivo`)
}