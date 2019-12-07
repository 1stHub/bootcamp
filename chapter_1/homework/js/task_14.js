// var str = "Dog";
// String.prototype.sub_String = function() 
// {
//   var subset = [];
//   for (var m = 0; m < this.length; m++) 
//   {
//     for (var n = m + 1; n <this.length + 1; n++) 
//     {
//       subset.push(this.slice(m,n));
//     }
//   }
//   return subset;
// };

// console.log("dog".sub_String());

// или

// var animal = prompt('Введите слово');

// for(var x = 0; x < animal.length; x++){
//   console.log(x);

//   for(var y = x + 1; y < animal.length + 1; y++){
//     console.log(y);
//     console.log(animal.slice(x,y));
//   }
// }

// console.log(animal.slice(x,y));

var animal = prompt("Введите слово");
var newArr = [];

for(var y = 0; y < animal.length; y++){
  for(var x = 0; x < animal.length - y; x++){
    newArr.push(animal.slice(y, animal.length - x))
  }
}
console.log(newArr);