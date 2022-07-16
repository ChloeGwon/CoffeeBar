let pay = document.querySelector('.pay');
const closePay = document.querySelector('.close-pay');
let payButton = document.querySelector('.pay-button2');
const paymentBlock = document.querySelector('.payment');



pay.addEventListener("click", ()=>{
    
    if(totPrice > 0){
        paymentBlock.style.display='flex';
    

    closePay.addEventListener('click',()=>{

        paymentBlock.style.display='none';
    
    });

    payButton.addEventListener("click", ()=>{
        paymentBlock.style.display='none';
    })

    }
});
