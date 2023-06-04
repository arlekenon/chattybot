const { Markup, Scenes, Composer } = require("telegraf");
const {remopOptions, keyOptions, iionkeyOptions, addvOptions, persOptions, premOptions} = require('../../options/keyboard')
const mongoose = require("mongoose");
const {userSchema} = require("../../model/user.model");

const startStep = new Composer();
startStep.hears("Премиум💎", async (ctx) => {
    try {
        await ctx.reply(`Мы сделали бот в котором вы можете использовать chatGPT` +
            "\n" +
            "\n" +
            "Вы можете Оказать поддержку Премиум💎 по указаным адресам" , keyOptions);
        return ctx.scene.leave();
    } catch (e) {
        console.log(e);
    }
});


module.exports = new Scenes.WizardScene("addpremiumWizard", startStep);