

const user = [
    {
        name: 'Oleg',
        age: 48,
        sex: 'male',

},
{
    name: 'Mariy',
    age: 8,
    sex: 'female',
},
{
    name: 'Dasha',
    age: 8,
    sex: 'female',
},
{
    name: 'Sasha',
    age: 36,
    sex: 'female',
},
{
    name: 'Nikoly',
    age: 71,
    sex: 'male',
},
];


user.push({
    name: 'Vira',
    age: 71,
    sex: 'female',
},)


const foundObj = user.filter( (item) => item.age < 17);
console.log(foundObj);









