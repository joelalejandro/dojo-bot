const logger = require('./logger');

module.exports = class Bot {
  constructor() {

  }

  replyMessage(request, response){
    if(request.body && request.body.event && 
      request.body.event.type === 'message' && 
      request.body.event.channel_type === 'app_home'){
      response.send("RESPONSE")
    } else {
      return response.send("")
    }
  }
}
