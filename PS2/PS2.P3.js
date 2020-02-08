/*
Write a function that prints the cube value of its input (ie f(x)=x^3). Next, write a single line of
code to call the function on each value of the array [1,2,3,4,5,6,7].
 */

const cube = (value)=>{
    return Math.pow(value, 3);
}
let arr =[1,2,3,4,5,6,7];
console.log(arr.map(cube));