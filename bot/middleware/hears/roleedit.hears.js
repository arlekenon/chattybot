const bot = require("../../connection/token.connection");

module.exports = bot.hears("Промпты😜", async (ctx) => ctx.scene.enter("roleeditWizard"));