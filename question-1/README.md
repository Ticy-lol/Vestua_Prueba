# Enunciado 1

> Estás subiendo una escalera de N peldaños. En cada momento, puedes subir 1 o 2 peldaños. ¿En cuántas formas diferentes puedes subir las escalera?

# Razonamiento

Primero se dibujo el problema con N desde 1 hasta 10 para ver los resultados de salida y ver si existia un patron en sus salidas con respecto a las entradas. Se pudo observar que existia un patron que correspondia a que las diferentes formas de subir la escalera de una entrada N era igual a la forma de subir la escalera de N-1 + la forma de subir la escalera de N-2.
Rn=R(n-1)+R(n-2);

Rn: Son las diferentes maneras de subir la escalera tiendo a n como la entrada.

En el codigo que tuvo que hacer un pequeño "truco" para que el codigo funcionara de manera correcta sin tanta complejidad y fue añadiendole +1 al valor ingresado por el usuario.

PD:Se agrego una funcion para crear y escribir la respuesta en el aarchivo txt.
