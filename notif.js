MsgElem = document.getElementById("msg");
TokenElem = document.getElementById("token");
NotisElem = document.getElementById("notis");
ErrElem = document.getElementById("err");
const tombol = document.getElementById("tombol");
// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
  apiKey: "AIzaSyCxqdZu8B5Rdr4_W-wOYr7Qnq4K3i-10qg",
  authDomain: "uaspeni.firebaseapp.com",
  projectId: "uaspeni",
  storageBucket: "uaspeni.appspot.com",
  messagingSenderId: "41993859040",
  appId: "1:41993859040:web:79dd28a9ebc6b714e74585",
  measurementId: "G-P8TJV4C3ZY",
};

firebase.initializeApp(config);
const messaging = firebase.messaging();

tombol.onclick = function () {
  messaging
    .requestPermission()
    .then(() => {
      // MsgElem.innerHTML = 'Notification permission granted.';
      console.log("Notification permission granted.");

      // get the token in the form of promise
      return messaging.getToken();
    })
    .then((token) => {
      // TokenElem.innerHTML = 'token is : ' + token;
      console.log(token);
    })
    .catch((err) => {
      ErrElem.innerHTML = ErrElem.innerHTML + "; " + err;
      console.log("Unable to get permission to notify.", err);
    });
};

messaging.onMessage(function (payload) {
  console.log("Message received. ", payload);
  NotisElem.innerHTML = NotisElem.innerHTML + JSON.stringify(payload);
  //kenng - foreground notifications
  const { title, ...options } = payload.notification;
  navigator.serviceWorker.ready.then((registration) => {
    registration.showNotification(title, options);
  });
});
