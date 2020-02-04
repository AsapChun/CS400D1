const input = 'supercalifragilisticexpialidocious';
const first = (theString, fun) => fun(theString);
const create = (theString) => theString.split(/(?=c)/g);
const replace = (theString) => theString.replace(/\a/g, 'A');
const numOfreplace = (theString) => (theString.match(/A/g) || []).length;
const second = (theString) => {
    const modified = replace(theString);
    const answer = {
        originalString: theString,
        modifiedString: modified,
        numberReplaced: numOfreplace(modified),
        length: theString.length
    };
    return answer;
};
let f = first(input,create);
let s = first(input, second);

console.log(f);
console.log(s);