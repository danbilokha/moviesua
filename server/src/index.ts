import * as express from 'express';
import * as dotenv from 'dotenv';
import * as bodyParser from 'body-parser';
import * as baseController from './routes/base/base';
import { bot } from "./viber-bot";
import { getPublicUrl } from './viber-bot/get_public_url';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.set('port', port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

console.log('------------Middleware', bot.middleware);
app.use('/viber/webhook', bot.middleware());

app.get('/', baseController.base);

getPublicUrl().then(publicUrl => {
    console.log('Set the new webhook to"', publicUrl);

    app.listen(app.get('port'), () => {
        console.log('this below introduce error')
        bot.setWebhook(publicUrl);

        console.log(('App is running at http://localhost:%d in %s mode. This update inspect?'),
            app.get('port'), app.get('env'));

        console.log('Press CTRL-C to stop\n');
    });
}).catch(error => {
    console.log('Can not connect to ngrok server. Is it running?');
    console.error(error);
});
