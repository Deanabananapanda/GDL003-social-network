const firebaseConfig = {
    apiKey: "AIzaSyBvz_VJHPQzP-DVdCm5I5bXhz7_wMHbtm0",
    authDomain: "papayeats.firebaseapp.com",
    databaseURL: "https://papayeats.firebaseio.com",
    projectId: "papayeats",
    storageBucket: "",
    messagingSenderId: "463958804951",
    appId: "1:463958804951:web:820337c188a9bbc8"
  };

  firebaseConfig.initializeApp(firebaseConfig);


const login = document.getElementById('login');

//changePage1 ()=> {
//};    

login.addEventListener("click", ()=>{
    document.querySelector(".mainPage").style.display="none";
    document.getElementById("loginPage").style.display="block";
});

/* const template = `
<div id="home" class="home"><br><br>
    <img src="${info.img}" alt="pokemon picture"/>  
    <p>${info.likes} Me gusta</p>
    <p>${info.hashtag}</p>
    <p>${info.localization}</p> <br>
    <p>${info.ubication}</p> <br>
</div> `*/
