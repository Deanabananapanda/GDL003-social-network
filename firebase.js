const firebaseConfig = {
    apiKey: "AIzaSyBrQLBX60ZVpF3iY-Y6pL9zl1RvgSZugBM",
    authDomain: "sholofood.firebaseapp.com",
    databaseURL: "https://sholofood.firebaseio.com",
    projectId: "sholofood",
    storageBucket: "",
    messagingSenderId: "1091396395821",
    appId: "1:1091396395821:web:3cc0733077f135c2",
};

firebase.initializeApp(firebaseConfig);

let ui = new firebaseui.auth.AuthUI(firebase.auth());

let uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
     
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: 'index.html',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.

    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
   
  // Terms of service url.
  tosUrl: 'index.html',
  // Privacy policy url.
  privacyPolicyUrl: '<your-privacy-policy-url>'
};

ui.start('#contenedorvergas', uiConfig);


