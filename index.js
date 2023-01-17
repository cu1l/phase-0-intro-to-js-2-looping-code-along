const names = [];
let celebration = "";
const thankYou = [];

function writeCards(names, celebration){
    for(let i = 0; i < names.length; i++){
        thankYou.push(`Thank you, ${names[i]}, for the wonderful ${celebration} gift!`);
    }
    return thankYou;
    debugger;
}

writeCards(names, "birthday");

let countingNumber;

function countDown(countingNumber){
    while(countingNumber+1 > 0){
        console.log(countingNumber--);
    }
}

countDown(11);