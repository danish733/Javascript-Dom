let form = document.querySelector("form");
let names = document.getElementById("name");
let age = document.getElementById("age");
let tbody = document.querySelector("tbody");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (names.value && age.value) {
    localStorage.setItem(names.value, age.value);
    console.log(localStorage);

    names.value = "";
    age.value = "";
  } else {
    alert("Enter Both value Name and Age");
  }
});

function retrieve() {
  tbody.innerHTML = "";

  if (localStorage.length === 0) {
    alert("Please  Fill And Submit Data, Because Local Storage Is Empty Now");
  } else {
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let value = localStorage.getItem(key);

      let tr = document.createElement("tr");
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");
      let td3 = document.createElement("td");

      td1.innerText = key;
      td2.innerText = value;
      td3.innerText = "Remove Item";

      tr.append(td1, td2, td3);
      tbody.appendChild(tr);

      td3.addEventListener("click", function () {
        localStorage.removeItem(key)
        tbody.removeChild(tr);
      });
    }
  }
}

function clearAll() {
  localStorage.clear();
  tbody.innerHTML="";
}
