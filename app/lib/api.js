class Api {
  static headers() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'dataType': 'json',
    }
  }

  static get(route) {
    return this.xhr(route, null, 'GET');
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT')
  }

  static post(route, params) {
    return this.xhr(route, params, 'POST')
  }

  static delete(route, params) {
    return this.xhr(route, params, 'DELETE')
  }

  static xhr(route, params, verb) {
    // TODO: FIX this async call.
    return Promise.resolve([{
      id: 1,
      title: 'Book Title',
      author: 'author author',
      cover: 'https://a.wattpad.com/cover/67943442-288-k687715.jpg',
      views: 123456,
      stars: 1234
    },
    {
      id: 2,
      title: 'Book Title',
      author: 'author author',
      cover: 'https://a.wattpad.com/cover/67943442-288-k687715.jpg',
      description: 'crazy description',
      views: 123456,
      stars: 1234
    },
    {
      id: 3,
      title: 'Book Title',
      author: 'author author',
      cover: 'https://a.wattpad.com/cover/67943442-288-k687715.jpg',
      description: 'crazy description',
      views: 123456,
      stars: 1234
    },
    {
      id: 4,
      title: 'Book Title',
      author: 'author author',
      cover: 'https://a.wattpad.com/cover/67943442-288-k687715.jpg',
      description: 'crazy description',
      views: 123456,
      stars: 1234
    }
  ]).then( resp => {
      return resp
    });

    const host = ''
    const url = `${host}${route}`
    let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null );
    options.headers = Api.headers()
    return fetch(url, options).then( resp => {
      let json = resp.json();
      if (resp.ok) {
        return json
      }
      return json.then(err => {throw err});
    }).then( json => json.results );
  }
}
export default Api
