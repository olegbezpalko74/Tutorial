

// for (let i = 1; i <= 12; i += 3) {
//     console.log(i);
// }
// console.log('stop');

// const name = 'Mango';
// console.log(name.split(''));

//  const message = "JavaScript это интересно";
//  console.log(message.split(" "));


//  const words = ["JavaScript", "это", "интересно"];
//  console.log(words.join("-"));

//  const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
//  console.log(clients.slice(2,4));


// const scores = [1, 2, 3, 4, 5];
// const deletedScores = scores.splice(0, 3);
// console.log(scores);
// console.log(deletedScores);

// const colors = ["red", "green", "blue"];
// colors.splice(2, 0, "purple");
// console.log(colors);

const languages = ["C", "C++", "Java", "JavaScript"];
// languages.splice(1, 1, "payton");


languages.splice(2, 1, "C#", "Swift", "Go");
// console.log(languages);
console.table(languages);
console.log(languages[3]);
