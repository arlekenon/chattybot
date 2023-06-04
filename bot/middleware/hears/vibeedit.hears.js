const bot = require("../../connection/token.connection");

module.exports = bot.hears("Клавиатура⌨️", async (ctx) => ctx.scene.enter("vibeeditWizard"));