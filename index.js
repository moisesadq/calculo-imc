require ('dotenv').config();
const {mercadoBitcoin}= require('./API')

const infoApi = new mercadoBitcoin ({currency:'BTC'});

setInterval (async() => {
    const response = await infoApi.ticker();
    console.log(response);

},process.env.CRAWLER_INTERVAL);