const logItems = function (items) {
    console.log('hello');

    let total = 0;
    for (const item of items) {
        total += item;
       
        
    }
    return total;
}
console.log(logItems([2, 6, 9]));
console.log(logItems([3, 6, 7, 9, 10]));
console.log(logItems([5, 6, 7, 8, 9]));