const aut = (function () {
  let password = "1234"; 
  return {
    check(input) {
      return input === password;
    },
    test(input) {
      return input !== password;
    },
  };
})();

console.log(aut.check("1234"));
console.log(aut.test("1234"));
   