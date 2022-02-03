//random(min, max) ritorna un numero random tra il min e max inclusi 
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

const NUMERO_BICI = 10;

// Creo un array di oggetti utilizzando il ciclo for per non inserire manualmete ogni bici, ripetendo del codice
const myBici = [];
for(let i=0; i<NUMERO_BICI; i++){
    
    myBici[i] = {
        "nome": `bici-${i+1}`,
        "peso": random(8,25)
    };

}
console.log(myBici)


//prelevo le info dal primo oggetto tramite il destructuring
let {nome, peso} = myBici[0];

//dichiaro un vettore che contiene le info precedentemente prelevate
let biciLeggera = [nome, peso];

// scorro tutti gli elementi dell'array myBici in cerca di una bici più leggera
//se la trovo riassegno la variabile biciLeggera con i dati della bici più leggera trovata
for(let i=1; i<NUMERO_BICI; i++){

    let {nome, peso} = myBici[i];
    if(peso < biciLeggera[1]){
        biciLeggera = [nome, peso];
    }
    
}



alert(`La bici più leggera trovata è la ${biciLeggera[0]} con un peso di ${biciLeggera[1]} kg`);