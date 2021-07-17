const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');

require('dotenv').config();
client.login(process.env.BOTTOKEN);
client.on('ready', readyDiscord);
client.on('message', gotMessage);

console.log('Hello There');
function readyDiscord(){

    console.log('Hello!');

}

async function gotMessage(msg){

    const tokens = msg.content.split(' ');
    console.log(msg.content);
    let keywords = 'keywords';
    if (tokens[0] === '!pls'){
        if(tokens.length > 1){

            keywords = tokens.slice(1, tokens.length).join(" ");

        }

        const url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}`
        const response = await fetch(url);
        const json = await response.json();

        const index = Math.floor(Math.random() * json.results.length);
        msg.reply(json.results[index].url)
    
    }

}
