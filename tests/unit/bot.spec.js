const Bot = require('bot');
const mocks = require('../mock-utils');


describe('Bot', () => {
  it('should instantiate', () => {
    new Bot();
  });
});

describe('Bot', () => {
  it('quiero enviar una respuesta al usuario', () => {
    const newBot = new Bot();
    const response = new mocks.MockResponse();
    newBot.replyMessage(new mocks.MockRequest(),response);
    expect(response.data).not.toBeNull();
   });

   it('quiero enviar una respuesta solo si me escribieron', () => {
    const newBot = new Bot();
    const response = new mocks.MockResponse();
    const request = new mocks.MockRequest({
      "token": "GFmmRcqER7Fsp0JXUbKZ9UNp",
      "team_id": "T0LR8GBDZ",
      "api_app_id": "AD00X6LMP",
      "event": {
          "type": "message",
          "user": "U1Z8UM8HF",
          "text": "Hola Dojobot. Estamos por charlar con vos.",
          "client_msg_id": "7000c91a-52c2-4a0b-b5dd-f5d72cb28ccc",
          "ts": "1537982270.000100",
          "channel": "DD1KT9R6K",
          "event_ts": "1537982270.000100",
          "channel_type": "app_home"
      },
      "type": "event_callback",
      "authed_teams": [
          "T0LR8GBDZ"
      ],
      "event_id": "EvD2MBC0F9",
      "event_time": 1537982270
  });
    newBot.replyMessage(request,response);
    expect(response.data).not.toBeNull();
   });
});

