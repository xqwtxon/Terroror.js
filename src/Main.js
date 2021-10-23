const Discord = require("discord.js"); // enable discord.js
const EventManager = require("./EventManager.js"); // adding eventmanager
const { token } = require("../config.json"); // adding bot config
/*
	If you use glitch or replit or other host are not 100% uptime, use this method.
	This Make Your Bot Uptime But Not 100% Uptime, Use UptimeRobot.com For 24/7 Uptime
*/
const express = require('express'); // enable express on nodejs
const app = express(); // make web/app express

app.use(express.static('public')); // set website to public

app.get('/', (request, response) => {
  response.sendFile(__dirname + '../index.html'); // make response file to enable uptimerobot.com to status code "200"
});

const listener = app.listen(process.env.PORT, () => {
  console.log('Listening on Port: ' + '[' + listener.address().port + ']'); // logging console to tell ip and port when started to host
});
/* 
	Enable Discord Intents
	https://discord.com/developers/application/ID/bot
*/
class Main {
	main() {
		let allIntents = new Discord.Intents(32767);
		this.client = new Discord.Client({ intents: allIntents }); // new discord intents
		let client = this.client; // on this client

		this.manageEvents(); // manage the ../EventManager.js
	}
		
	async manageEvents() {
		let evtmgmt = new EventManager(); // make new event
		await evtmgmt.joinAllEvents(this.client); // when bot joins event will automatically enable
		this.login();
	}

	login() {
		this.client.login(token); // login bot using token
	}
}
module.exports = Main;
