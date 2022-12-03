const Online_tablo = document.querySelector(".Online_tablo")

var a = 73
var b = 0
Online_tablo.innerHTML=  a
Time()
function Time() {
    Times()
    setInterval(() => {
        getRandomInt(100)
        function getRandomInt(max) {
            a = Math.floor(Math.random() * max); 
            Online_tablo.innerHTML=  a
            return
        }
        return
    }, 10000);
}
function Times() {
    if (b == 10){
        b = 0 
        Times()
    }
    else{
        setTimeout(() => {
            b = b + 1
            console.log(b)
            Times()
        }, 1000);
    }
}   