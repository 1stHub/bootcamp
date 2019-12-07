const words = [
    "javascript",
    "object",
    "python",
    "task",
    "makers",
    "aaaaaaaaaaaaaaaaaà"
]

let word = words[Math.floor(Math.random()*words.length)]

let answerArr = word.split("").map(function(item){
    return "_"
})

let remainingLetters = word.length;

let attempts = 0;
let trueAttempts = 0;

while(remainingLetters > 0) {
    let guess = prompt("Угадайте букву, или нажмите отмена, чтобы выйти из игры \n " 
    + answerArr.join()).toLowerCase();
    
    console.log(guess);
    if(guess === "") continue;
    if(guess === null) break;

    if(guess.length !== 1){
        alert("Пожалуйста, введите только одну букву.");
        continue;
    }
    let isTrueGuess = false;
    word.split("").map(function(item, index){
        if(guess === item && answerArr[index] == "_"){
            isTrueGuess = true;
            answerArr[index] = guess;
            remainingLetters --;
        }
    })  
    if(isTrueGuess){
        trueAttempts++;
    }
    attempts++;
}

if(!remainingLetters){
    alert("Ура!!! Вы отгадали слово: \n" + answerArr.join(""))
    alert("Количество попыток: " + attempts);
    alert("Общий счёт " + 100/attempts*trueAttempts)
}

