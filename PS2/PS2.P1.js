/*Write two generators that together implement a series of even Fibonacci numbers. The first
generator should return the series of fibonacci numbers starting from 0. The series F is defined
as
F(0) = 0; F(1) = 1; F(n) = F(n-1) + F(n-2)
 */
const getFibNumbers = (value) =>{
       if(value == 0){
           return 0;
       }
       if(value == 1){
           return 1;
       }
       else{
           return getFibNumbers(value-1) + getFibNumbers(value-2);
       }
}
/*
The second generator should use the first to obtain the next number in the sequence, rejecting
it if it is odd and asking for the next. Once an even Fibonacci number is obtained, it is emitted.
Use the generators to print out the first 6 even Fibonacci numbers.
 */
const printEvenNumbers = (value) =>{
    let counter = 0;
    let position = 0;
    while(counter != value) {
        const x = getFibNumbers(position);
        if (x % 2 == 0) {
            counter = counter + 1;
            console.log(x);
        }
        position++;
    }
}

printEvenNumbers(6);
