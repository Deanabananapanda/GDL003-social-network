document.querySelector(".joingPage").style.display="block";

const login = document.getElementById('login');
login.addEventListener("click", ()=>{
    document.querySelector(".joingPage").style.display="none";
    document.querySelector(".loginPage").style.display="block";
});

const register = document.getElementById('register');
register.addEventListener("click", ()=>{
    document.querySelector(".joingPage").style.display="none";
    document.querySelector(".registerPage").style.display="block";
});

/*
 const template = `
<div id="home" class="home"><br><br>
    <img src="${info.img}" alt="pokemon picture"/>  
    <p>${info.likes} Me gusta</p>
    <p>${info.hashtag}</p>
    <p>${info.localization}</p> <br>
    <p>${info.ubication}</p> <br>
</div> `*/
