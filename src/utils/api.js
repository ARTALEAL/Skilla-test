const BASE_URL = 'https://api.skilla.ru/mango/getList?';
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: `Bearer testtoken`,
};

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

export const getCalls = async (filter) => {
  console.log(filter);
  return fetch(`${BASE_URL}${filter}`, {
    method: 'POST',
    headers,
  }).then((res) => checkResponse(res));
};
