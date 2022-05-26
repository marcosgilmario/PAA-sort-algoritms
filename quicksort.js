const fs = require('fs');

const numbers = fs.readFileSync('./listas/quinhentosMil.txt', 'utf-8').split(' ');

const data = numbers.map(Number);

console.time();
function quicksort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    var pivot = array[0];
  
    var left = []; 
    var right = [];
  
    for (var i = 1; i < array.length; i++) {
      array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }
  
    return quicksort(left).concat(pivot, quicksort(right));
  };
  
  console.log(quicksort(data));

console.timeEnd();