console.log('Start');

function loginUser(email, password, callback) {
  setTimeout(() => {
    console.log('Now we have the data');
    callback({ userEmail: email });
  }, 3000);
}
function getUserVideos(email, callback) {
  setTimeout(() => {
    callback(['video1', 'video2', 'video3']);
  }, 2000);
}

function videoDetails(video, callback) {
  setTimeout(() => {
    callback('title of the video');
  }, 2000);
}
const user = loginUser('devedf@goomail.com', 123456, (user) => {
  console.log(user);
  getUserVideos(user.userEmail, (videos) => {
    console.log(videos);
    videoDetails(videos[0], (title) => {
      console.log(title);
    });
  });
});

console.log('End');

/**
Start
End
Now we have the data
{ userEmail: 'devedf@goomail.com' }
[ 'video1', 'video2', 'video3' ]
title of the video
 */
