let peso = Number(prompt("Digite seu Peso (KG)"))
let altura = Number(prompt("Digite sua altura (m)"))
let imc = peso / (altura * altura)

console.log(`Seu IMC é ${imc}`)

if(imc < 18.5){
  console.log(`De acordo com a tabela de IMC, você está abaixo do peso`)
} else if(imc >= 18.5 && imc < 25){
  console.log (`De acordo com a tabela de IMC, você está com o peso normal`)
}else if (imc >= 25 && imc < 30){
  console.log (`De acordo com a tabela de IMC, você está com sobrepeso`)
}else if (imc >= 30 && imc < 34.9){
  console.log( `De acordo com a tabela de IMC, você está com obesidade grau I`)
} else if (imc >= 35 && imc < 40){
  console.log(`De acordo com a tabela de IMC, você está com obesidade grau II`)
} else if (imc >= 40){
  console.log(`De acordo com a tabela de IMC, você está com obesidade grau III`)
}