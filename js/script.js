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


// const logins = ['ololol', 'sososos', 'popopo', 'hohohoh'];

// const findLogin = function (allLogins, loginToFind) {
//     for (const login of logins) {
//         if (login === loginToFind) {
//         return `користувач ${loginToFind} знайдено`;
//         }    
//     }
//     return `користувач ${loginToFind} не знайдено`;   
// }

// console.log(findLogin(logins, 'ololol'));
// console.log(findLogin(logins, 'sososos'));
// console.log(findLogin(logins, 'popopo'));
// console.log(findLogin(logins, 'hohohoh'));


// const playlist = {
//     name: "Мій супер плейлист",
//     rating: 5,
//     tracks: ["track 1","track 2","track 3"],
//     trackCount: 3,
//     getName() {
//         console.log( "hello,my darling",);
//     },
   
// } ;
// console.log(playlist);
//  playlist.getName();

const feedback = {
    good: 6,
    neitral: 10,
    bad: 3,
};

let totalFeedBack = 0;

// const keys = Object.keys(feedback);
// console.log(keys);

// for (const key of keys) {
//     console.log(key);
//     console.log(feedback[key]);

//     totalFeedBack += feedback[key];

// }
// console.log('total feedback:', totalFeedBack);

// const values = Object.values(feedback);
// console.log(values);

// for (const value of values){
//     console.log(value);
//     totalFeedBack += value;
// }

// console.log('totalfeedback' , totalFeedBack);


// Массив обьектов 

const freinds = [
    {name:'Mango', online: true },
    {name:'kiwi', online: false},
    {name: 'poly', online: true},
    {name:'ajax', online:false},
];
console.table(freinds);