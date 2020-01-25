function fizzBuzzOutput(value) {
  if (value % 15 === 0) {
    return "FizzBuzz";
  } else if (value % 5 === 0) {
    return "Buzz";
} else if  (value % 3 === 0) {
  return "Fizz";
} else {
  return value.toString();
}
}

for (var i = 1; i < 101; i++) {
  console.log(fizzBuzzOutput(i));
}
module.exports.fizzBuzzOutput = fizzBuzzOutput;
