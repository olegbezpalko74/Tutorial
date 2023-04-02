
const BASE_URL = 'https://jsonplaceholder.typicode.com';


// const fetchUsers = () =>
// fetch(`${BASE_URL}/users`).then(res => {
//   if (!res.ok) {
//     throw new Error(res.status);
//   }
//   return res.json();
// });
// fetchUsers();

const fetchUsers = async () => {
  try {
    console.log(fetch(`${BASE_URL}/users`)) ;
    // .then(res => {
    //   if (!res.ok) {
    //     throw new Error(res.status);
    //   }
    //   return res.json();
    // });
    
  } catch (err) {}
};

fetchUsers();











