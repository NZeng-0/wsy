export class useFetch {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async request(url, method, data = null, params = {}, options = {}) {
    const queryString = this.objectToSearch(params);
    const fullUrl = `${this.baseUrl}${url}${queryString ? `?${queryString}` : ''}`;

    const fetchOptions = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    if (data) {
      fetchOptions.body = JSON.stringify(data);
    }

    const response = await fetch(fullUrl, fetchOptions);
    return response.json();
  }

  get(url, params = {}, options = {}) {
    return this.request(url, 'GET', null, params, options);
  }

  post(url, data, params = {}, options = {}) {
    return this.request(url, 'POST', data, params, options);
  }

  put(url, data, params = {}, options = {}) {
    return this.request(url, 'PUT', data, params, options);
  }

  patch(url, data, params = {}, options = {}) {
    return this.request(url, 'PATCH', data, params, options);
  }

  delete(url, params = {}, options = {}) {
    return this.request(url, 'DELETE', null, params, options);
  }

  objectToSearch(params) {
    return Object.keys(params)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      .join('&');
  }
}
