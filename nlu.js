const { Wit, log } = require('node-wit');
const fs = require('fs');
const googleTTS = require('google-tts-api');

const client = new Wit({
  accessToken: process.env.WIT_TOKEN,
  logger: new log.Logger(log.DEBUG),
});

const handleNlu = async (ctx) => {
    const res = await client.message(ctx.message.text);
    console.log(res);
    if (res.intents.length === 0) {
        ctx.reply('No te entiendo');
    } else {
        if (res.intents[0].confidence > 0.80) {
            // LA IA me entiende
            const intent = res.intents[0].name;
            const content = fs.readFileSync(`./frases/${intent}.txt`, 'utf-8');
            const frases = content.split('\n');
            const fraseSeleccionada = frases[Math.floor(Math.random() * frases.length)];
            
            const audioUrl = googleTTS.getAudioUrl(fraseSeleccionada, {
                lang: 'es',
                slow: false,
                host: 'https:/translate.google.com',
            });

            //ctx.reply(fraseaudioUrlSeleccionada);
            ctx.replyWithAudio(audioUrl)
        } else {
            ctx.reply('No te entiendo')
        }
    }



}

module.exports = handleNlu;