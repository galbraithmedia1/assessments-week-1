console.log("Welcome to the varidator tool!!!");
console.log("Password must be longer then 10 characters but no longer then 20 characters. Also must end with the number 1")

//boilerplate code
const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question(
  `Hi what password do you want to validate?`,
  function (password) {



  //  const specialCharacters = 
    const number = [1]



    if (password.length >= 10 && password.length <=20 && password.endsWith(number)) {
      console.log(`Great Password! 
"
           /$$                                           /$$      
          | $$                                          | $$      
  /$$$$$$ | $$$$$$$        /$$   /$$  /$$$$$$   /$$$$$$ | $$$$$$$ 
 /$$__  $$| $$__  $$      | $$  | $$ /$$__  $$ |____  $$| $$__  $$
| $$  \ $$| $$  \ $$      | $$  | $$| $$$$$$$$  /$$$$$$$| $$  \ $$
| $$  | $$| $$  | $$      | $$  | $$| $$_____/ /$$__  $$| $$  | $$
|  $$$$$$/| $$  | $$      |  $$$$$$$|  $$$$$$$|  $$$$$$$| $$  | $$
 \______/ |__/  |__/       \____  $$ \_______/ \_______/|__/  |__/
                           /$$  | $$                              
                          |  $$$$$$/                              
                           \______/                               
`);
    } else {
      console.log("Password is either \n" +
      "• not long enough, \n" +
      "• too long \n" +
      "• or does not end with 1");
    }

    reader.close();
  }
);

// console.log(` 
// "       .__         _____.___.             .__     
//   ____ |  |__      \__  |   | ____ _____  |  |__  
//  /  _ \|  |  \      /   |   |/ __ \\__  \ |  |  \ 
// (  <_> )   Y  \     \____   \  ___/ / __ \|   Y  \
//  \____/|___|  /     / ______|\___  >____  /___|  /
//             \/      \/           \/     \/     \/ `);
