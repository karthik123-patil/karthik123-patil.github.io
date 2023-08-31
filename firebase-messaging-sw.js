importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');

   /*Update with yours config*/
  const firebaseConfig = {
    apiKey: "AIzaSyCxk0BYM60l8s_hUvSgBOe8UYY7G3F5MPY",
    authDomain: "track-genie-78ec0.firebaseapp.com",
    projectId: "track-genie-78ec0",
    storageBucket: "track-genie-78ec0.appspot.com",
    messagingSenderId: "735548968983",
    appId: "1:735548968983:web:c847a1a20ecece998b8c52",
    measurementId: "G-LSPXE1HG2R"
  };
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

  /*messaging.onMessage((payload) => {
  console.log('Message received. ', payload);*/
  messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });