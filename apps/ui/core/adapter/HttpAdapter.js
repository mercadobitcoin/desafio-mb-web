export class HttpAdapter {
  constructor(baseUrl = '', initialHeaders = {}) {
    this.baseUrl = baseUrl;
    this.initialHeaders = initialHeaders;
  }

  async put(p) {
    return await this.request({
      method: 'PUT',
      url: p.url,
      queryString: p.queryString,
      headers: p.headers,
      body: p.body
    });
  }

  async post(p) {
    return await this.request({
      method: 'POST',
      url: p.url,
      queryString: p.queryString,
      headers: p.headers,
      body: p.body
    });
  }

  async patch(p) {
    return await this.request({
      method: 'PATCH',
      url: p.url,
      queryString: p.queryString,
      headers: p.headers,
      body: p.body
    });
  }

  async get(p) {
    return await this.request({
      method: 'GET',
      url: p.url,
      queryString: p.queryString,
      headers: p.headers
    });
  }

  async delete(p) {
    return await this.request({
      method: 'DELETE',
      url: p.url,
      queryString: p.queryString,
      headers: p.headers,
      body: p.body
    });
  }

  async request(params) {
    const fullUrl = this.baseUrl
      ? `${this.baseUrl}${params.url}`
      : params.url;

    const urlWithQuery = fullUrl + (params.queryString ? `?${params.queryString}` : '');

    const headers = {
      ...this.initialHeaders,
      ...(params.headers || {})
    };

    const options = {
      method: params.method,
      headers
    };

    if (params.body && params.method !== 'GET') {
      options.body = JSON.stringify(params.body);
      options.headers['Content-Type'] = 'application/json';
    }

    const response = await fetch(urlWithQuery, options);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Erro na requisição: ${response.status} ${response.statusText}\n${errorText}`);
    }

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return await response.json();
    } else {
      return await response.text();
    }
  }
}
