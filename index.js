const Discord = require('discord.js');
const client = new Discord.Client();
const Filter = require('bad-words');
const profanityFilter = new Filter();
require('dotenv').config()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
    console.log(msg);
  }

  if (checkProfanity(msg.content)) {
      msg.reply("I don't like that language!");
      console.log(msg);
  }

});




const checkProfanity = (message) => {
    //returns true for profanity
    return profanityFilter.isProfane(message);
}


try {
  client.login(process.env.DISCORD_TOKEN);
}
catch (e) {
  (`There was an error: ${e}`);
}

