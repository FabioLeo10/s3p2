// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio
// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

//{ []

// {} []
//ES7
function changeH1(){
document.querySelector('h1').innerText = 'Io sono h1'
}
changeH1()

//ES8
function changeColor(){
    document.querySelector('body').style.backgroundColor = '#f5f5dc'
}
changeColor()

//ES9
function changeAddress(){
    document.querySelector("footer > div:nth-child(2)").innerText = 'Hidden Address'
}
changeAddress()

//ES10

function classCss(){
    let changeLink = document.querySelectorAll("a")
    for(i = 0; i< changeLink.length; i++){
        changeLink[i].classList.add('New')
    }
   
}  
classCss()  

//ES11
//non funziona
let images = document.querySelectorAll('img')
function hiddenImage(){
    for(i = 0; i < images.length; i++){
        images[i].classList.toggle('hidden')
        
    }
}
hiddenImage()

  
//ES12
//preso dalla soluzione per vedere il risultato sul web
const getRandomColor = function () {
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    return 'rgb(' + red + ', ' + green + ', ' + blue + ')'
}
const setRandomColor = function () {
    const randomColor = getRandomColor()
    let price = document.querySelectorAll('h5')
    for (let i = 0; i < price.length; i++) {
      let singlePrince = price[i]
      singlePrince.style.color = randomColor
    }
}
setRandomColor()