const fibonacci = function (number) {
  if (number < 0) {
    return "OOPS";
  }
  let a = 0;
  let b = 1;

  let c = 0;

  for (let i = 2; i <= number; i++) {
    c = a + b;
    a = b;
    b = c;
  }

  return number ? b : a;
};

// Do not edit below this line
module.exports = fibonacci;
