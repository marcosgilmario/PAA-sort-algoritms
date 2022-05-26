const fs = require('fs');

const numbers = fs.readFileSync('./listas/quinhentosMil.txt', 'utf-8').split(' ');

const data = numbers.map(Number);

console.time();
function bubbleSort(items) {
    var length = items.length;  
    for (var i = 0; i < length; i++) { 
          for (var j = 0; j < (length - i - 1); j++) { 
                   if(items[j] > items[j+1]) {
                           var tmp = items[j]; 
                items[j] = items[j+1]; 
                items[j+1] = tmp;
            }
        }
    }
    return items;
}

console.log(bubbleSort(data));

console.timeEnd();