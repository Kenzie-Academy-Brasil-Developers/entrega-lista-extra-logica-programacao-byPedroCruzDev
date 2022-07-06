/* 
Sabendo que o vendedor de uma loja,
recebe uma comissão de 3% sobre o total das vendas que realizar até R$ 1.200,00.


E mais 5% sobre o que ultrapassar este valor.

Crie uma função que:

Receba o salário fixo e o valor das vendas efetuadas pelo vendedor;
E então calcule e retorne o seu salário total. */


function calculateSalary(salario, vendas){

    let comission3 = vendas * 0.03
    let comission5 = vendas * 0.05

    if(vendas < 1200){
        return comission3 + salario;
    }if(vendas > 1200){
        return comission5 + salario; 
    }
}
let saldoEmConta = calculateSalary(1500,2000)

console.log(saldoEmConta)
//-----------------------------------
/* cashMachine()
Cria uma função que receba um inteiro que representa o valor de um saque em reais (R$).
E então apresente a composição desse valor, pelas notas existentes. 
Sempre opte primeiro, por notas de maior valor.

Crie uma função que:

Recebe como parâmetro:
valor do saque;
valor do salário fixo;
valor das vendas feitas pelo vendedor;
Deve Calcular:
A quantidade de notas de cada valor necessária para o saque. Exemplo: 2 notas de R$200, 1 nota de R$100, 1 nota de R$50;
O restante do seu salário após o saque.
Retorne os resultado dos dois calculos em formato de string. Exemplo: Notas sacadas: 2 notas de R$200, 1 nota de R$100, 1 nota de R$50, Saldo Atual: R$500
 */

function cashMachine(saque, saldo){


let contador100 = 0;
let contador50 = 0;
let contador20 = 0;
let contador10 = 0;
let contador5 = 0;
let contador2 = 0;
let contador1 = 0;
    let resto = saldo - saque

if(saque != 0) {
        for(; saque >= 100;){
            contador100++;
            saque -= 100;
        }
        for(;saque >= 50;) {
            contador50++;
            saque -= 50;
        }

        for(;saque >= 20;) {
            contador20++;
            saque -= 20;
        }

        for(;saque >= 10;) {
            contador10++;
            saque -= 10;
        }

        for(;saque >= 5;) {
            contador5++;
            saque -= 5;
        }

        for(;saque >= 2;) {
            contador2++;
            saque -= 2;
        }
        for(;saque >= 1;){
            contador1++
            saque -= 1;
        }

}
 return `
        Total de notas de 100: ${contador100}
        Total de notas de 50: ${contador50}
        Total de notas de 20: ${contador20}
        Total de notas de 10: ${contador10}
        Total de notas de 5: ${contador5}
        Total de notas de 2: ${contador2}
        Total de moedas de 1: ${contador1}
        Saldo em conta apos o saque é:${resto}`
}

console.log(cashMachine(1500, saldoEmConta))


//---------------------------------

/* calculateStock()
Dada a quantidade de estoque de uma loja de produtos.
Crie uma função que receba como parâmetro:

a quantidade atual em estoque
a quantidade máxima em estoque
a quantidade mínima em estoque de um produto
E então faça com que a sua função:

calcule a quantidade média dos produtos. ((quantidade média = quantidade máxima + quantidade mínima)/2)
se a quantidade em estoque for maior ou igual à quantidade média, retorne a mensagem: 'Não efetuar compra'
senão retorne: 'Efetuar compra' */

function calculateStock(stock, maxStock, minStock){

    let mediaStock = (maxStock + minStock) / 2;
    let faltaStock = 0;


    if (stock >= mediaStock){
        return 'Não efetuar compra'
    }else 
        if(stock < mediaStock){
           for(index = 0; index < mediaStock; index++){
              faltaStoxk ++  
           }
           return`efetuar compra de ${faltaStock - stock} unidades`
        }
}
console.log(calculateStock(526,1000,50))

// --------------

/* calculateAge()
Crie uma função que receba o ano de nascimento de uma pessoa
e o ano atual, calcule e retorne:

a idade dessa pessoa em anos
a idade dessa pessoa em meses
a idade dessa pessoa em dias
a idade dessa pessoa em semanas */

function calculateAge(dataNascimento, anoAtual){

    let idade = anoAtual - dataNascimento
    let meses = idade * 12;
    let semanas = idade * 52;
    //media de semanas em um ano, não exata;
    let dias = idade * 365

    return `Idade em anos:${idade} anos, Idade em meses:${meses} meses, idade em semanas:${semanas} semanas, idade em dias: ${dias} dias!!`
}

console.log(calculateAge(1922, 2022))

//--------------------------


/* getDiagonal()
Crie uma função que receba uma matriz quadrada NxN
e retorne um vetor com sua diagonal principal.

Por exemplo: matrizQuadrada3x3 = [ [1, 2, 3] , 
                                   [4, 5, 6] , 
                                   [7, 8, 9] ], saída => 1, 5, 9
 */
const matriz = [
  [12,-8, 5],
  [1, 6, 20],
  [0, -4, 0],
];

function getDiagonal(matriz) {
  const count = matriz.length;
  let result = [];
  for(let i = 0; i < count; i++) {
    result.push(matriz[i][i]);
  }
  return result;
}

console.log(getDiagonal(matriz));

