const { Markup, Scenes, Composer } = require("telegraf");
const {nastOptions, keyOptions, iionkeyOptions, addvOptions, persOptions, vibeOptions, roleOptions} = require('../../options/keyboard')
const mongoose = require("mongoose");
const {userSchema} = require("../../model/user.model");

const startStep = new Composer();
startStep.hears("Выбрать настроение🧐", async (ctx) => {
    try {
        ctx.wizard.state.formData = {};
        await ctx.reply("Выбери настроение", vibeOptions);
        return ctx.wizard.next();
    } catch (e) {
        console.log(e);
    }
});

const finishStep = new Composer();



finishStep.on("callback_query", async (ctx) => {
    try {
        const connection = await mongoose.createConnection('mongodb://127.0.0.1:27017/test');
        const User = await connection.model('User', userSchema);
        const foundUser = await User.findOne({chatId:ctx.chat.id});
        if ( (foundUser.premium == false) && (  ctx.callbackQuery.data =='Грустный' || ctx.callbackQuery.data =='Злой' || ctx.callbackQuery.data =='Меланхоличный стёб' || ctx.callbackQuery.data =='Меланхоличный стёб' )) {
            await ctx.reply(`Подключите премиум для выбора этого настроения`, keyOptions);
        } else {
            const vibepromptet = nastOptions[ctx.callbackQuery.data]
            const updateUser = await User.updateOne({chatId:ctx.chat.id}, {vibeprompt: vibepromptet})
            await ctx.answerCbQuery();
            await ctx.reply(`Ты выбрал ${ctx.callbackQuery.data}`, keyOptions);
            return ctx.scene.leave();
        }
    } catch (e) {
        console.log(e);
    }
});

module.exports = new Scenes.WizardScene("vibeeditWizard", startStep, finishStep);