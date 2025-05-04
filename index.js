import { Client, Events, GatewayIntentBits } from "discord.js";
import express from 'express'
import cors from 'cors'
import dotenv from "dotenv";


dotenv.config();
const app = express()
app.use(express.json())
app.use(cors())
const PORT = 3000 | process.env.PORT
app.listen(PORT,()=>{
    const msg = `Listening on port ${PORT}`
    console.log(msg)
})
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", async (message) => {

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
