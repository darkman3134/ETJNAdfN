const client = require("../index");

client.on("ready", () => {
    console.log(`${client.user.tag} ile giriş yapıldı!`)
    client.user.setActivity(`${client.config.botDurum}`);
});
