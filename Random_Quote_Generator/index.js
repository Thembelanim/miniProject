const quotes = ["Quotes1","Quotes2", "Quotes3", "Quotes4", "Quotes5", "Quotes6", "Quotes7", "letho", "Quotes8", "Quotes9", "Mqobi"]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote(){
    if (usedIndexes.size >= quotes.length) usedIndexes.clear()

    while (true){
        const randomIdx = Math.floor(Math.random()*quotes.length)

        if (usedIndexes.has(randomIdx)) continue

        quoteElement.innerHTML = quotes[randomIdx]
        usedIndexes.add(randomIdx)
        break;
    }

}