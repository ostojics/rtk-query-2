import httpClient from 'utils/httpClient/httpClient';

export function getUserById(id: number) {
  return httpClient.get(`https://jsonplaceholder.typicode.com/users/${id}`);
}
