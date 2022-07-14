function fizzbuzz(num) {
    const divisible = (num,divisor) => num % divisor == 0;
    if(typeof num != "number") return "Error: El parametro ingresado no es un número";    
    if(num == 0) return num;    
    if(divisible(num,3) && divisible(num,5)) return 'fizzbuzz';  
    if(divisible(num,3)) return 'fizz'
    if(divisible(num,5)) return 'buzz';
    return(num)
}


function print(num) {
    for(let i = 0; i <= num; i++) console.log(`${i}: ${fizzbuzz(i)}`)
}
console.log(fizzbuzz("Hola"));
print(16);
module.exports = fizzbuzz;