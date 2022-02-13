# Enunciado 2

> En la carpeta [question-2](https://bitbucket.org/vestua-com/questions/src/main/question-2/) se ha exportado eventos de navegación de usuarios anonimizados de la plataforma Vestuá. Se le pide al equipo de Ingeniería que hagan un análisis sobre los datos de navegación. En particular se solicita:
>
> - Calcular la cantidad de visitas únicas por cada producto.
> - Calcular la cantidad de clicks únicos por cada producto.
> - Calular el CTR (_Clickthrough Rate_) de cada producto.
>
> El set de datos contiene la siguiente estructura:
>
> - `user`: id del usuario que ejecutó el evento.
> - `entityId`: id de la entidad al que el usuario ejecutó el evento.
> - `entityType`: tipo de entidad al que se ejecutó el evento.
> - `eventType`: tipo de evento. Puede ser `impression` o `click`.
>
> Como miembro del equipo de ingeniería, te solicitan modificar el archivo [script.js](https://bitbucket.org/vestua-com/questions/src/main/question-2/script.js) para que pueda leer el set de datos y generar un archivo `output.csv` con las siguientes columnas:
>
> - `productId`: id del producto.
> - `clicks`: cantidad de _clicks_ únicos que tiene el producto
> - `impressions`: cantidad de impresiones únicas que tiene el producto.
> - `ctr`: métrica CTR del producto.

# Razonamiento

Se instalo un modulo de node para convertir el archivo csv a json, "npm i csvtojson" y se instalo "npm install csv-writer" para convertir el json a csv.

Se asume que el ctr es impresiones/clicks.

Se usa el udo de csvtojson para convertir el csv a un json y poder trabajarlo.
Como el problema es sobre los productos, lo primero es obtener los productId sin duplicados.
Despues es crear cada una de las funciones para los clicks unicos e impresiones unicos.
-En la funcion de clicks se pasara como parametro el productId para que busque en los datos cuantos clicks unicos se hicieron y se devolvera como el numero de clicks.
-En la funcion de impresiones se pasara como parametro el productId para que busque en los datos cuantos impresiones unicos se hicieron y se devolvera como el numero de impresiones.
-En la funcion de CTR se tomara los impresiones y la clicks de cada producto y se dividiran(impresiones/clicks).
-Se crea un objeto y se agregan todos los valores anteriores con sus recpectivos productId, se agregan a un array.
Lo anterior se repite hasta que se recorran todos los productId.
Se utiliza csv-writer para convertir el json a csv.
