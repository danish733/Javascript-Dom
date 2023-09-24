let popup1 = document.getElementById("popup1")
let payProcess =document.getElementById("popup1-process")
let paySucess = document.getElementById("popup1-sucess")

function pay(){
    popup1.style.display = "block"
}
function payNow(){
    popup1.style.display = "none"
    payProcess.style.display = "block"
    setTimeout(()=>{
        payProcess.style.display = "none" 
        paySucess.style.display="block"
    },2000)
}

function ok(){
    paySucess.style.display="none"
}
