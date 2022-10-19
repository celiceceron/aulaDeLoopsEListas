/* 
Crie uma função que retorna uma lista 
com números preenchidos de 1 a 10.
[1,2,3,4,5,6,7,8,9,10]
*/

// EX 1:
/*
function geradorDeLista (){
    return [1,2,3,4,5,6,7,8,9,10]
}

console.log(geradorDeLista());
*/

// ex 2:
/*
function geradorDeLista (){
    let lista = [];

    lista[0] = 1;
    lista[1] = 2;
    lista[2] = 3;
    lista[3] = 4;
    lista[4] = 5;
    lista[5] = 6;
    lista[6] = 7;
    lista[7] = 8;
    lista[8] = 9;
    lista[9] = 10;

    return lista
}

console.log(geradorDeLista()); 
*/

// ex 3:
/*
function geradorDeLista (){
    let lista = [1,2,3,4,5,6,7,8,9,10];

    return lista
}

console.log(geradorDeLista());  
*/

// ex 4_ lista de 1 a 100:
/*
function geradorDeLista (){
    let i = 0;
    let lista = [];

    while (i < 100) {
        lista [i] = i+1;
        i++;
        
    }
    return lista
}

console.log(geradorDeLista());
*/

// ex 5_acessando elementos da lista:
/*
function geradorDeLista (){
    let i = 0;
    let lista = [[1, 2], [3, 4], [5,  6]];
    console.log(lista[0][1]);
    
    return lista
}

console.log(geradorDeLista());
*/

// ex 6_lista de 1 a N:
/*
function geradorDeLista (n){
    let i = 0;
    let lista = [];
    
    while (i < n) {
        lista [i] = i+1;
        i++;

    }

    return lista
}

console.log(geradorDeLista(10));
*/

// ex 7_transformando lista em String:
function geradorDeLista (n){
    let i = 0;
    let lista = [];
    
    while (i < n) {
        lista.push(i+1);
        i++;

    }

    return lista
}

let lista = geradorDeLista(100);
console.log(lista.toLocaleString());
