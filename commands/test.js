const handleTest = (ctx) => {
    ctx.reply('Hola, qué pasa!');
    ctx.replyWithDice();
    console.log(ctx.message)
}


module.exports = handleTest;