const popUp = document.getElementById('popUp');
const close = document.querySelector('.close');
const subscribeBtn = document.querySelector('.subscribeBtn');
let subscribe = document.getElementsByClassName('subscribe')[0];
console.log(subscribe);

subscribe.addEventListener("click", function(){
    

    popUp.style.display="block";

   

subscribeBtn.addEventListener("click", () => {
    var email = document.querySelector('#email').value;
    if (email == '') {
        document.querySelector('#required').style.visibility = "visible";
    }
})


close.addEventListener("click", () => {
    popUp.style.display = "none";
})
})

