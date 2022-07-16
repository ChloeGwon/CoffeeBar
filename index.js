const popUp = document.getElementById('popUp');
const close = document.querySelector('.close');
const subscribeBtn = document.querySelector('.subscribeBtn');
let subscribe = document.getElementsByClassName('subscribe')[0];
const noOfOrders = document.getElementsByClassName('numbers')[0];
let newSpan = document.querySelectorAll('.addItem');


const coffeeName = document.querySelector(".section-coffee-name");
const coffeePrice = document.querySelector(".section-coffee-price");
const coffeeSection = document.querySelector(".master-section");
const orders = document.querySelector(".orders");
const example = document.querySelector(".example");






console.log(noOfOrders);

let coffeeChoosen=[];

let itemProduct = [
    {
        id:1,
        name: "Espresson",
        price: 2.6
    },
    {
        id:2,
        name: "Macchiato",
        price: 3.6
    },
    {
        id:3,
        name: "Cortado",
        price: 2.4
    },
    {
        id:4,
        name: "Cold Brew",
        price: 5.6
    },
    {
        id:5,
        name: "Flat White",
        price: 2.2
    },
    {
        id:6,
        name: "Cappuccino",
        price: 2.6
    },
    {
        id:7,
        name: "Hot Chocolate",
        price: 4.4
    },
    {
        id:8,
        name: "Chai Tea Latte",
        price: 4.3
    },
    {
        id:9,
        name: "Matcha Latte",
        price: 1.7
    },
    {
        id:10,
        name: "Mocha",
        price: 3.4
    },
    {
        id:11,
        name: "Assam",
        price: 3.2
    },
    {
        id:12,
        name: "Darjeeling",
        price: 2.8
    },
    {
        id:13,
        name: "Earl Grey",
        price: 4.5
    },
    {
        id:14,
        name: "Premium Green",
        price: 5.6
    },
    {
        id:15,
        name: "Genmai Cha",
        price: 2.2
    },
    {
        id:16,
        name: "Fresh Mint",
        price: 1.6
    },
    {
        id:17,
        name: "Oolong Tea",
        price: 2.1
    },
    {
        id:18,
        name: "Chamomile Lemongrass Tea",
        price: 2.3
    },
    {
        id:19,
        name: "Herbal Tea",
        price: 1.6
    },
    {
        id:20,
        name: "Yerba Mate & Guayusa",
        price: 2.9
    }
];
let i =0;

newSpan.forEach((item, index)=>{
    item.addEventListener("click", ()=>{
        
       
        coffeeChoosen[i++] = itemProduct[index];
     
        noOfOrders.style.display = 'inline';
        noOfOrders.innerHTML=i;

        
    
    })

     

})

var sizes, sizeS, sizeM, sizeL;



// sizeL.addEventListener("click", ()=>{

// })

const newList =[];
let totPrice=0;

orders.addEventListener("click", ()=>{

    
    

    coffeeChoosen.forEach((item, index)=>{

       
        
        totPrice = coffeeChoosen[index].price;
 
        var div = document.createElement("div");
        var div2 = document.createElement("div");
        var div3 = document.createElement("div");

         sizes = document.createElement("div");
        sizeS = document.createElement("div");
         sizeM = document.createElement("div");
        sizeL = document.createElement("div");

       

        sizeS.classList.add("size");
        sizeM.classList.add("size");
        sizeL.classList.add("size");

        sizes.classList.add("sizes");


        sizeS.innerHTML="S";
        sizeM.innerHTML="M";
        sizeL.innerHTML="L";
        sizes.append(sizeS);
        sizes.append(sizeM);
        sizes.append(sizeL);




        var img = document.createElement("img");
    
        var h1 = document.createElement("h1");
        var h2 = document.createElement("h2");
        

    
    
        div.style.display='flex';
    
        div2.style.width='90%';
        div3.style.width='90%';
    
        div2.style.display='flex';
        div2.style.alignItems='center';
        div2.style.flexDirection='column';
    
        img.src='img/med cup.png';
        img.classList.add("cup-size");

        img.style.width="180px";
        img.style.height="280px";
        div2.append(img);
    
        h1.innerHTML=item.name;
        h2.innerHTML="$"+item.price;
        
    
        h1.style.fontWeight="800";
        h1.style.fontSize="2em";
    
        h2.style.fontWeight="300";
        h2.style.fontSize="1.5em";
    
        
        div3.append(h1);
        div3.append(h2);
        div3.append(sizes)
    
        div.appendChild(div2);
        div.appendChild(div3);
    
    
        coffeeSection.append(div);


        sizeL.addEventListener("click", ()=>{
            
            h2.innerHTML="$ " + (coffeeChoosen[index].price+1);
            // price= coffeeChoosen[index].price+1; 
            totPrice +=1;  
             displayPrice(totPrice);       
            
        })

        sizeS.addEventListener("click", ()=>{
            h2.innerHTML="$ " + (coffeeChoosen[index].price-1); 
          
            totPrice =totPrice -1;  
            displayPrice(totPrice);       

        })

        sizeM.addEventListener("click", ()=>{
            h2.innerHTML="$ " +coffeeChoosen[index].price; 
            // price= coffeeChoosen[index].price; 
            displayPrice(totPrice);           
        });

        
   
        displayPrice(totPrice);           
        

    })

})

function displayPrice(totPrice){
    example.innerHTML="Total: $ "+totPrice;
    
}




 














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






