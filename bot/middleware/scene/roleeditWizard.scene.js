const { Markup, Scenes, Composer } = require("telegraf");
const {roleOptions,keyOptions, iionkeyOptions, addvOptions, persOptions} = require('../../options/keyboard')
const mongoose = require("mongoose");
const {userSchema} = require("../../model/user.model");

const startStep = new Composer();
startStep.hears("Выбрать персонажа😜", async (ctx) => {
    try {
        ctx.wizard.state.formData = {};
        await ctx.reply("Выбери персонажа", persOptions);
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

        if ( (foundUser.premium == false) && (  ctx.callbackQuery.data =='Текстовый редактор' || ctx.callbackQuery.data =='Программист' || ctx.callbackQuery.data =='Психолог' || ctx.callbackQuery.data =='Консультант' || ctx.callbackQuery.data =='Виртуальный гид' || ctx.callbackQuery.data =='Весельчак')) {
            await ctx.reply(`Подключите премиум для выбора этого персонажа`, keyOptions);
        } else {
            const roleprompt = roleOptions[ctx.callbackQuery.data]
            const updateUser = await User.updateOne({chatId:ctx.chat.id}, {roleoleprompt: roleprompt})
            await ctx.answerCbQuery();
            await ctx.reply(`Ты выбрал ${ctx.callbackQuery.data}`, keyOptions);
            return ctx.scene.leave();
        }
    } catch (e) {
        console.log(e);
    }
});

module.exports = new Scenes.WizardScene("roleeditWizard", startStep, finishStep);