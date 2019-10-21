document.addEventListener("DOMContentLoaded", event => {
    console.log("DOM fully loaded and parsed");

    const app = firebase.app();

    const db = firebase.firestore();

    let post = db.collection('post');

    //var storage = customApp.storage();
    let containerPost = document.getElementById("containerPost");
    let btnWall = document.getElementById("wall");
    btnWall.addEventListener('click', () => {
        db.collection("post").orderBy('timestamp', 'asc').limit(12).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
                const userPostData = doc.data();
                console.log("Holi "+`${userPostData.likes}`);
                const userPost =
                    `<div class="card"> 
                                <img src="${userPostData.profilePicUrl}"> 
                                <div class="container"> 
                                    <h4>Name: ${userPostData.name}</h4> 
                                    <p>Status: ${userPostData.status}</p> 
                                    <p>Time: ${userPostData.day} ${userPostData.hour}</p>
                                    <p>Text: ${userPostData.text}</p> 
                                    <p>Likes: ${userPostData.likes}</p> 
                                    <button onclick="contadorLikes('${doc.id}')">Laik</button>
                                    <button class = "editortexto" id ="${doc.id}">Editar</button>
                                    <button class = "elimarPost" id ="${doc.id}">Eliminar</button>
                                </div> 
                            </div>;`
                containerPost.innerHTML += userPost
            });

            let eliminarPost = document.querySelectorAll(".eliminarPost");
            for(let i = 0; i < eliminarPost.length; i++) {
                eliminarPost [i].addEventListener("click", () => {
                    const postAidi = event.target.id;
                })
            }
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
            //timestamp: getCurrentDate(),
            date: new Date(),
            day: new Date().toLocaleDateString(),
            hour: new Date().toLocaleTimeString(),
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

function getUserLikes() {
    return firebase.auth().currentUser.likes;
}

// function getCurrentDate() {
//     const d = new Date,
//         dformat = [d.getMonth() + 1,
//         d.getDate(),
//         d.getFullYear()].join('/') + ' ' +
//             [d.getHours(),
//             d.getMinutes(),
//             d.getSeconds()].join(':');
//     return d;
// }

const db = firebase.firestore();

const increment = firebase.firestore.FieldValue.increment (1);
const decrement = firebase.firestore.FieldValue.increment(-1);

const storyRef = db.collection('laiks').doc.id;

storyRef.update({ count: incremet });
storyRef.update({ count: decrement });


// let like = document.getElementById("Laiks");
// like.addEventListener('click', () => {
//     post.update({
//         likes: "3"
//     }).then(function (docRef) {
//         console.log("Document written with ID: ", docRef.id);
//     }).catch(function (error) {
//         console.error("Error adding document: ", error);
//     });
// });


// //Funcion para agregar los Likes
// function contadorLikes(id){
//          let postdb = db.collection('post').doc(id);
// // Atomically increment the population of the city by 1.
//      postdb.update({
//      likes: firebase.firestore.FieldValue.increment(1)
//  }
//  };

//  const db = firebase.firestore();
//  const increment = firebase.firestore.FieldValue.increment(1);
 
//  // Document reference
//  const storyRef = db.collection('laiks').doc.id);
 



// likesBtn.addEventListener('click',() => {
//    let 

// Vamoacalar la funcion 
// function addLike(){
//     db.collection.child().child("likes")
// } 








// //CONTADOR DE  likes dianaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

// // counters/${ID}
// {
//     "num_shards": NUM_SHARDS,
//     "shards": [subcollection]
//   }
  
//   // counters/${ID}/shards/${NUM}
//   {
//     "count": 123
//   }

//   function createCounter(ref, num_shards) {
//     var batch = db.batch();

//     // Initialize the counter document
//     batch.set(ref, { num_shards: num_shards });

//     // Initialize each shard with count=0
//     for (let i = 0; i < num_shards; i++) {
//         let shardRef = ref.collection('shards').doc(i.toString());
//         batch.set(shardRef, { count: 0 });
//     }

//     // Commit the write batch
//     return batch.commit();
// }

// function incrementCounter(db, ref, num_shards) {
//     // Select a shard of the counter at random
//     const shard_id = Math.floor(Math.random() * num_shards).toString();
//     const shard_ref = ref.collection('shards').doc(shard_id);

//     // Update count
//     return shard_ref.update("count", firebase.firestore.FieldValue.increment(1));
// }

// function getCount(ref) {
//     // Sum the count of each shard in the subcollection
//     return ref.collection('shards').get().then(snapshot => {
//         let total_count = 0;
//         snapshot.forEach(doc => {
//             total_count += doc.data().count;
//         });

//         return total_count;
//     });
// }



// //dianaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa//



// function likes() {
//     if (document.getElementById("iLike").checked) {
//         total = total + 1;
//         document.getElementById("totalLikes").innerHTML = total;
//     };
// };

// // Signs-out of Friendly Chat.
// // function signOut() {
// //   // Sign out of Firebase.
// //   firebase.auth().signOut();
// // };*/