/*
Welcome to the Node.js submission app.

The purpose of this app is to request an IAM token from IBM Cloud and finally send it to a validation end point,
together with your e-mail used in Maratona and your WML scoring endpoint URL.
The app has some bugs in it and will not function properly without some modifications.
Feel free to edit any parts of the app, except the while loop at the end, which is needed for the app to not stop running.
Good luck! 

The Maratona Behind the Code Organization
*/

tokenRequest().then(() => {
  submit(token);

  // WARNING: Do not remove the code below this line. The application must keep running after completing its job.
  while (1);
});
