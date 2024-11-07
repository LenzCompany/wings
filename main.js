
import { Client, Events, VCardBuilder  } from "@mengkodingan/ckptw";
import fetch from "node-fetch"
import util from "util"
import axios from "axios"
import mime from "mime-types"

const erorr = "Server Sedang Sibuk Coba Lagi Nanti!"

//function

async function luminaii(content) {
    try {
        const response = await axios.post('https://luminai.my.id/', { content });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const bot = new Client({
    prefix: ".",
    printQRInTerminal: false,
    readIncommingMsg: true,
    usePairingCode: true,
    phoneNumber: '62856405754212', // phone number, e.g 62xxxxx
    WAVersion: [2, 3000, 1017531287],
});
bot.ev.once(Events.ClientReady, (m, ctx) => {
    console.log(`ready at ${m.user.id}`)
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

//GENERAL
bot.command("uptime", async(ctx) => {
    function formatUptime(uptimeInSeconds) {
        const totalSeconds = Math.floor(uptimeInSeconds);
        const days = Math.floor(totalSeconds / (24 * 60 * 60));
        const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
        const seconds = totalSeconds % 60;
    
        return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    }
    
    // Contoh penggunaan
    const uptime = process.uptime(); // Mendapatkan uptime dalam detik
    const formattedUptime = formatUptime(uptime);
    //console.log(`Server uptime: ${formattedUptime}`);
    ctx.reply(`Server Uptime: ${formattedUptime}`)

})
bot.command("ping", async(ctx) => {
    const startTime = Date.now();
    
    fetch(`https://github.com`, { method: 'HEAD', mode: 'no-cors' })
        .then(() => {
            const duration = Date.now() - startTime;
            ctx.reply(`${duration} ms`)
        })
})
bot.command("owner", async(ctx) => {
    try {
        const vcard = new VCardBuilder()
    .setFullName("Ndaa") // full name
    .setOrg("LenzyCompany") // organization name
    .setNumber("6285640575421") // phone number
    .build(); // required build function at end

ctx.reply({ contacts: { displayName: "Ndaa", contacts: [{ vcard }] }});
    } catch (error) {
        ctx.reply(erorr)
    }
})
bot.command("menu", async(ctx) => {
    try {
       const textnya = `Hello ${ctx.sender.pushName}!

*GENERAL*
> .owner
> .menu
> .ping
> .uptime

*AI ASSISTANT*
> .ai pertanyaan
> .gemini pertanyaan
> .luminai pertanyaan

*TEMP MAIL*
> .tempmail
> .get-mail

*DOWNLOADER*
> .tiktok
> .gore

*EKONOMI*
> .kurs

*FUN*
> .meme
> .jokes`


ctx.reply(textnya)
    } catch (error) {
        ctx.reply(error)
    }
})
//FUN
bot.command("jokes", async(ctx) => {
    const data = await fetch(`https://candaan-api.vercel.app/api/text/random`)
    const dah = await data.json()
    ctx.reply(dah.data)
})
bot.command("meme", async(ctx) => {
    try {
        const res = await fetch(`https://candaan-api.vercel.app/api/image/random`)
        const mm = await res.json()
        return await ctx.reply({
            image: {
                url: mm.data.url
            },
            mimetype: mime.lookup("png"),
            caption: `DONE`
        });
    } catch (error) {
        ctx.reply(erorr)
    }
})
//EKONOMI
bot.command("kurs", async(ctx) => {
    try {
        const req = await fetch(`https://raw.githubusercontent.com/BochilTeam/database/refs/heads/master/ekonomi/kurs.json`)
        const ff = await req.json()
        ctx.reply(util.format(ff))
    } catch (error) {
        ctx.reply(erorr)
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
bot.command("luminai", async(ctx)=> {
    try {
        const argz = ctx.args.join(" ") || null
        if (!argz) return ctx.reply(`.luminai query`)
        const epep = await luminaii(argz)
    ctx.reply(epep.result)
    } catch (error) {
        ctx.reply(erorr)
    }
})
bot.command("gemini", async(ctx) => {
    try {
        const text = ctx.args.join(" ") || null
        if (!text) return ctx.reply(`.gemini query`)
            const url_api = await fetch(`https://wudysoft.us.kg/api/ai/ai-groq/gemini?q=${text}`)
        const final = await url_api.json()
        ctx.reply(final.result)
    } catch (error) {
        ctx.reply(error)
    }
})
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
