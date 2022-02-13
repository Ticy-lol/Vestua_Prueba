/**
 * On this module you should write your answer to question #1.
 * This file would be executed with the following command (N=100):
 * $ node scritp.js 100
 */

const args = process.argv.slice(-1);
console.log(`Running question #1 with args ${args}`);

function starirsShuffle(n) {
  if (n <= 1) {
    return 1;
  } else if (n <= 2) {
    return 1;
  } else {
    return starirsShuffle(n - 1) + starirsShuffle(n - 2);
  }
}
console.log("Ingrese valor de N");
var stdin = process.openStdin();

stdin.addListener("data", function (N) {
  var numero = Number.parseInt(N.toString());
  if (numero <= 0) {
    console.log(0);
  } else {
    console.log(
      "Las diferentes formas de subir las escaleras: " +
        starirsShuffle(numero + 1)
    );
  }
  process.exit();
});
