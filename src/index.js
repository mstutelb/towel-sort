// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    
    let result = [];
    matrix.forEach((element, idx) => {
        if (idx % 2) element = element.reverse();
        result = result.concat(element);
    });

    return result;
};
