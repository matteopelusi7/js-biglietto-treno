// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
    // il prezzo del biglietto è definito in base ai km (0.21 € al km)
    // va applicato uno sconto del 20% per i minorenni
    // va applicato uno sconto del 40% per gli over 65.
// L’esercizio richiede di fare un minimo di controlli sui dati inseriti dall’utente.
// L’output del prezzo finale va messo fuori in forma umana
// (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca.


const kmUser = parseInt ( prompt('Quanti chilometri vuoi percorrere?') );
console.log(kmUser);

if (isNaN(kmUser)) {
    alert ('Inserisci un numero!');
}

const ageUser = parseInt ( prompt('Quanti anni hai?') );
console.log(ageUser);

if (isNaN(ageUser)) {
    alert ('Inserisci un numero!');
}

let priceTot = kmUser * 0.21;

priceTot = priceTot.toFixed(2);

const priceMin = (priceTot * 20) / 100;

const priceOver = (priceTot * 40) / 100;

let priceTicket;

if (ageUser < 18) {
    priceTicket = priceTot - priceMin;
    console.log(`il prezzo del biglietto è di ${priceTicket.toFixed(2)} €`);
} else if (ageUser > 65) {
    priceTicket = priceTot - priceOver;
    console.log(`il prezzo del biglietto è di ${priceTicket.toFixed(2)} €`);
} else {
    priceTicket = priceTot;
    console.log(`il prezzo del biglietto è di ${priceTicket} €`);
}