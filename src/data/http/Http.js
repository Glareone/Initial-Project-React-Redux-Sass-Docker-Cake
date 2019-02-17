const { hostname, protocol } = window.location;
const apiPath = '/api/';
const apiFullPath = process.env.NODE_ENV === 'development'
  ? 'http://localhost:5005/'
  : `${protocol}//${hostname}${apiPath}`;

class Http {
  static get(url) {
    return fetch(apiFullPath + url, { method: 'GET' }).then((response) => {
      if (response.status >= 200 && response.status < 204) {
        return response.json();
      }
      return Promise.reject(new Error('status: 404'));
    });
  }
}

export default Http;
