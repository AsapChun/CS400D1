/*Write two generators that together implement a series of even Fibonacci numbers. The first
generator should return the series of fibonacci numbers starting from 0. The series F is defined
as
F(0) = 0; F(1) = 1; F(n) = F(n-1) + F(n-2)
 */
function* getFibNumbers () {
       let val1 = 0;
       let val2 = 1;
       let result = 0;
       while(true){
           result = val1 + val2;
           val1 = val2;
           val2 = result;
           yield result;
       }
}

/*
The second generator should use the first to obtain the next number in the sequence, rejecting
it if it is odd and asking for the next. Once an even Fibonacci number is obtained, it is emitted.
Use the generators to print out the first 6 even Fibonacci numbers.
 */
function* getEvenFibNumbers(){
    const fibgen = getFibNumbers();
    while(true){
        let val = fibgen.next().value;
        if(val%2 == 0){
            yield val;
        }
    }
}

const getEvenFibs = getEvenFibNumbers();
let counter =5;
while(counter >= 0){
    console.log(getEvenFibs.next().value);
    counter--;
}

