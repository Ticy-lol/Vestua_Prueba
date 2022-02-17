/**
 * On this module you should write your answer to question #3.
 * This file would be executed with the following command:
 * $ node scritp.js 'a * (b + c)'
 */

const args = process.argv.slice(-1);
console.log(`Running question #3 with args ${args}`);

/**
 * Check if a string has correct use of parenthesis.
 *
 * @param {String} str - String to be evaluated
 * @returns {Boolean} Returns true if string is valid.
 */
function parenthesisChecker(str) {
  // TODO: Implement validation logic
  str = str.replace(/[a-zA-Z0-9]/g, "");
  str = str.replace(/[*]/g, "");
  str = str.replace(/[/]/g, "");
  str = str.replace(/[-]/g, "");
  str = str.replace(/[+]/g, "");
  let stack = [];
  for (i = 0; i < str.length; i++) {
    let char = stack[stack.length - 1];
    if (str[i] == "{" || str[i] == "[" || str[i] == "(") {
      stack.push(str[i]);
    } else if (
      (char == "{" && str[i] == "}") ||
      (char == "[" && str[i] == "]") ||
      (char == "(" && str[i] == ")")
    ) {
      stack.pop();
    } else {
      return false;
    }
  }
  if (stack.length == 0) {
    return true;
  } else return false;
}
/*
const isValid = parenthesisChecker(args);
console.log(`parenthesisChecker("${args}") = ${isValid}`);
*/
console.log("Ingrese string");
var stdin = process.openStdin();

stdin.addListener("data", function (string) {
  console.log(parenthesisChecker(string.toString().trim()));
  process.exit();
});
