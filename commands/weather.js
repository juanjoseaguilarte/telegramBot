const axios = require("axios").default;

const handleWeather = (ctx) => {
  //const ciudad2 = ctx.message.text.split(" ", 2);
  //const ciudad = ctx.message.text.split('/weather ')[1];
  const ciudad = ctx.message.text.slice(9).trim();
  //const ciudad = ciudad2[1];
  const APIkey = "AIzaSyBMOcTcAkobrlfKIBOJNz6lDw2R5fJsk_Q";

    
    
  const instancia = axios({
    method: "get",
    url: `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${APIkey}&units=metric`,
  })
    .then(function (response) {
      //if (response.status === 404) { ctx.reply("Introduce una ciudad valida") }
      console.log(response.error);
      //console.log(response.data);
        const res = `La temperatura en ${ciudad} es:
        TEMP: ${response.data.main.temp} º
        MAX:  ${response.data.main.temp_max} º
        MIN:  ${response.data.main.min} º
        HUM🐸:  ${response.data.main.humidity} %
    `;
        ctx.reply(res)

    })
    .catch(function (error) {
      // manejar error
        console.log(error.data);
        if (error.data === undefined) {
            ctx.reply("Introduce una ciudad válida")
        }
    });
};

module.exports = handleWeather;

/**
 * La petición la hacemos a través de AXIOS
- Una vez hecha la descarga mostramos al usuario los datos de: 
- temperatura actual
- temperatura máxima
- temperatura mínima
- humedad
 */