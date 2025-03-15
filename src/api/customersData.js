import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getCustomers = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/customers`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

export default getCustomers;
