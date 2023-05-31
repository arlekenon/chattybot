const bot = require("../../connection/token.connection");

module.exports = bot.hears("Возможности💫", async (ctx) => ctx.scene.enter("possibilitiesWizard"));