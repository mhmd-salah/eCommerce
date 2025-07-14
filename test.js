// function createClickCounter() {
//   let clicks = 0;

//   return function () {
//     clicks++;
//     console.log(`counter ${clicks}`);
//   };
// }

// const likeBtn = createClickCounter();
// const shareBtn = createClickCounter();

// likeBtn(); // 1
// likeBtn(); // 2
// shareBtn(); // 1



// let likeClicks = 0;

// function clickCounter() {
//   clicks++;
//   console.log(`counter ${clicks}`);
// }

// clickCounter(); // 1
// clickCounter(); // 2
// clickCounter(); // 3 

// //////


const Auth = (function () {
  let password = "1234"; // secret

  return { 
    check(pass) {
      return pass === password;
    }
  };
})();

console.log(Auth.check("1234")); // true
console.log(Auth.password);      // undefined ❌



