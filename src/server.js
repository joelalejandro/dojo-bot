import logger from './logger';
import RestApi from './rest-api';
import Bot from './bot';

const api = new RestApi({ port: 3000 });
const bot = new Bot();

api.post('/', bot.replyMessage);

api.start().then(() => {
  logger.info('API is now ready in localhost:3000');
});
