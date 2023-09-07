// fill in javascript code here
let form = document.querySelector("form")
let name = document.getElementById("name")
let id = document.getElementById("docID")
let dept = document.getElementById("dept")
let exp = document.getElementById("exp")
let email = document.getElementById("email")
let mobile = document.getElementById("mbl")
let tbody = document.querySelector("tbody")

form.addEventListener("submit",function(e){
    e.preventDefault()

    let allTasks = []

    const data = {
        name:this.name.value,
        id: id.value,
        dept:dept.value,
        exp:exp.value,
        email:email.value,
        mobile:mobile.value,

    }
    allTasks.push(data)

    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    let td5 = document.createElement("td")
    let td6 = document.createElement("td")
    let td7 = document.createElement("td")
    let td8 = document.createElement("td")

    td1.innerText = data.name
    td2.innerText = data.id
    td3.innerText = data.dept
    td4.innerText = data.exp
    td5.innerText = data.email
    td6.innerText = data.mobile
    td8.innerText = "Delete"

    let role = Number(td4.innerText)
    if(role > 5){
        td7.innerText = "Senior"
    }
    else if(role>2 && role<5){
        td7.innerText = "Junior"
    }
    else if(role<=1){
        td7.innerText = "Freshers"
    }

    td8.addEventListener("click",function(){
        tbody.removeChild(tr)
    })



    tr.append(td1,td2,td3,td4,td5,td6,td7,td8)

    tbody.appendChild(tr)

    this.name.value = "";
    id.value = "";
    dept.value ="";
    exp.value = "";
    email.value = "";
    mobile.value = "";
})

