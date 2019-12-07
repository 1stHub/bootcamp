// var Targaryen = ["TaArryn" , "Stark" ,  "Lannister" , "Baratheon" , "Greyjoy"]

// или

var Targaryen = []; 
Targaryen.push("TaArryn");
Targaryen.push("Stark");
Targaryen.push("Lannister");
Targaryen.push("Baratheon");
Targaryen.push("Greyjoy");

console.log(Targaryen);
console.log(Targaryen[2]);
console.log(Targaryen[0] + " , " + Targaryen[Targaryen.length - 1]);

//or 
// console.log(Targaryen[0] + ' , ' + Targaryen[4]);

var firstTargaryen = Targaryen.shift();
console.log(firstTargaryen);

var lastTargaryen = Targaryen.pop();
console.log(lastTargaryen);
// Targaryen.unshift("TaAaryn");
console.log(Targaryen);