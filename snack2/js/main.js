//random(min, max) ritorna un numero random tra il min e max inclusi 
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

//creaNuovoArray(numeroSquadre, elencoSquadre) ritorna un array con solo i nome e i falli subiti da ogni squadra
function creaNuovoArray(numeroSquadre, elencoSquadre){

    const nuovoArray = [];
    for(let i=0; i<numeroSquadre; i++){
        let {nome, falli_subiti} = elencoSquadre[i];
        nuovoArray[i] = [nome, falli_subiti];
    }

    return nuovoArray;

}

const NUMERO_SQUADRE = 10;



// -----------------------------------------------------------------------------------------------------------------------------------------------------------



// Creo un array di oggetti utilizzando il ciclo for per non inserire manualmete ogni squadra, ripetendo del codice
const mySquadre = [];
for(let i=0; i<NUMERO_SQUADRE; i++){
    
    mySquadre[i] = {
        "nome": `squadra-${i+1}`,
        "punti fatti": 0,
        "falli_subiti": 0,
    };

    mySquadre[i]["punti fatti"] = random(100, 1000);
    mySquadre[i].falli_subiti = random(0, 10);

}
console.log(mySquadre);

//invoco creaNuovoArray(numeroSquadre, elencoSquadre) al fine di creare il nuovo array secondo specifiche di progetto
const nuovoArray = creaNuovoArray(NUMERO_SQUADRE, mySquadre);

// eseguo la stampa di tutti i dati richiesti
for(let i=0; i<nuovoArray.length; i++){
    console.log(`${nuovoArray[i][0]} ha subìto ${nuovoArray[i][1]} falli`);
}