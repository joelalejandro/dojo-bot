const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;

const logger = createLogger({
  format: combine(
    timestamp(),
    printf(log => `${log.timestamp} ${log.level}: ${log.message}`)
  ),
  transports: [new transports.Console()]
});

module.exports = logger;
