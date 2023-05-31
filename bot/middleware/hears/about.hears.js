const bot = require("../../connection/token.connection");

module.exports = bot.hears("О боте ❤", async (ctx) => ctx.scene.enter("aboutWizard"));