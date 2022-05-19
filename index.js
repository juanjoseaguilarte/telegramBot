// Estructura básica de Express

// 1º requieo la librería de express, la variable express está guardando una función, función que hay que ejecutar

const express = require('express');

// 7 ºEsta clase es la que me deja interactuar con la api de telegram
const { Telegraf } = require('telegraf');

// 3º Configuración de ficheros de entorno, nos lee el fichero de entorno
require('dotenv').config();

// 2º Ejecutamos la función

const app = express();
// 8º lo iniciamos
const bot = new Telegraf(process.env.BOT_TOKEN);

// 9º Configuración Telegram, esta url tiene que existir, punto de entrada de las peticiones. Con estas 2 lineas nos conectamos con telegram
app.use(bot.webhookCallback('/url_telegram'))
// 9º accedemos al api nativo
bot.telegram.setWebhook(process.env.BOT_URL + '/url_telegram');

// 6º Ruta principal. era una prueba

// app.get('/', (req, res) => {
//     res.send("Funciona");
// });

// 10º todo lo que entra desde 9, lo maneja esto
app.post('/url_telegram', (req, res) => {
    res.end('Termina la peticion');
    
})

// 11.- Comandos
bot.command('test', require('./commands/test'));
bot.command('weather', require('./commands/weather'));
bot.command('where', require('./commands/where'));


bot.on('text', require('./nlu'));
// 4º Sacar el puerto

const PORT = process.env.PORT || 3000;

// 5º Ponerla a escuchar con su metodo listen y una funcion anonima cuando se ejecute

app.listen(PORT, () => {
    console.log("servido escuchando " + PORT)

});



// telegrapf.js

