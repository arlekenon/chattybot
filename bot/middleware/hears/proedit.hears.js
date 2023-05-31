const bot = require("../../connection/token.connection");

module.exports = bot.hears("Продвинутые настройки🗝", async (ctx) => ctx.scene.enter("proeditWizard"));