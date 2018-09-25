import express from 'express';
import bodyParser from 'body-parser';

export default class RestApi {
  constructor(options) {
    this.options = options;

    this.api = express();
    this.api.use(bodyParser.json());
  }

  post(route, ...middlewares) {
    return this.api.post(route, ...middlewares);
  }

  start() {
    return new Promise((resolve, reject) => {
      try {
        this.api.listen(this.options.port, () => resolve());
      } catch (e) {
        reject(e);
      }
    });
  }
}
