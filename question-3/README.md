# Enunciado 3

> Implementar un método de verificación lógica de paréntesis. Es decir, implementar el método `parenthesisChecker(str)` que recibe un `string` como parámetro y devuelve un `boolean`. La respuesta del método debe ser `true` si la cadena de `string` es válida en términos de paréntesis (`( )`, `[ ]`, `{ }`), i.e. cada apertura de paréntesis se cierra correctamente. A continuación se muestran ejemplos de `string` válidos e inválidos.
> 
> **Ejemplos válidos**: la función debe devuelve `true`.
>
> - `parenthesisChecker('a * (b + c)')` → `true`
> - `parenthesisChecker('a * (b + c * [d])')` → `true`
> - `parenthesisChecker('[]{}()abc{([])}')` → `true`
>
> **Ejemplos válidos**: la función debe devuelve `false`.
>
> - `parenthesisChecker('(()')` → `false`
> - `parenthesisChecker('(([))')` → `false`
> - `parenthesisChecker('([)]')` → `false`

# Razonamiento

Supuestos: se ingresara en el string solo letras,numeros,los parentesis y datos de operaciones (+,-,/,*). Cualquier otro tipo de dato ingresado dara como resultado false.
Este es un caso similar al que se me presento en otra entrevista pero mas simplificado, por lo tanto use un razonamiento similar al otro.

Como el problema se trata de solo confirma que el string sea valido en temas de parentesis, se elimina primero todo lo que no sea parentesis para falicilitar las cosas. 
Para resolver el problema solo habria que ir de izquierda a derecha de el string para ir comprobando los parentesis de apertura e ir poniendolos en una pila, despues cuando encuentre un parentesis de cierre tiene que concidir con el ultimo parentisis puesto en la pila.En caso de que no coincida se devuelve false, y si coincide saca el ultimo parentesis de la pila.

Este ciclo se repite hasta el final del string, y si al final la pila esta vacia se devuelve true, en caso contrario false.