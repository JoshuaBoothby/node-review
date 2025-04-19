export function greeting(name) {
  return "Hello, ${name}! Welcome to the program.";
}

export function doubleArray(numbers) {
  return numbers.map((num) => num * 2);
}

module.exports = {
  greeting,
  doubleArray,
};
