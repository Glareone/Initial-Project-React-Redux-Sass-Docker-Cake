import Http from '../http/Http';

class SomethingApiLayer {
  constructor(params) {
    const { http } = params;
    this.http = http;
  }

  getSomething(name) {
    const url = `something/${name}`;
    return this.http.get(url);
  }
}

export default new SomethingApiLayer({
  http: Http,
});
