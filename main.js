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