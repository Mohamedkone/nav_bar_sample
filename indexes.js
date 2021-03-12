var header = document.getElementsByTagName("header")[0];
var burger = document.getElementById("burger");
var nav = document.getElementById("nav");
var login = document.getElementById("login");
/*
This function take care of showing the menu when 
the user is using a small screen
*/
function toggle(){

    if (nav.style.display == "flex" && login.style.display == "block" ){
        nav.style.display = "";
        login.style.display = "";
    }
    else{
        nav.style.display = "flex";
        login.style.display = "block";
    }
    
};
/*
This function determine if the user windowns is bigger than 900px if yes
it will change the class of header and nav so it can get fixed on the left
when user scroll down pass 100px on the Y axes.
*/
function vasy(){
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if(viewportWidth > 900){
    if (window.pageYOffset >= 100) {
        header.classList.add("sticky");
        header.classList.remove("norm");
        nav.classList.remove("n-norm");
        }
    else {
        nav.classList.add("n-norm");
        header.classList.remove("sticky");
        header.classList.add("norm");
        }
    }
}

/*
This line is only important if a screen get resize and the navigation bar
is fixed on the side of the screen. This function will reset it to the top for
tablets, mobiles or small windows
*/
function eee(){
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if(viewportWidth < 900){
        nav.classList.add("n-norm");
      header.classList.remove("sticky");
    header.classList.add("norm");
    }
}

