1- Abra o terminal e digite: node --version (se aparecer algum número de versão, boa próximo passo, caso contrario peça para trocar de computador)
2- Digite no terminal: npm init -y (deve aparecer package.json nos arquivos)
3- Digite no terminal: npm i readline-sync
4- Copie e cole:

const readline = require("readline-sync");

let quantidadePedidos = Number(readline.question("Quantos pedidos serao feitos? "));
let totalGeral = 0;
let pedidos = [];

for (let i = 0; i < quantidadePedidos; i++) {
    console.log("\nPedido " + (i + 1));

    let nome = readline.question("Nome do produto: ");
    let quantidade = Number(readline.question("Quantidade: "));
    let preco = Number(readline.question("Preco unitario: "));

    let subtotal = quantidade * preco;
    totalGeral += subtotal;

    pedidos.push({
        nome: nome,
        quantidade: quantidade,
        preco: preco,
        subtotal: subtotal
    });
}

let desconto = 0;

if (totalGeral > 200) {
    desconto = totalGeral * 0.15;
} else if (totalGeral > 100) {
    desconto = totalGeral * 0.10;
}

let totalFinal = totalGeral - desconto;


for (let i = 0; i < pedidos.length; i++) {
    console.log("Produto: " + pedidos[i].nome);
    console.log("Quantidade: " + pedidos[i].quantidade);
    console.log("Preco unitario: R$ " + pedidos[i].preco.toFixed(2));
    console.log("Subtotal: R$ " + pedidos[i].subtotal.toFixed(2));
    console.log("");
}

console.log("Total Geral: R$ " + totalGeral.toFixed(2));
console.log("Desconto: R$ " + desconto.toFixed(2));
console.log("Total Final: R$ " + totalFinal.toFixed(2));
