const { Markup, Scenes, Composer } = require("telegraf");
const {keyOptions} = require("../../options/keyboard");
const {vozm, surp} = require('../../options/infofile')

const startStep = new Composer();
startStep.hears("Возможности💫", async (ctx) => {
    try {
        ctx.wizard.state.formData = {};
        await ctx.reply(vozm, keyOptions);
        return ctx.scene.leave();
    } catch (e) {
        console.log(e);
    }
});



module.exports = new Scenes.WizardScene("possibilitiesWizard", startStep);