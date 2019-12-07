var drinks = prompt("Введите напиток");

switch(drinks) {
    case "vodka" :
    case "beer" : alert("Алкоголь вредит вашему здоровью!")
    break;
    case "coffee" : alert("Кофеин вредит вашему здоровью");
    break;
    case "milk" : alert("Поздравляем с выбором!");
    break;
    default: alert("Точно?");
    
}