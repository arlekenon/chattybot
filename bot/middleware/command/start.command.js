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
      const connection = await mongoose.createConnection('mongodb://127.0.0.1:27017/test');
      const User = await connection.model('User', userSchema);

      const startPayload = ctx.startPayload;
      const chatID = ctx.chat.id;
      const firstName = ctx.chat.first_name;
      const lastName = ctx.chat.last_name;
      const username = ctx.chat.username;

      if ((ctx.message.text.indexOf('/start', 0) == 0) && (ctx.message.text.includes('confn') == true)){
         const confn = ctx.message.text.slice(12);
         console.log(confn)
         const foundUser = await User.findOne({chatId:ctx.chat.id});
         if (!foundUser) {
            const baseUser = await User.findOne({chatId:228306026});
            await User.create({
               id: baseUser.lustid + 1,
               chatId: ctx.chat.id,
               firstName: ctx.chat.first_name,
               lastName: ctx.chat.last_name,
               username: ctx.chat.username,
               admin: false,
               startPayload: startPayload,
               privel: confn,
               unizdatecreate: Math.floor(Date.now() / 1000),
            });
            const updatebaseUser = await User.updateOne({chatId:228306026}, {lustid: baseUser.lustid + 1})
         }
      } else {
         const foundUser = await User.findOne({chatId:ctx.chat.id});
         console.log(foundUser)
         if (!foundUser) {
            const baseUser = await User.findOne({chatId:228306026});
            await User.create({
               //
               id: baseUser.lustid + 1,
               chatId: ctx.chat.id,
               firstName: ctx.chat.first_name,
               lastName: ctx.chat.last_name,
               username: ctx.chat.username,
               admin: false,
               startPayload: startPayload,
               privel: 0,
               unizdatecreate: Math.floor(Date.now() / 1000),
            });
              const updatebaseUser = await User.updateOne({chatId:228306026}, {lustid: baseUser.lustid + 1})
         }
      }




      //await ctx.reply(ctx.message.text, keyOptions);
      await ctx.replyWithHTML(`Hi, <b>${firstName}</b>!`, keyOptions);
      await ctx.telegram.sendSticker(ctx.chat.id,`https://tlgrm.ru/_/stickers/348/e30/348e3088-126b-4939-b317-e9036499c515/1.webp`, keyOptions)
      return ctx.reply(`Добро пожаловать в телеграм ChatGPT бот!`, keyOptions);
   } catch (e) {
      console.log(e);
   }
});