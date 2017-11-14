const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

export function parseJSON(response) {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(response);
}

export const getStats = () => {
  const options = { method: 'GET', ...headers };
  return fetch('/api/stats', options)
    .then(parseJSON);
};

export default { getStats };
