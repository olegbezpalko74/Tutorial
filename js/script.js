const validJSON = '{ "name": "Mango", "age": 3 }';
const invalidJSON = '{ бекенд плужит } ';

try {
  console.log(1);
console.log(JSON.parse(invalidJSON));

console.log(2);
  
} catch (error) {
  console.log( error);
  if (error.name === 'SyntaxError'); {
    console.log('help');
  }

}


console.log(999);








