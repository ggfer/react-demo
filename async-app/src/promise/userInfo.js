console.log('Start');

function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Now we have the data');
      resolve({ userEmail: email });
    }, 3000);
  });
}
function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['video1', 'video2', 'video3']);
    }, 2000);
  });
}
function videoDetails(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('title of the video');
    }, 1000);
  });
}

// /** WAY.01 ugly code to execute synchronously. step by step */
// const user = loginUser('devedf@goomail.com', 123456, (user) => {
//   console.Log(user);
//   getUserVideos(user.userEmail, (videos) => {
//     console.Log(videos);
//     videoDetails(videos[0], (title) => {
//       console.Log(title);
//     });
//   });
// });

// /** WAY.02 this is the same thing as above. but it's a easier way to read.
//  * user do not execute videoDetails until executing get user from getUserVideos.
//  * and it is the same as detail.
//  * step by step
//  * however, it is a sugar syntax. can not separate and wrap by catch syntax*/
// loginUser('ed', 'bub')
//   .then((user) => getUserVideos(user.email))
//   .then((videos) => videoDetails(videos[0]))
//   .then((detail) => console.log(detail));

// /** compare to this below */
// // const user = loginUser('ed', 'sdf');
// // const videos = videoDetails(user.email);

// /** WAY.03. yt and fb both execute at the same time to get the data.
//  * resolve means some data that needs to be fully ready.
//  * it will not work out until all resolves are ready */
// const yt = new Promise((resolve) => {
//   setTimeout(() => {
//     console.log('getting stuff form yotuube');
//     resolve({ videos: [1, 2, 3, 4, 5] });
//   }, 15000);
// });
// const fb = new Promise((resolve) => {
//   setTimeout(() => {
//     console.log('stuff from fb');
//     resolve({ user: 'Name' });
//   }, 5000);
// });

// Promise.all([yt, fb]).then((result) => {
//   console.log(result);
// });

/** WAY.04. a nice way to write async function!!!!
 * tips: await is only valid in async function
 */
async function displayUser() {
  try {
    const loggedUser = await loginUser('ed', 13485);
    const videos = await getUserVideos(loggedUser.userEmail);
    const detail = await videoDetails(videos[0]);
    console.log(detail);
  } catch (err) {
    console.log('we could not get the videos');
  }
}
displayUser();
