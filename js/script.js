// crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.
const zucchine = [
    {
        varieta: 'piccola',
        kg: 1,
        cm: 10,
    },
    {
        varieta: 'media',
        kg: 2,
        cm: 10,
    },

    {
        varieta: 'grande',
        kg: 3,
        cm: 30,
    },

    {
        varieta: 'dritta',
        kg: 4,
        cm: 33,
    },

    {
        varieta: 'curva',
        kg: 5,
        cm: 10,
    },

    {
        varieta: 'tonda',
        kg: 6,
        cm: 30,
    },

    {
        varieta: 'quadrata',
        kg: 7,
        cm: 30,
    },

    {
        varieta: 'allungata',
        kg: 8,
        cm: 130,
    },

    {
        varieta: 'striscia',
        kg: 9,
        cm: 10,
    },

    {
        varieta: 'pois',
        kg: 10,
        cm: 10,
    },

]

let sum = 0;

for (let index = 0; index < zucchine.length; index++) {
const element = zucchine[index];
sum += element.kg;

}

console.log(sum);

// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

const zucchineCorte = [];
const zucchineLunghe = [];
let minSum = 0;
let maxSum = 0;

for (let index = 0; index < zucchine.length; index++) {
    const element = zucchine[index];

    if (element.cm < 15) {
        zucchineCorte.push(element);
        minSum += element.kg;
    }
    else if (element.cm >= 15) {
        zucchineLunghe.push(element);
        maxSum += element.kg;
    }
}


console.log(zucchineLunghe, zucchineCorte);
console.log('peso lunghe: ' + maxSum, 'peso corte: ' + minSum);

// Scrivi una funzione che fonda due array(aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
// es. [a, b, c], [1, 2, 3] →[a, 1, b, 2, c, 3].

let array1 = ['a', 'b', 'c'];
let array2 = [1, 2, 3];
let fusedArray = fusion(array1, array2);



function fusion(array1, array2) {
    let arrayFusion = [];
    for (let index = 0; index < array1.length; index++) {
        const element1 = array1[index];
        const element2 = array2[index];
        arrayFusion.push(element1, element2);
    }
    return console.log(arrayFusion);
    
}

