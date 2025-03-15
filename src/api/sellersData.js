'use Client';

import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getSellers = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/sellers`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

export default getSellers;
