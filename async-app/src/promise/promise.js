const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('got the user');
    resolve({ user: 'jojo' });
    reject(new Error('User not logged in'));
  }, 2000);
});

promise
  .then((user) => {
    console.log(user);
  })
  .catch((err) => console.log(err.message));

// don't use callback any more to make it easier to read.
// if promise doesn't get the user in resolve, reject would be caught by promise.
