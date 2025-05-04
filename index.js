import { Client, Events, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", async (message) => {
   // to return public ip of the host machine
  // fetch('https://api.ipify.org?format=json')
  //   .then(response => response.json())
  //   .then(data => console.log(data.ip));
  if (message.content.toLowerCase() == "hi") {
    message.reply("Hello this is aman-first bot crated at May 4,2025 12:45PM");
  } else if (message.content.toLowerCase() == "quote") {
    try {
      const quote = await fetch("http://api.quotable.io/random");
      const data = await quote.json();
      message.reply(data.content);
    } catch (e) {
      console.log(e);
    }
  }
});
client.login(process.env.TOKEN);
