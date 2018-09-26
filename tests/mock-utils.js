class MockResponse {
  send(data) {
    this.data = data;
  }
}

class MockRequest {
  constructor(data) {
    this.body = data;
  }
}

module.exports = {
  MockRequest,
  MockResponse
};
