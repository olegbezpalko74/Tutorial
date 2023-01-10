// let quantity = prompt('Кількість');
// quantity = Number(quantity);

// console.log(quantity);
// console.log(typeof quantity);


// let elementWidth = '50px';
// elementWidth = Number. parseInt(elementWidth);
// console.log('elementwidth:', elementWidth);

// let elementHeight = '50.56px';
// elementHeight = Number. parseFloat(elementHeight);
// console.log('elementHeight:', elementHeight);


// const x1 = 5;
// const x2 = 10;
// const number = 45;

// console.log(`число ${number} попадає у відрізок до ${x1}`,number < x1);
// console.log(`число ${number} попадає у відрізок після ${x2}`,number > x2);

// const res1 = number > x1 && number < x2;

// console.log(`число ${number} попадає у відрізок після ${x1} та до ${x2}`, res1);

// const res2 = number < x1 || number > x2;

// console.log(`число ${number} попадає у відрізок до ${x1} та після ${x2}`, res2);

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;
// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log('Можна відкрити чат??',canOpenChat);
const userName = 'Oleg';
const age = 48;
const gender = 'male'
function sayHello(name,age,gender) {
    alert('Hello,dear ' + name)
    if (age < 49) {
        alert('you are too young')
    }
    if (gender === 'male') {
        alert('welcome to the club')
    }
}
sayHello(userName,age,gender);

