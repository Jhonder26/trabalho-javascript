// Exercício 2 - Cálculo da média de vendas

console.log("--- MÉDIA DE VENDAS SEMANAIS ---");

// 1. Solicitar o valor total das vendas de cada semana usando prompt()
// Usamos parseFloat para converter o texto digitado em número decimal
const semana1 = parseFloat(prompt("Digite o valor total de vendas da Semana 1 (ex: 1800.00):"));
const semana2 = parseFloat(prompt("Digite o valor total de vendas da Semana 2 (ex: 2200.00):"));
const semana3 = parseFloat(prompt("Digite o valor total de vendas da Semana 3 (ex: 2400.00):"));
const semana4 = parseFloat(prompt("Digite o valor total de vendas da Semana 4 (ex: 2000.00):"));

// 2. Calcular a média aritmética
const mediaVendas = (semana1 + semana2 + semana3 + semana4) / 4;

// 3. Apresentar os valores e a média com duas casas decimais usando toFixed(2)
console.log(`\nValores informados:`);
console.log(`Semana 1: R$ ${semana1.toFixed(2)}`);
console.log(`Semana 2: R$ ${semana2.toFixed(2)}`);
console.log(`Semana 3: R$ ${semana3.toFixed(2)}`);
console.log(`Semana 4: R$ ${semana4.toFixed(2)}`);
console.log(`-------------------------`);
console.log(`Média semanal de vendas: R$ ${mediaVendas.toFixed(2)}`);
