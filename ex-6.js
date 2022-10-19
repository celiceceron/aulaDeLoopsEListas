/*
Crie uma função que quando chamada ela mostra
na tela a tabuada de um número, contando de
1 a N, sendo N >=1
*/

function tabuada (x, n ){
// ex: se X foi 5 N vai ser até 5x5
    let i = 1;

    while (i <= n){
        console.log(`${x} x ${i} = ${x*i}`);
        i++;
    }
}

tabuada(2, 10);