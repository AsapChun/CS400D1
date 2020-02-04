const getOperation = operator => { //returns the functions
    switch (operator) {
        case '+':
            return (left, right) => left + right;
            break;
        case '*':
            return (left, right) => left * right;
            break;
        case '-':
            return (left, right) => left - right;
        case '/':
            return (left,right) => left / right;
    }
};

const findOper = (input) => {
    let x = input.split('');
    let left = x[0];
    let right = x[2];

    if(x.includes('+')){
        let oper =getOperation('+');
        return oper(+left, +right);
    }
    if(x.includes('-')){
        let oper = getOperation('-');
        return oper(left, right);
    }
    if(x.includes('*')){
        let oper = getOperation('*');
        return oper(left, right);
    }
    if(x.includes('/')){
        let oper = getOperation('/');
        return oper(left, right);
    }
};

console.log(findOper('4+2'));
console.log(findOper('5*7'));
console.log(findOper('6-1'));
console.log(findOper('9/2'));
