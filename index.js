const qrcode = require('qrcode-terminal');
heroku buildpacks:set <https://github.com/sendmailtoahmad/ahmadaer354.git>#main-branch
const fs = require('fs');
const { Client, LegacySessionAuth, MessageMedia } = require('whatsapp-web.js');

const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});



client.on('message', message => {
	console.log(message.body);
});

client.on('message', message => {
	if(message.body === '!ping') {
		message.reply('pong');
        
	}
});


client.initialize();
