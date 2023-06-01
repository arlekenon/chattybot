const { Markup, Scenes, Composer } = require("telegraf");
const {remopOptions, keyOptions, iionkeyOptions, addvOptions, persOptions, premOptions} = require('../../options/keyboard')
const mongoose = require("mongoose");
const {userSchema} = require("../../model/user.model");

const startStep = new Composer();
startStep.hears("Премиум💎", async (ctx) => {
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
        await ctx.reply(`Мы сделали бот в котором вы можете использовать chatGPT` +
            "\n" +
            "\n" +
            "Вы можете приобрести Премиум💎 и тем самым поддержать наши скромные разработки и помочь в содержании серверов и инфраструктуры." , premOptions);
        return ctx.wizard.next();
    } catch (e) {
        console.log(e);
    }
});

const opStep = new Composer();

opStep.action("69", async (ctx) => {
    try {
        ctx.wizard.state.formData = {};
        const connection = await mongoose.createConnection('mongodb://127.0.0.1:27017/test');
        const User = await connection.model('User', userSchema);
        const foundUser = await User.findOne({chatId:ctx.chat.id});
        const updateUser = await User.updateOne({chatId:ctx.chat.id}, {actionbalance: Number(ctx.callbackQuery.data)})

        await ctx.answerCbQuery();
        await ctx.reply(`Поздоавляю! Ты выбрал ${ctx.callbackQuery.data}₽ . 

Выбери Подтвердить Премиум💎.
С тобой свяжется админ и поможет преобрести Премиум💎.

Крипто.
В процессе подключения крипто.`, remopOptions);
        //     Пополнить баланс своего аккаунта.
        //       Совершить перевод на указаный адрес и тебе начислится пермиум.
        return ctx.wizard.next();
    } catch (e) {
        console.log(e);
    }
});
opStep.action("219", async (ctx) => {
    try {
        ctx.wizard.state.formData = {};
        const connection = await mongoose.createConnection('mongodb://127.0.0.1:27017/test');
        const User = await connection.model('User', userSchema);
        const foundUser = await User.findOne({chatId:ctx.chat.id});
        const updateUser = await User.updateOne({chatId:ctx.chat.id}, {actionbalance: Number(ctx.callbackQuery.data)})

        await ctx.answerCbQuery();
        await ctx.reply(`Поздоавляю! Ты выбрал ${ctx.callbackQuery.data}₽ . 

Выбери Подтвердить Премиум💎.
С тобой свяжется админ и поможет преобрести Премиум💎.

Крипто.
В процессе подключения крипто.`, remopOptions);
        //     Пополнить баланс своего аккаунта.
        //       Совершить перевод на указаный адрес и тебе начислится пермиум.
        return ctx.wizard.next();
    } catch (e) {
        console.log(e);
    }
});
opStep.action("499", async (ctx) => {
    try {
        ctx.wizard.state.formData = {};
        const connection = await mongoose.createConnection('mongodb://127.0.0.1:27017/test');
        const User = await connection.model('User', userSchema);
        const foundUser = await User.findOne({chatId:ctx.chat.id});
        const updateUser = await User.updateOne({chatId:ctx.chat.id}, {actionbalance: Number(ctx.callbackQuery.data)})

        await ctx.answerCbQuery();
        await ctx.reply(`Поздоавляю! Ты выбрал ${ctx.callbackQuery.data}₽ . 

Выбери Подтвердить Премиум💎.
С тобой свяжется админ и поможет преобрести Премиум💎.

Крипто.
В процессе подключения крипто.`, remopOptions);
        //     Пополнить баланс своего аккаунта.
        //       Совершить перевод на указаный адрес и тебе начислится пермиум.
        return ctx.wizard.next();
    } catch (e) {
        console.log(e);
    }
});
opStep.action("menu", async (ctx) => {
    try {
        await ctx.answerCbQuery();
      //  await ctx.reply(``, keyOptions);
        await ctx.telegram.sendSticker(ctx.chat.id,`https://tlgrm.ru/_/stickers/348/e30/348e3088-126b-4939-b317-e9036499c515/1.webp`, keyOptions)
        return ctx.scene.leave();
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
        await ctx.reply(`Поздоавляю! Ты выбрал ${foundUser.actionbalance}₽ с тобой свяжитя админ.`, keyOptions);

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

finishStep.action("menu", async (ctx) => {
    try {
        await ctx.answerCbQuery();
        await ctx.telegram.sendSticker(ctx.chat.id,`https://tlgrm.ru/_/stickers/348/e30/348e3088-126b-4939-b317-e9036499c515/1.webp`, keyOptions)
        return ctx.scene.leave();
    } catch (e) {
        console.log(e);
    }
});



module.exports = new Scenes.WizardScene("addpremiumWizard", startStep, opStep, finishStep);