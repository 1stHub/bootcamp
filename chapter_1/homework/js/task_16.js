var arr = [1,0,2,3,4,0,0,0,5];

var noles = arr.filter(function(item) {
    return item === 0;   
});

var numbers = arr.filter(function(item){
    return item !==0;

});

console.log(numbers.concat(noles));