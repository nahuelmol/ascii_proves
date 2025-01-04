
function sigmoid(x) {
    let result = 1 /(1 + Math.exp(-x));
    return result;
}

function tan(x) {
    return Math.tanh(x);
}
