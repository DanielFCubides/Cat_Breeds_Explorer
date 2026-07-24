class CatsAPI {
  constructor({
    apiKey = process.env.CATS_API_KEY,
    baseUrl = 'https://api.thecatapi.com/v1',
    headers = {},
    fetchImpl = globalThis.fetch,
  } = {}) {
    if (typeof fetchImpl !== 'function') {
      throw new Error('A fetch implementation is required to use CatsAPI.');
    }

    this.baseUrl = baseUrl.replace(/\/$/, '');
    this.fetch = fetchImpl;
    this.headers = {
      Accept: 'application/json',
      ...headers,
      ...(apiKey ? { 'x-api-key': apiKey } : {}),
    };

  }

  async get_cats({ limit, page } = {}) {
    const query = new URLSearchParams();

    if (limit !== undefined) {
      query.set('limit', limit);
    }

    if (page !== undefined) {
      query.set('page', page);
    }

    const queryString = query.toString();
    const response = await this.fetch(`${this.baseUrl}/breeds${queryString ? `?${queryString}` : ''}`, {
      headers: this.headers,
    });

    if (!response.ok) {
      throw new Error(`Cats API request failed with status ${response.status}.`);
    }

    return response.json();
  }
}

module.exports = CatsAPI;
