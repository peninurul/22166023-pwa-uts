importScripts("https://www.gstatic.com/firebasejs/7.2.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.2.1/firebase-messaging.js");
// For an optimal experience using Cloud Messaging, also add the Firebase SDK for Analytics.
importScripts("https://www.gstatic.com/firebasejs/7.2.1/firebase-analytics.js");

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
const config = {
  apiKey: "AIzaSyCxqdZu8B5Rdr4_W-wOYr7Qnq4K3i-10qg",
  authDomain: "uaspeni.firebaseapp.com",
  projectId: "uaspeni",
  storageBucket: "uaspeni.appspot.com",
  messagingSenderId: "41993859040",
  appId: "1:41993859040:web:79dd28a9ebc6b714e74585",
  measurementId: "G-P8TJV4C3ZY",
};

firebase.initializeApp({
  messagingSenderId: "41993859040",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notification = JSON.parse(payload.data.notification);
  const notificationTitle = notification.title;
  const notificationOptions = {
    body: notification.body,
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
