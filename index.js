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
});



const items= [
    {
        id:1,
        name:"Air Force",
        price: 119,
        
    },

    {
        id:2,
        title:"Jordan",
        price: 149,
        
    },

    {
        id:3,
        title:"Blazer",
        price: 109,
       
    }
   

];

const wrapper = document.querySelector(".specialWrapper");
let index=1;
function amination(){
    
    wrapper.style.transform=`translateX(${-100*index}vw)`;
    index++;
    if(index==3){
        index=0;
    }
}

let start = setInterval(amination, 3000);


{/* <div class="productWrapper">
<div class="eachProduct">
    <div class="productImage"></div> 
    <h4 class="productName"></h4>
    <p class="productPrice"></p>
</div>
</div> */}

