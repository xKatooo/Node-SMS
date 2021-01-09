const config = require('../config');
const client = require('twilio')(config.accountSid, config.authToken);
async function sendMessage(body, phone){
    try {
        const message = await client.messages.create({
            to: phone,
            from: config.virtual_numero,
            body: body
        })
        return message;
    } catch (error) {
        console.log(error);
    }
}

module.exports={
    sendMessage
};