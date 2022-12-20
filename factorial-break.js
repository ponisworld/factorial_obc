const num = 10;
let result = num;

let i = 1;

while (i <= num) {
    result *= i;
    i++;
    
    if (i === num) {
        break;
    }
} 

console.log(result);