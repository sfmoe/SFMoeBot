const fs = require('fs');
const Discord = require('discord.js');
const {prefix, token, socials} = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file=> file.endsWith('.js'));

commandFiles.forEach(file=>{
    let command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
})


client.once('ready', ()=>{
    console.log("we're ready to roll...");
});

client.login(token);

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

    try{
        client.commands.get(command).execute(message, args, socials);
    } catch (error) {
        console.log(error);
        message.reply('something went wrong');
    }

});