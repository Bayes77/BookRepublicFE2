// import { clientCredentials } from '../utils/client';

// const endpoint = clientCredentials.databaseURL;

// const getAllUsers = (uid) =>
//   new Promise((resolve, reject) => {
//     fetch(`${endpoint}/api/users/${uid}`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data) {
//           resolve(Object.values(data));
//         } else {
//           resolve([]);
//         }
//       })
//       .catch(reject);
//   });

//   export default getAllUsers;
