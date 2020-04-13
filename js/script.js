const nav1 = document.getElementById("navItem1");
nav1.addEventListener("click", changeNav1);
const nav2 = document.getElementById("navItem2");
nav2.addEventListener("click", changeNav2);
const nav3 = document.getElementById("navItem3");
nav3.addEventListener("click", changeNav3);
const nav4 = document.getElementById("navItem4");
nav4.addEventListener("click", changeNav4);

function changeNav1(){
    document.querySelector(".body1").style.display = "block";
    document.querySelector(".body2").style.display = "none";
    document.querySelector(".body3").style.display = "none";
    document.querySelector(".body4").style.display = "none";
}

function changeNav2(){
    document.querySelector(".body1").style.display = "none";
    document.querySelector(".body2").style.display = "block";
    document.querySelector(".body3").style.display = "none";
    document.querySelector(".body4").style.display = "none";
}

function changeNav3(){
    document.querySelector(".body1").style.display = "none";
    document.querySelector(".body2").style.display = "none";
    document.querySelector(".body3").style.display = "block";
    document.querySelector(".body4").style.display = "none";
}

function changeNav4(){
    document.querySelector(".body1").style.display = "none";
    document.querySelector(".body2").style.display = "none";
    document.querySelector(".body3").style.display = "none";
    document.querySelector(".body4").style.display = "block";
}