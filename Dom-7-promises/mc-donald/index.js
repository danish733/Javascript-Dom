let additem = document.querySelectorAll("#food-list div button")
let foodname = document.querySelectorAll("h3")
let cartAdd = document.getElementById("cart-add")
let store = document.querySelector("#order-store h2")

let orders = false


let arr = []
for(let i=0;i<additem.length;i++){
    additem[i].addEventListener("click",function(){
        arr =[]
        arr.push(foodname[i].innerText)
        let cartItem = document.createElement("li");
        cartItem.style.fontSize="2rem"
        cartItem.textContent = arr[0]; 
        cartAdd.appendChild(cartItem)
        console.log(cartAdd)
        orders=true
        
    })
}

function order() {
if(orders){
    store.innerText = "Your Order is Processing..."
    store.style.backgroundColor = "#AE445A"
    let mypromise = new Promise(function(res,rej){
        setTimeout(()=>{
            store.innerText = "Your Order is Completed"
            store.style.backgroundColor = "#F78CA2"
        },Math.floor(Math.random() * 3001) + 1000)
    })
}

}