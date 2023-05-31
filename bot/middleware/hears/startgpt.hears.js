const bot = require("../../connection/token.connection");

module.exports = bot.hears("Начать чат💭", async (ctx) => ctx.scene.enter("startgptWizard"));