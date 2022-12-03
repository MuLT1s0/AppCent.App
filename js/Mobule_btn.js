const btn_more_mobile = document.getElementById("Btn_mobile")
const more_menu = document.querySelector(".block_button")


btn_more_mobile.addEventListener("click", click1)
function click1() {
    if (more_menu.style.display != "block") {
        more_menu.style.display = "block";
    }else{
        more_menu.style.display = "none";
    }
}