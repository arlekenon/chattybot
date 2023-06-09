const { Markup, Scenes, Composer } = require("telegraf");

const startStep = new Composer();
startStep.hears("one", async (ctx) => {
   try {
      ctx.wizard.state.formData = {};
      await ctx.reply("oneMessage", {
         reply_markup: {
            "inline_keyboard": [
               [Markup.button.callback("ОК", "ok"),Markup.button.callback("to", "to")],[Markup.button.callback("no", "no")]
            ]
         }
      });
      return ctx.wizard.next();
   } catch (e) {
      console.log(e);
   }
});

const finishStep = new Composer();
finishStep.action("changed_my_mind", async (ctx) => {
   try {
      await ctx.answerCbQuery();
      await ctx.replyWithHTML("Have you changed your mind!");
      return ctx.scene.leave();
   } catch (e) {
      console.log(e);
   }
});
finishStep.action("ok", async (ctx) => {
   try {
      await ctx.answerCbQuery();
      await ctx.reply("ok");
      return ctx.scene.leave();
   } catch (e) {
      console.log(e);
   }
});

module.exports = new Scenes.WizardScene("oneWizard", startStep, finishStep);