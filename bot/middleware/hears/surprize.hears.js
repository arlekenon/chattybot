const bot = require("../../connection/token.connection");

module.exports = bot.hears("Сюрприз🎁", async (ctx) => ctx.scene.enter("surprizeWizard"));