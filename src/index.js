
exports.min = function min (array) {
    console.log(array);
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        return Math.min(...array);
    }
}

exports.max = function max (array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        return Math.max(...array);
    }
}

exports.avg = function avg (array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        let sum = array.reduce((a, b) => a + b, 0);
        let avg = (sum / array.length) || 0;
        return avg;
    }
}
