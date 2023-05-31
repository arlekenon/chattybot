const { Markup } = require("telegraf");
const bot = require("../../connection/token.connection");

module.exports = bot.help(async (ctx) => {
   try {
      return ctx.reply(`Тебя зовут ${ctx.from.first_name} ${ctx.from.last_name} `);
   } catch (e) {
      console.log(e);
   }
});