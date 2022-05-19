Ejecucion /weather Madrid

Comando /weather y seguido del nombre de la ciudad

- En app.js definir el comando
- Crear un fichero wather.js dentro de los comandos
- Engancharlo
- De donde saco la ciudad? -> analizar la variable ctx.message
- Extraigo al ciudad del mensaje
- Lanzar una peticion sobre la API de openwathermap para recuperar la informacion d 



https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

la peticion la hacemos a traves de axios
una vez hecha la descarga mostramos al usuario los datos de:
    - temperutara actual
    maxima
    minima
    humedad



/where

Comando /where

Crear fichero para manejar