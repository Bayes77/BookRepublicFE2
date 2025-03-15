import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getAllProducts = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/Products`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const getSingleProduct = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/products/${id}`, {
      method: 'GET',
      headers: {},
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

export { getAllProducts, getSingleProduct };
