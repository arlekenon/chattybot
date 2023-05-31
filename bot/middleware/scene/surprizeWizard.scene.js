const { Markup, Scenes, Composer } = require("telegraf");
const {refOptions, keyOptions, iionkeyOptions, addvOptions, persOptions, premOptions} = require('../../options/keyboard')
const mongoose = require("mongoose");
const {vozm, surp} = require('../../options/infofile')
const {userSchema} = require("../../model/user.model");

const startStep = new Composer();
startStep.hears("Сюрприз🎁", async (ctx) => {
    try {
        ctx.wizard.state.formData = {};
        const connection = await mongoose.createConnection('mongodb://127.0.0.1:27017/test');
        const User = await connection.model('User', userSchema);
        const foundUser = await User.findOne({chatId:ctx.chat.id});

     //   const updateUser = await User.updateOne({chatId:ctx.chat.id}, {premium: true})

        await ctx.reply('🎁 Пригласи друга и получи +1 день подписки БЕСПЛАТНО!\n' +
           // 'Пополняя баланс используя кешелёк ты автоматически будешь участвовать в реферальной программе и сможешь получить награды.\n' +
            // 'Пополняя баланс используя кешелёк ты автоматически будешь участвовать в реферальной программе и сможешь получить награды.\n' +
            '(Скопируйте Вашу реферальную ссылку и отправьте другу)\n' +
            '\n' +
            'Приглашено: ' + `${foundUser.privelpop}`  + '\n' +
            '\n' +
            'Реферальная ссылка:\n' +
            '〰️〰️〰️\n' +
            'https://t.me/giproint_bot?start=confn' + `${ctx.chat.id}` , keyOptions)

        return ctx.wizard.leave();
    } catch (e) {
        console.log(e);
    }
});


module.exports = new Scenes.WizardScene("surprizeWizard", startStep);