document.addEventListener("DOMContentLoaded", event => {
    console.log("DOM fully loaded and parsed");

    const app = firebase.app();

    const db = firebase.firestore();

    const post = db.collection('post');

    const position = 'botom';
    let elems = document.querySelectorAll('.tooltipped');
    let instances = M.Tooltip.init(elems, position);

    //var instance = M.Tabs.init(el, options);

    //var storage = customApp.storage();
    let containerPost = document.getElementById("home");
    let btnWall = document.querySelector(".feed");
    btnWall.addEventListener('click', () => {
        document.getElementById("publish").innerHTML = "";
        document.getElementById("profile").innerHTML = "";
        db.collection("post").orderBy('date', 'asc').limit(30).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
                const userPostData = doc.data();
                const userPost =
                    `<div class="chip orange accent-2 white-text text-lighten-5 center-align"> 
                                <img class="circle responsive-img" src="${userPostData.profilePicUrl}">
                                ${userPostData.name} ${userPostData.date} 
                                <div class="card panel orange accent-3">
                                <div class="card-content black-text text-darken-4">
                                    <p>Status: ${userPostData.status}</p> 
                                    <p>${userPostData.text}</p>
                                    <p>Zona: ${userPostData.zone}</p>
                                    </div>
                                    </div>
                                    <div class="chip">
                                    <button onclick="contadorLikes('${doc.id}')">Laik</button>
                                   <button class = "editortexto" id ="${doc.id}">Editar</button>
                                   <button class = "elimarPost" id ="${doc.id}">Eliminar</button>
                                </div>
                            </div>;`
                containerPost.innerHTML += userPost
            });
        });
    });

    let btnPublish = document.querySelector(".publish");
    btnPublish.addEventListener('click', () => {
        document.getElementById("publish").innerHTML;
    });


    //$(document).ready(function() {
    //    $('textarea#textForPost, input#indicationsForPost').characterCounter();
    //});

    let textPost = document.querySelector(".textPost");
    let indications = document.querySelector(".indications");
    let zone = document.getElementById("selectZone").value;
    let statusPost = document.getElementById("status").value;
    let day = new Date().toLocaleDateString();
    let hour = new Date().toLocaleTimeString();
    let dates = " ";
    dates = day + " " + hour;
    let saveBtn = document.getElementById("saveBtn");
    saveBtn.addEventListener('click', () => {

        post.add({
            email: getUserEmail(),
            name: getUserName(),
            profilePicUrl: getProfilePicUrl(),
            status: statusPost,
            text: textPost.value + " " + indications.value,
            zone: zone,
            date: dates,        
            likes: "0"
        }).then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        }).catch(function (error) {
            console.error("Error adding document: ", error);
        });
    });
});


// Returns the signed-in user's profile pic URL.
let containerUserData = document.getElementById("profile");
let btnProfile = document.querySelector(".profile");
btnProfile.addEventListener('click', () => {
    document.getElementById("publish").innerHTML = "";
    document.getElementById("home").innerHTML = "";
    // Returns true if a user is signed-in.
    function isUserSignedIn() {
        return !!firebase.auth().currentUser;
    }

    containerUserData.innerHTML +=
        `<div class="row">
        <div class="col s12 m7">
            <div class="card">
                <div class="card-image">
                    <img src="${getProfilePicUrl()}"> 
                </div>
                <div class="card-content orange accent - 3 white-text center-align">
                    <p>${getUserName()}</p> 
                    <p>${getUserEmail()}</p>
                </div>
            </div>
        </div>
    </div>;`
    isUserSignedIn()
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

/*
function getCurrentDate() {
    const d = new Date,
        dformat = [d.getMonth() + 1,
        d.getDate(),
        d.getFullYear()].join('/') + ' ' +
            [d.getHours(),
            d.getMinutes(),
            d.getSeconds()].join(':');
    return d.toLocaleDateString();
}

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