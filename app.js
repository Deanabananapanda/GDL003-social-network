let uiConfig = {

    callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return true;
        },
        uiShown: function () {
            // The widget is rendered.
            // Hide the loader.

        }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: 'muro.html',
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

let ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start('#container', uiConfig);