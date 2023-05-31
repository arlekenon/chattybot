// SCENES
require("./bot/middleware/scene/index.scene");

// ON

// COMMANDS
require("./bot/middleware/command/commands.command");
require("./bot/middleware/command/start.command");
require("./bot/middleware/command/help.command");
require("./bot/middleware/command/settings.command");

// HEARS

require("./bot/middleware/hears/one.hears");
require("./bot/middleware/hears/two.hears");
require("./bot/middleware/hears/addpremium.hears");
require("./bot/middleware/hears/startgpt.hears");
require("./bot/middleware/hears/roleedit.hears");
require("./bot/middleware/hears/vibeedit.hears");
require("./bot/middleware/hears/surprize.hears");
require("./bot/middleware/hears/proedit.hears");
require("./bot/middleware/hears/possibilities.hears");
require("./bot/middleware/hears/about.hears");

// ACTION

// CONNECTION
require("./bot/connection/local.connection");
// require("./bot/connection/lambda.connection");
//require("./bot/connection/db.connection");