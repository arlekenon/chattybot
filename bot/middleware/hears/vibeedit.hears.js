const bot = require("../../connection/token.connection");

module.exports = bot.hears("Выбрать настроение🧐", async (ctx) => ctx.scene.enter("vibeeditWizard"));