//random(min, max) ritorna un numero random tra il min e max inclusi 
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

function trovaBiciLeggera(numeroBici, elencoBici){
    //prelevo le info dal primo oggetto tramite il destructuring
    let {nome, peso} = elencoBici[0];

    //dichiaro una variabile oggetto che contiene le info precedentemente prelevate
    let biciLeggera = {nome, peso};

    // scorro tutti gli elementi dell'array elencoBici in cerca di una bici più leggera
    //se la trovo riassegno la variabile biciLeggera con i dati della bici più leggera trovata
    //parto da 1 perchè elencobici[0] è l'inizializzazione, vedi righe precedenti
    for(let i=1; i<numeroBici; i++){

        let {nome, peso} = elencoBici[i];
        if(peso < biciLeggera.peso){
            biciLeggera = {nome, peso};
        }
        
    }

    //e se la bici più leggera ha il peso uguale ad altre??
    const arrayBiciLeggere = [biciLeggera];
    for(let i=0; i<numeroBici; i++){
        if(biciLeggera.peso == elencoBici[i].peso && elencoBici[i].nome != biciLeggera.nome){
            let altraBiciLeggera;
            let {nome} = elencoBici[i];
            altraBiciLeggera = {nome};
            arrayBiciLeggere.push(altraBiciLeggera);
        }
    }

    return arrayBiciLeggere;
}

function stampaArray(bici){

    let bicicletta = "";

    for(let i=0; i<bici.length; i++){
        bicicletta +=   `<tr>
                            <td>${bici[i].nome}</td>
                            <td>${bici[i].peso} kg</td>
                        </tr>`;
    }
   
    const elencoBici = document.getElementById("elenco_bici");
    elencoBici.innerHTML += bicicletta;

    return bicicletta;
}

const NUMERO_BICI = 10;




//---------------------------------------------------------------------------------------------------------------------------------------------------------





// Creo un array di oggetti utilizzando il ciclo for per non inserire manualmete ogni bici, ripetendo del codice
const myBici = [];
for(let i=0; i<NUMERO_BICI; i++){
    
    myBici[i] = {
        "nome": `bici-${i+1}`,
        "peso": random(8,25)
    };

}

//append bici su DOM
stampaArray(myBici);

const biciLeggera = trovaBiciLeggera(NUMERO_BICI, myBici);
console.log(biciLeggera)
//append su DOM della bici più leggera
const risultatoBiciLeggera = document.getElementById("bici_leggera");
if(biciLeggera.length == 1){

    //significa che esiste una solo bici più leggera e nessun altra bici ha lo stesso peso
    risultatoBiciLeggera.innerHTML = `La bici più leggera trovata è la ${biciLeggera[0].nome} con un peso di ${biciLeggera[0].peso} kg`;

}else if(biciLeggera.length > 1){

    //esistono più bici che hanno lo stesso peso e contemporaneamente è il peso minore
    let piuBiciLeggere = `Le biciclette `;
    for(let i=0; i<biciLeggera.length; i++){
        piuBiciLeggere += `${biciLeggera[i].nome} `
    }
    piuBiciLeggere += `sono le più leggere e hanno un peso di ${biciLeggera[0].peso} kg`;

    risultatoBiciLeggera.innerHTML = piuBiciLeggere;

}
