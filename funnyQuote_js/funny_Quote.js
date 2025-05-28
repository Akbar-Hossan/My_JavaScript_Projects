const quoteElement = document.getElementById("quote");

const quotes = ["I'm not lazy, I'm on energy-saving mode.",
"Life is short. Smile while you still have teeth.",
"Behind every successful student, there is a deactivated social media account.",
"Brains are awesome. I wish everybody had one.",
"My fake plants died because I did not pretend to water them." ,
"My wallet is like an onion. Opening it makes me cry.",
"My brain has too many tabs open. And one of them is playing music and I can’t find it!",
"Group projects: where one does all the work and five take the credit.",
"I study best the night before... the night before the exam.",
"Trying not to sleep in class is exactly how I fall asleep."
]
const usedIndexes = new Set()


function generateQuote(){
    if(usedIndexes.size >= quotes.length){
        usedIndexes.clear()
    }
   while(true){ 

const indeIdx = Math.floor(Math.random()*quotes.length)
if(usedIndexes.has(indeIdx)) continue;

//  const quote=
 quoteElement.innerHTML = quotes[indeIdx];
 usedIndexes.add(indeIdx)
 break;
}}