require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
    console.log(`Bot Aktif sebagai ${client.user.tag}`);
});

client.on('messageCreate', message => {
    if (message.content === '!register') {
        message.reply('Kamu sudah terdaftar di server!');
    }
});

client.login(process.env.TOKEN);