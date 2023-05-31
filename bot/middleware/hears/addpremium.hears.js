const bot = require("../../connection/token.connection");

module.exports = bot.hears("Подключить премиум💎", async (ctx) => ctx.scene.enter("addpremiumWizard"));