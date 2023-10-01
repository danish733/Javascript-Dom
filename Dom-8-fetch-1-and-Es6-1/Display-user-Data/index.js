let main = document.getElementById("main");
let flag = true;

function fetchData() {
  if (flag) {
    fetch("https://reqres.in/api/users")
      .then(function (resolve) {
        return resolve.json();
      })
      .then(function (response) {
        printData(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  flag = false;
  main.style.padding = "1.2rem"
  
}

function printData(data) {
  data.forEach(function (element) {
    let userCard = document.createElement("div");
    userCard.classList = "imgbox";

    let Img = document.createElement("img");
    Img.src = element.avatar;

    let Name = document.createElement("p");
    Name.textContent = `${element.first_name} ${element.last_name}`;

    let Id = document.createElement("p");
    Id.textContent = `ID: ${element.id}`;

    let Email = document.createElement("p");
    Email.textContent = element.email;

    userCard.append(Img, Name, Id, Email);
    main.append(userCard);
  });
}

