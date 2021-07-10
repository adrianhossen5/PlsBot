console.log('Ur Mum');
require('dotenv').config();

const fetch = require('node-fetch');
const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.BOTTOKEN);

client.on('ready', readyDiscord);

function readyDiscord(){

    console.log('no u');

}
client.on('message', gotMessage);
async function gotMessage(msg){

    console.log(msg.content);

    if (msg.content === '!pls flower'){

        let url = `https://g.tenor.com/v1/search?q=flower&key=${process.env.TENORKEY}&limit=8`
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        msg.reply(json.results[index].url)
    
    }

}