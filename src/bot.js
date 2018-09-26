const logger = require('./logger');

module.exports = class Bot {
  constructor() {

  }

  replyMessage({ body }, response) {
    logger.info(`Received request: ${JSON.stringify(body)}`);

    if (body.type === 'url_verification') {
      this.resolveChallenge({ body }, response);
      return;
    }

    response.send({ received: 'OK' });
  }

  resolveChallenge({ body }, response) {
    const { challenge } = body;

    logger.info(`Received Slack Events API challenge: ${challenge}`);
    response.send({ challenge });
  }
}
