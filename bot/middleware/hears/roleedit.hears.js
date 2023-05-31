const bot = require("../../connection/token.connection");

module.exports = bot.hears("Выбрать персонажа😜", async (ctx) => ctx.scene.enter("roleeditWizard"));