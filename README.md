# NLP Twitter ARG
Aplicación fullstack MERN (MongoDB, Express, React, Node):
- Del lado del **backend**, se extraen y analizan tweets en tiempo real, siempre que se ajusten a las reglas predefinidas. Estas reglas son:
    - Que estén en idioma español.
    - Que mencionen a Argentina o al menos uno de entre los nombres de algunas de las figuras políticas a las que se les está haciendo seguimiento.

    El procesamiento de la data está principalmente dirigida a un estudio de **Procesamiento de Lenguaje Natural** (NLP), que incluirá los siguientes resultados:
    - Carga emotiva de cada tweet (análisis de sentimiento).
    - Adjetivo(s) encontrados en el texto del tweet, y la totalización de cada uno de ellos a lo largo del tiempo.

- Del lado del **frontend**, a pedido del usuario se muestran gráficos de la data extraída y procesada. Principalmente se concentrará en desplegar:
    - Un gráfico de línea (*line chart*) que muestre las variaciones del análisis de sentimiento para cada político (o Argentina) en tiempo real.
    - Una nube de palabras (*word cloud*) de los adjetivos encontrados.

Para la extracción de datos (tweets) se utiliza la librería [node-twitter-api-v2](https://github.com/PLhery/node-twitter-api-v2)

Para el procesamiento de datos se utiliza la librería [Lorca](https://github.com/dmarman/lorca).

## Para usar este repositorio
1. Clona el repo:
    ```bash
    git clone https://github.com/dan-almenar/nlp-twitter-arg.git
2. Cambia al directorio de la app:
    ```bash
    cd nlp-twitter-arg
3. Instala las librerías y dependencias necesarias:
    ```bash
    npm install
4. Necesitarás crear una nueva app y obtener sus llaves en [Twitter](https://developer.twitter.com).
5. Crea un archivo .env que guarde las llaves del API de twitter. Estas son utilizadas en el archivo services/client.js
6. Inicializa un servidor de desarrollo:
    ```bash
    npm run devstart
7. Abre el navegador en el [puerto 3000](localhost://3000)

## Nota:
Este es un **proyecto en desarrollo**. Cuando esté finalizado, se añadirá acá el link a la versión live de la app.