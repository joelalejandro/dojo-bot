const serverless = require('serverless-http');
const logger = require('./logger');
const RestApi = require('./rest-api');
const Bot = require('./bot');

const restApi = new RestApi({ port: 3000 });
const bot = new Bot();

restApi.post('/', bot.replyMessage.bind(bot));

if (!process.env.AWS_EXECUTION_ENV) {
  restApi.start().then(() => {
    logger.info('API is now ready in localhost:3000');
  });
}

module.exports = { DojoBot: restApi, DojoBotLambda: serverless(restApi.express) };
