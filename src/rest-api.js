const express = require('express');
const bodyParser = require('body-parser');

module.exports = class RestApi {
  constructor(options) {
    this.options = options;

    this.express = express();
    this.express.use(bodyParser.json());
  }

  post(route, ...middlewares) {
    return this.express.post(route, ...middlewares);
  }

  start() {
    return new Promise((resolve, reject) => {
      try {
        this.express.listen(this.options.port, () => resolve());
      } catch (e) {
        reject(e);
      }
    });
  }
}
