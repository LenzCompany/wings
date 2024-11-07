
import { Client, Events } from "@mengkodingan/ckptw";
import fetch from "node-fetch"
import util from "util"
const bot = new Client({
    prefix: ".",
    printQRInTerminal: false,
    readIncommingMsg: true,
    usePairingCode: true,
    phoneNumber: '62856405754212', // phone number, e.g 62xxxxx
    WAVersion: [2, 3000, 1017531287],
});
bot.ev.once(Events.ClientReady, (m) => {
    console.log(`ready at ${m.user.id}`);
});
bot.command({
    name: "e",
    code: async (ctx) => {
      try {
        var evaled = await eval(ctx.args.join(" "));
        return ctx.reply({
          text: util.inspect(evaled, { depth: 0 }),
        });
      } catch (err) {
        return ctx.reply({ text: `${err}!` });
      }
    },
  });

  
bot.command("menu", async(ctx) => {
    try {
       const textnya = `Hello ${ctx.sender.pushName}!

*AI ASSISTANT*
> .ai pertanyaan

*TEMP MAIL*
> .tempmail
> .get-mail

*DOWNLOADER*
> .tiktok
> .gore`

ctx.reply(textnya)
    } catch (error) {
        ctx.reply(error)
    }
})
//DOWNLOADER
bot.command("gore", async(ctx) => {
    try {
        const ff = await fetch(`https://widipe.com/randomgore`)
    const res = await ff.json()
    ctx.reply({
        video: {
            url: res.result.url
        },
        mimetype: "video/mp4",
        caption: `${res.result.title}`,
        gifPlayback: false
    });

    } catch (error) {
        ctx.reply(`Maaf Fitur sedang di perbaiki!`)
        
    }
})
bot.command("tiktok", async(ctx) => {
    try {
        const text = ctx.args.join(" ") || null
        if (!text) return ctx.reply(`.tiktok url tiktok`)
        const ff = await fetch(`https://tikwm.com/api/?url=${text}`)
    const res = await ff.json()
    ctx.reply({
        video: {
            url: res.data.play
        },
        mimetype: "video/mp4",
        caption: `${res.data.title}`,
        gifPlayback: false
    });

    } catch (error) {
        ctx.reply(`Maaf Fitur sedang di perbaiki!`)
        
    }
})
//TEMP MAIL MENU
bot.command("tempmail", async(ctx) => {
    try {
       const url = await fetch(`https://widipe.com/tempmail`)
       const ya = await url.json()
       ctx.reply(util.format(ya.data))
    } catch (error) {
        ctx.reply(error)
    }
})
bot.command("get-mail", async(ctx) => {
    try {
        const text = ctx.args.join(" ") || null
        if (!text) return ctx.reply(`.get-mail email`)
        const ress = await fetch(`https://widipe.com/getmail?email=${text}`) 
    const result = await ress.json()
    ctx.reply(util.format(result.result.email))
    } catch (error) {
        ctx.reply(error)
        console.log("error", error)
    }
})
//AI MENU
bot.command("ai", async(ctx) => {
    try {
        const text = ctx.args.join(" ") || null
        if (!text) return ctx.reply(`.ai pertanyaan`)
        const resss = await fetch(`https://widipe.com/openai?text=${text}`) 
    const ress = await resss.json()
    ctx.reply(ress.result)
    } catch (error) {
        ctx.reply(error)
        console.log("error", error)
    }
})
bot.launch();
