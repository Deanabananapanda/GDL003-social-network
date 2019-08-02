document.addEventListener("DOMContentLoaded", event => {
    console.log("DOM fully loaded and parsed");

    const app = firebase.app();

    const db = firebase.firestore();

    const post = db.collection('post');

    //var storage = customApp.storage();
    let containerPost = document.getElementById("containerPost");
    let btnWall = document.getElementById("wall");
    btnWall.addEventListener('click', () => {
        db.collection("post").orderBy('timestamp', 'asc').limit(12).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
                const userPostData = doc.data();
                const userPost =
                    `<div class="card"> +
                                <img src="${userPostData.profilePicUrl}"> +
                                <div class="container"> +
                                    <h4>Name: ${userPostData.name}</h4> +
                                    <p>Status: ${userPostData.status}</p> +
                                    <p>Time: ${userPostData.timestamp}</p> +
                                    <p>Text: ${userPostData.text}</p> +
                                    <p>Likes: ${userPostData.likes}</p> +
                                </div> +
                            </div>;`
                containerPost.innerHTML += userPost
            });
        });
    });

    let textPost = document.querySelector(".textPost");
    let indications = document.querySelector(".indications");
    let zone = document.querySelector(".selectZone").value;
    let statusPost = document.querySelector(".status").value;
    // Saves a new message on the Cloud Firestore.
    let saveBtn = document.getElementById("saveBtn");
    saveBtn.addEventListener('click', () => {

        post.add({
            email: getUserEmail(),
            name: getUserName(),
            profilePicUrl: getProfilePicUrl(),
            status: statusPost,
            text: textPost.value + " " + indications.value + " " + zone,
            timestamp: getCurrentDate(),
            likes: "0"
        }).then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        }).catch(function (error) {
            console.error("Error adding document: ", error);
        });
    });
});


// Returns the signed-in user's profile pic URL.
let containerUserData = document.querySelector(".containerUserData");
let btnProfile = document.getElementById("profile");
btnProfile.addEventListener('click', () => {
    document.getElementById("publish").innerHTML = "";
    // Returns true if a user is signed-in.

    function isUserSignedIn() {
        return !!firebase.auth().currentUser;
    }
    containerUserData.innerHTML += getUserEmail() + '<br>' + getUserName() + '<br>' + `<img src=${getProfilePicUrl()}>`;
});
// Returns the signed-in user's display name.
function getUserName() {
    return firebase.auth().currentUser.displayName;
}
function getProfilePicUrl() {
    return firebase.auth().currentUser.photoURL || '/images/profile_placeholder.png';
}
function getUserEmail() {
    return firebase.auth().currentUser.email;
}

function getCurrentDate() {
    const d = new Date,
        dformat = [d.getMonth() + 1,
        d.getDate(),
        d.getFullYear()].join('/') + ' ' +
            [d.getHours(),
            d.getMinutes(),
            d.getSeconds()].join(':');
    return d;
}



/*
//likes
function likes() {
    if (document.getElementById("iLike").checked) {
        total = total + 1;
        document.getElementById("totalLikes").innerHTML = total;
    };
};

// Signs-out of Friendly Chat.
function signOut() {
  // Sign out of Firebase.
  firebase.auth().signOut();
};*/