import { createLogger } from './logger';

const {Bot, Events, Message} = require('viber-bot');

const logger = createLogger();

const bot = new Bot({
    logger,
    authToken: '4b391f14a267de44-8fb79f64a4101565-874547c82474c4c8',
    name: 'moviesua',
    avatar: '../../../assets/images.png' // It is recommended to be 720x720, and no more than 100kb.
});

// Perfect! Now here's the key part:
bot.on(Events.MESSAGE_RECEIVED, (message: any, response: any) => {
    // Echo's back the message to the client. Your bot logic should sit here.
    response.send(message);
});

const {TextMessage} = Message;
// A simple regular expression to answer messages in the form of 'hi' and 'hello'.
bot.onTextMessage(/^hi|hello$/i, (message: any, response: any) =>
    response.send(new TextMessage(`Hi there ${response.userProfile.name}. I am ${bot.name}`))
);

export {
    bot,
}
