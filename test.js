// const aut = (function () {
//   let password = "1234";
//   return {
//     check(input) {
//       return input === password;
//     },
//     test(input) {
//       return input !== password;
//     },
//   };
// })();

// console.log(aut.check("1234"));
// console.log(aut.test("1234"));

const useState = (defaultState) => {
  let state = defaultState;

  let setState = (newState) => {
    if (typeof newState == "function") state = newState(state);
    else state = newState;
  };

  return [
    () => state, // getter
    setState,    // setter
  ];
};

const [getNumber,setNumber] = useState(10)

console.log(getNumber)