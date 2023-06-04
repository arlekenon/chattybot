const { Markup } = require("telegraf");
const bot = require("../../connection/token.connection");
const db = require("../../connection/db.connection");
const {userSchema} = require("../../model/user.model");
const {keyOptions, iionkeyOptions, addvOptions} = require('../../options/keyboard')
const mongoose = require("mongoose");

function unixTimestamp () {
   return Math.floor(Date.now() / 1000)
}

module.exports = bot.start(async (ctx) => {
   try {
      // await db.sync();

      const startPayload = ctx.startPayload;
      const chatID = ctx.chat.id;
      const firstName = ctx.chat.first_name;
      const lastName = ctx.chat.last_name;
      const username = ctx.chat.username;

      await ctx.replyWithHTML(`Hi, <b>${firstName}</b>!`, keyOptions);
      await ctx.telegram.sendSticker(ctx.chat.id,`https://tlgrm.ru/_/stickers/348/e30/348e3088-126b-4939-b317-e9036499c515/1.webp`, keyOptions)
      return ctx.reply(`Добро пожаловать в телеграм ChatGPT бот!`, keyOptions);
   } catch (e) {
      console.log(e);
   }
});