console.log('Start');
function loginUser(email, password) {
  setTimeout(() => {
    console.log('Now we have the data');
    console.log('userEmail:' + email);
  }, 5000);
}

const user = loginUser('devedf@goomail.com', 123456);
console.log(user);

console.log('Finish');

/**
Start
undefined
Finish
Now we have the data
userEmail:devedf@goomail.com
 */
