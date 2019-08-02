const firebaseConfig = {
  apiKey: "AIzaSyBrQLBX60ZVpF3iY-Y6pL9zl1RvgSZugBM",
  authDomain: "sholofood.firebaseapp.com",
  databaseURL: "https://sholofood.firebaseio.com",
  projectId: "sholofood",
  storageBucket: "sholofood.appspot.com",
  messagingSenderId: "1091396395821",
  appId: "1:1091396395821:web:3cc0733077f135c2",
};

firebase.initializeApp(firebaseConfig);

// Initiate Firebase Auth.
function initFirebaseAuth() {
  // Listen to auth state changes.
  firebase.auth().onAuthStateChanged(authStateObserver);
}