const { Markup, Scenes, Composer } = require("telegraf");
const {nastOptions, keyOptions, iionkeyOptions, addvOptions, persOptions, vibeOptions, roleOptions} = require('../../options/keyboard')
const mongoose = require("mongoose");
const {userSchema} = require("../../model/user.model");

const startStep = new Composer();
startStep.hears("Клавиатура⌨️", async (ctx) => {
    try {
        ctx.wizard.state.formData = {};
        await ctx.reply("⌨️", keyOptions);
        return ctx.scene.leave();
    } catch (e) {
        console.log(e);
    }
});



module.exports = new Scenes.WizardScene("vibeeditWizard", startStep);