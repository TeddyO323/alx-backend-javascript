import guardrail from './9-try';

const divideFunction = (numerator, denominator) => {
    if (denominator === 0) {
        throw Error('cannot divide by 0');
    }
    return numerator / denominator;
};

console.log(guardrail(() => divideFunction(10, 2)));
console.log(guardrail(() => divideFunction(10, 0)));
