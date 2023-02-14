// let count = 10;

 

//  function sayHello (firstName) {
//    count = 30;
//   console.log(count);


//    console.log(firstName);

//  }
//  sayHello('Oleg')

// console.log(count);

// let test = 'oleg';

// if (5 < 10) {
//   let test = 'correct'

//   console.log(test);
// }
// console.log(test);
// let i = 100;

// for (let i = 0; i < 10; i++){
//   console.log(i)
// }
// console.log(i);

document.getElementById("btn-hapines").addEventListener('click', function() {
document.querySelector(".img").style.display = 'inline';
document.getElementById("btn-hapines").disabled = true;
document.getElementById("btn-sadnes").disabled = false;
})

document.getElementById("btn-sadnes").addEventListener('click', function() {
    document.querySelector(".img").style.display = 'none';
    document.getElementById("btn-hapines").disabled = false;
    document.getElementById("btn-sadnes").disabled = true;
    })




