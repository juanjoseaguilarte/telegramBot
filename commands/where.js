const NodeGeocoder = require('node-geocoder');

const options = {
  provider: "google",
  apiKey: "AIzaSyBMOcTcAkobrlfKIBOJNz6lDw2R5fJsk_Q",
};
 const APIkey = "AIzaSyBMOcTcAkobrlfKIBOJNz6lDw2R5fJsk_Q";

const handleTest = async (ctx) => {

    const direccion = ctx.message.text.slice(7).trim();
    // Geocode
    const geocoder = NodeGeocoder(options);
  const res = await geocoder.geocode(direccion);
  
    // Creacion imagen Google Map static
  const imgMap = `https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+${res[0].latitude},${res.longitude}&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C${res[0].latitude},${res[0].longitude}&key=${APIkey}`;
  console.log(imgMap)
  
  
  ctx.reply(`La latitud es: ${res[0].latitude}
  Y la longitud es:  ${res[0].longitude}`);
  ctx.replyWithLocation(res[0].latitude, res[0].longitude)
  ctx.replyWithPhoto(imgMap)
};

module.exports = handleTest;
