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

    let tokens = msg.content.split(' ');

    console.log(msg.content);

    let keywords = 'Your mom';

    if (tokens[0] === '!pls'){

        if(tokens.length > 1){

            keywords = tokens.slice(1, tokens.length).join(" ");

        }

        let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}`
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        msg.reply(json.results[index].url)
    
    }

}
