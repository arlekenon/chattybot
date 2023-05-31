const { Markup, Scenes, Composer } = require("telegraf");
const {keyOptions} = require("../../options/keyboard");


const startStep = new Composer();
startStep.hears("О боте ❤", async (ctx) => {
    try {
        ctx.wizard.state.formData = {};
        await ctx.reply('ChatGPT бот - общайся, твари, играй!', keyOptions);
        return ctx.scene.leave();
    } catch (e) {
        console.log(e);
    }
});



module.exports = new Scenes.WizardScene("aboutWizard", startStep);