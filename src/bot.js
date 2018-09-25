import logger from './logger';

export default class Bot {
  constructor() {

  }

  replyMessage({ body }, response) {
    logger.log('info', `Received request: ${JSON.stringify(body)}`);
    response.send({ received: 'OK' });
    response.status(200);
  }
}
