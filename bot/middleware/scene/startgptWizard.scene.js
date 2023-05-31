const { Markup, Scenes, Composer } = require("telegraf");
const openai = require('../../plugin/openai/getAnswer')
const {keyOptions, iionkeyOptions, addvOptions} = require('../../options/keyboard')
const mongoose = require("mongoose");
const {userSchema} = require("../../model/user.model");

const startStep = new Composer();

startStep.hears("Начать чат💭", async (ctx) => {
    try {
        ctx.wizard.state.formData = {};
        await ctx.reply("🔥 Чтобы начать общение, просто напиши что-нибудь в строку ниже 👇🏻 Не стесняйся, я не кусаюсь... в основном.", iionkeyOptions);
        return ctx.wizard.next();
    } catch (e) {
        console.log(e);
    }
});

const finishStep = new Composer();

finishStep.on('text', async (ctx) => {
    try {
        if (ctx.message.text == 'Выключить ChatGPT') {
            await ctx.reply('Чат выключен', keyOptions)
            return ctx.scene.leave();
        }
        const connection = await mongoose.createConnection('mongodb://127.0.0.1:27017/test');
        const User = await connection.model('User', userSchema);

        const foundUser = await User.findOne({chatId:ctx.chat.id});
        const persona = foundUser.roleoleprompt
        const viber = foundUser.vibeprompt
        const updateUser = await User.updateOne({chatId:ctx.chat.id}, {requestchat: foundUser.requestchat + 1})



        const context = persona + viber + ctx.message.text
        console.log(foundUser);
        console.log(context)
        const content = await openai.getAnswer(ctx.chat.id, context)
        await ctx.reply(content);

    } catch (e) {
        console.log(e);
    }
});

module.exports = new Scenes.WizardScene("startgptWizard", startStep, finishStep);