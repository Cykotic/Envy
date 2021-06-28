const Telegraf = require("telegraf");
const { token } = require("./config.json")

const client = new Telegraf(`${token}`, { polling: true })

console.log("Online!")
client.launch();

module.exports = client;
require("./commands/methods")