const pi = 3.14
let menu
let continuar = true
let base
let altura
let area_triangulo
let area_retangulo
let raio
let area_circulo
let aresta
let volume_cubo


do {
  menu = Number(prompt("Selecione uma das opções abaixo: \n1 - Área do Triângulo \n2 - Área do Retangulo \n3- Volume do Cubo \n4- Área do Círculo\n5- Sair\n"))
  
  switch (menu){
    case 1:
      base = Number(prompt("Digite a base do triângulo (m): "))
      altura = Number(prompt("Digite a altura do triângulo (m): "))
      area_triangulo = base*altura/2
      alert(`A área do triângulo é: ${area_triangulo} m²`)
      break
    case 2:
      base = Number(prompt("Digite a base do retângulo (m): "))
      altura = Number(prompt("Digite a altura do retângulo (m): "))
      area_retangulo = base*altura
      alert(`A área do retângulo é: ${area_retangulo} m²`)
      break
    case 3:
      aresta = Number(prompt("Digite a aresta do cubo (m): "))
      volume_cubo = aresta**3
      alert(`O volume do cubo é: ${volume_cubo} m³`) 
      break
    case 4:
      raio = Number(prompt("Digite o raio do círculo (m): "))
      area_circulo = pi*raio**2
      alert(`A área do círculo é: ${area_circulo} m²`)
      break
    case 5:
      alert("Saindo...")
      continuar = false
      break
    default:
      break
  }
} while (continuar==true)