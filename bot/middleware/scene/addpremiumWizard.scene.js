const { Markup, Scenes, Composer } = require("telegraf");
const {remopOptions, keyOptions, iionkeyOptions, addvOptions, persOptions, premOptions} = require('../../options/keyboard')
const mongoose = require("mongoose");
const {userSchema} = require("../../model/user.model");

const startStep = new Composer();
startStep.hears("Подключить премиум💎", async (ctx) => {
    try {
        ctx.wizard.state.formData = {};
        const connection = await mongoose.createConnection('mongodb://127.0.0.1:27017/test');
        const User = await connection.model('User', userSchema);
        const foundUser = await User.findOne({chatId:ctx.chat.id});


        var days = 0
        var hours = 0
        var seconds = 0

        const timerdata =  foundUser.offdata - (Date.now() / 1000)
        console.log()
        var timerdatanext = new Date(timerdata * 1000);
        if( timerdata <=0 ) {
            var days = 0
            var hours = 0
            var seconds = 0
        } else {
            var days = timerdatanext.getHours();
            var hours = timerdatanext.getMinutes();
            var seconds = timerdatanext.getSeconds();
        }
        console.log(timerdata)
        console.log(timerdatanext)
        console.log(timerdatanext.getHours())


            ctx.wizard.state.formData = {};
        await ctx.reply(`Подписка закончится через (${days} дней, ${hours} часов, ${seconds} секунд)` +
            "\n" +
            "😎 Дополнительные возможности премиум статуса:\n" +
            "\n" +
            "✔️ Бузлимитное количество запросов\n" +
            "✔️ Доступ ко всем персанажам и настроениям\n" +
            "✔️ Интерактивная клавиатура\n", premOptions);

        return ctx.wizard.next();
    } catch (e) {
        console.log(e);
    }
});

const opStep = new Composer();
opStep.on("callback_query", async (ctx) => {
    try {
        ctx.wizard.state.formData = {};
        const connection = await mongoose.createConnection('mongodb://127.0.0.1:27017/test');
        const User = await connection.model('User', userSchema);


        const foundUser = await User.findOne({chatId:ctx.chat.id});
        const updateUser = await User.updateOne({chatId:ctx.chat.id}, {actionbalance: Number(ctx.callbackQuery.data)})

        await ctx.answerCbQuery();
        await ctx.reply(`Поздоавляю! Ты выбрал пакет ${ctx.callbackQuery.data}₽ . Прочти ниже и выбери способ оплаты.

Способы оплаты:
1. Обычный.
С тобой свяжется админ, уточнит заявку, проведёт оплату и тебе начислится премиум.

2. За крипту.
Скоро ты сможишь пополнить премиум прями криптой.`, remopOptions);
        //     Пополнить баланс своего аккаунта.
        //       Совершить перевод на указаный адрес и тебе начислится пермиум.
        return ctx.wizard.next();
    } catch (e) {
        console.log(e);
    }
});

const finishStep = new Composer();

finishStep.action("otprzav", async (ctx) => {
    try {
        const connection = await mongoose.createConnection('mongodb://127.0.0.1:27017/test');
        const User = await connection.model('User', userSchema);


        const foundUser = await User.findOne({chatId:ctx.chat.id});
        const updateUser = await User.updateOne({chatId:ctx.chat.id}, {balance: foundUser.actionbalance})

        const foundPartUser = await User.findOne({chatId:foundUser.privel});
        const updatePartUser = await User.updateOne({chatId:ctx.chat.id}, {privelpop: foundPartUser.privelpop + 1 , privelnumb: foundPartUser.privelnumb + foundUser.actionbalance})

        await ctx.answerCbQuery();
        await ctx.reply(`Поздоавляю! Ты выбрал пакет ${foundUser.actionbalance}₽ твоя заявка принята, с тобой свяжитя админ.`, keyOptions);

        await ctx.telegram.sendMessage(228306026,`Заявка ${foundUser.actionbalance}₽ от ${foundUser.username}`);
        await ctx.telegram.sendMessage(408001372,`Заявка ${foundUser.actionbalance}₽ от ${foundUser.username}`);
       // await ctx.reply(chatid: 228306026 ,`Заявка ${foundUser.actionbalance}₽ от ${foundUser.username}`);
        return ctx.scene.leave();
    } catch (e) {
        console.log(e);
    }
});

finishStep.action("cripto", async (ctx) => {
    try {
        const connection = await mongoose.createConnection('mongodb://127.0.0.1:27017/test');
        const User = await connection.model('User', userSchema);


        const foundUser = await User.findOne({chatId:ctx.chat.id});
        const updateUser = await User.updateOne({chatId:ctx.chat.id}, {balance: foundUser.actionbalance})

        const foundPartUser = await User.findOne({chatId:foundUser.privel});
        const updatePartUser = await User.updateOne({chatId:ctx.chat.id}, {privelpop: foundPartUser.privelpop + 1 , privelnumb: foundPartUser.privelnumb + foundUser.actionbalance})

        await ctx.answerCbQuery();
        await ctx.reply(`Скоро!`, keyOptions);
        return ctx.scene.leave();
    } catch (e) {
        console.log(e);
    }
});



module.exports = new Scenes.WizardScene("addpremiumWizard", startStep, opStep, finishStep);