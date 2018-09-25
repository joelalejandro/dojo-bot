import logger from './logger';

export default class Bot {
  constructor() {

  }

  replyMessage({ body }, response) {
    logger.info(`Received request: ${JSON.stringify(body)}`);
    response.send({ received: 'OK' });
  }

  resolveChallenge({ body }, response) {
    const { challenge } = body;

    logger.info(`Received Slack Events API challenge: ${challenge}`);
    response.send({ challenge });
  }
}
