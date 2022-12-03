const btn_more_mobile = document.getElementById("Btn_mobile")
const more_menu = document.querySelector(".block_button")
const img = document.querySelector(".fa-up-long")
const img2 = document.querySelector(".fa-down-long")


btn_more_mobile.addEventListener("click", click1)
function click1() {
    if (more_menu.style.display != "block") {
        more_menu.style.display = "block";
        img2.style.display = "none";
        img.style.display = "block"; 
    }else{
        more_menu.style.display = "none";
        img2.style.display = "block";
        img.style.display = "none"; 
    }
}