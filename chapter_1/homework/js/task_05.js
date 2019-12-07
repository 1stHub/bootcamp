var number = prompt("Введите первое целое число");
 
var number2 = prompt("Введите второе целое число");

console.log(number);

var plus = number + " + " + number2 + " = " + (parseFloat(number) + parseFloat(number2)); 
var minus = number + " - " + number2 + " = " + (parseFloat(number) - parseFloat(number2));
var multiply = number + " * " + number2 + " = " + (parseFloat(number) * parseFloat(number2));
var devide = number + " / " + number2 + " = " + (parseFloat(number) / parseFloat(number2));

alert(plus + " ,\n" + minus + " ,\n" + multiply + " ,\n" + devide + " . ")

// alert("10 -5 = 5");
// alert("10 * 5 = 50");
// alert("10 / 5 = 2");  


