// const logItems = function (items) {
//     console.log('hello', items);

//     let total = 0;
//     for (const item of items) {
//         total += item;
       
        
//     }
//     return total;
// }

// const r1 = logItems([2, 6, 9, 125, 145, 197]);
// console.log(`Загальна сумма покупок ${r1}`);

// // console.log(logItems([2, 6, 9]));
// console.log(logItems([3, 6, 7, 9, 10]));
// console.log(logItems([5, 6, 7, 8, 9]));


const logins = ['ololol', 'sososos', 'popopo', 'hohohoh'];

const findLogin = function (allLogins, loginToFind) {
    for (const login of logins) {
        if (login === loginToFind) {
        return `користувач ${loginToFind} знайдено`;
        }    
    }
    return `користувач ${loginToFind} не знайдено`;   
}

console.log(findLogin(logins, 'ololol'));
console.log(findLogin(logins, 'sososos'));
console.log(findLogin(logins, 'popopo'));
console.log(findLogin(logins, 'hohohoh'));
