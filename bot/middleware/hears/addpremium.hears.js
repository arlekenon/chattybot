const bot = require("../../connection/token.connection");

module.exports = bot.hears("Премиум💎", async (ctx) => ctx.scene.enter("addpremiumWizard"));