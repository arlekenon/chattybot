const { Markup } = require("telegraf");
const bot = require("../../connection/token.connection");

module.exports = bot.settings(async (ctx) => {
   try {
      return ctx.reply("Here you can configure the bot!");
   } catch (e) {
      console.log(e);
   }
});