let primo = Number(prompt("Digite um número:"))
let dividendo = 2
let quociente = primo / dividendo
let teste = false

do{
  if (primo % dividendo == 0) {
    console.log(`O número ${primo} não é primo`)
    teste = true
    break
  } else {
    dividendo++
  }
}while (quociente > dividendo)

if(!teste){
  console.log (`O número ${primo} é primo`)
  }