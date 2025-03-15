import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getAllOrders = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/orders`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const getAllUserOrders = (uid) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/orders/user${uid}`, {
      method: 'GET',
      headers: {
        'Content- Type': 'application/json',
      },
    })
      .then((respone) => respone.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const createOrders = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const updateOrders = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/orders/${payload.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const deleteOrders = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/orders/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((data) => resolve(data))
      .catch(reject);
  });

export { getAllOrders, getAllUserOrders, createOrders, updateOrders, deleteOrders };
