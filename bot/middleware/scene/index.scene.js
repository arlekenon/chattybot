const { Scenes, session } = require("telegraf");
const bot = require("../../connection/token.connection");

const oneWizard = require("./oneWizard.scene");
const twoWizard = require("./twoWizard.scene");
const addpremiumWizard = require("./addpremiumWizard.scene");
const startgptWizard = require("./startgptWizard.scene");
const roleeditWizard = require("./roleeditWizard.scene");
const vibeeditWizard = require("./vibeeditWizard.scene");
const surprizeWizard = require("./surprizeWizard.scene");
const proeditWizard = require("./proeditWizard.scene");
const possibilitiesWizard = require("./possibilitiesWizard.scene")
const aboutWizard = require("./aboutWizard.scene")

const stage = new Scenes.Stage([oneWizard, twoWizard, addpremiumWizard, startgptWizard, roleeditWizard, vibeeditWizard, surprizeWizard, proeditWizard, possibilitiesWizard, aboutWizard]);

bot.use(session());
bot.use(stage.middleware());

module.exports = stage;