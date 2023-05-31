const { Markup, Scenes, Composer } = require("telegraf");
const {keyOptions, refOptions} = require("../../options/keyboard");
const mongoose = require("mongoose");
const {userSchema} = require("../../model/user.model");

const startStep = new Composer();
startStep.hears("Продвинутые настройки🗝", async (ctx) => {
    try {
        ctx.wizard.state.formData = {};
        const connection = await mongoose.createConnection('mongodb://127.0.0.1:27017/test');
        const User = await connection.model('User', userSchema);
        const foundUser = await User.findOne({chatId:ctx.chat.id});


        if (foundUser.premium == false) {
            await ctx.reply("Продвинутые настройки доступны премиум пользователем", keyOptions);
            return ctx.scene.leave();
        } else {
            await ctx.reply('🎁 Пригласи друга и получи +1 день подписки БЕСПЛАТНО!\n' +
                // 'Пополняя баланс используя кешелёк ты автоматически будешь участвовать в реферальной программе и сможешь получить награды.\n' +
                // 'Пополняя баланс используя кешелёк ты автоматически будешь участвовать в реферальной программе и сможешь получить награды.\n' +
                '(Скопируйте Вашу реферальную ссылку и отправьте другу)\n' +
                '\n' +
                'Приглашено: ' + `${foundUser.privelpop}`  + '\n' +
                '\n' +
                'Твой реферальный баланс: ' + `${foundUser.privelnumb/10}`  + '\n' +
                '\n' +
                'Реферальная ссылка:\n' +
                '〰️〰️〰️\n' +
                'https://t.me/giproint_bot?start=confn' + `${ctx.chat.id}` , refOptions)
            return ctx.wizard.next();
        }
    } catch (e) {
        console.log(e);
    }
});

const finishStep = new Composer();
finishStep.action("Вывести", async (ctx) => {
    try {
        await ctx.answerCbQuery();
        await ctx.telegram.sendMessage(408001372, `Заявка на вывод от ${ctx.chat.username}.` )
        await ctx.telegram.sendMessage(228306026, `Заявка на вывод от ${ctx.chat.username}.` )
        await ctx.reply("Поздравляю. Заявка на вывод отправлена админу!" , keyOptions);
        return ctx.scene.leave();
    } catch (e) {
        console.log(e);
    }
});

finishStep.action("В основное меню", async (ctx) => {
    try {
        await ctx.answerCbQuery();
        await ctx.telegram.sendSticker(ctx.chat.id,`https://tlgrm.ru/_/stickers/348/e30/348e3088-126b-4939-b317-e9036499c515/1.webp`, keyOptions)
        return ctx.scene.leave();
    } catch (e) {
        console.log(e);
    }
});

module.exports = new Scenes.WizardScene("proeditWizard", startStep, finishStep);