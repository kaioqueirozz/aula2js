let preco = Number(prompt("Digite o preço do produto:"))
let idade = Number(prompt("Digite a idade do comprador:"))

if (idade < 18){
  console.log(`O valor do produto é R$ ${preco * 0.9}`)
} else {
  console.log(`O valor do produto é R$ ${preco}`)
}