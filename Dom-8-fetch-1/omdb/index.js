let display = document.getElementById("hero-section")
let input = document.querySelector("input")
let flag = true
display.style.visibility="hidden"

function fetchData(){
   fetch(`http://www.omdbapi.com/?apikey=dd3890bf&s=${input.value}`)
   .then((response) =>{
    return response.json()
   })
   .then((data) =>{
    display_movies(data.Search)
   })
   .catch((err) =>{
    display.textContent ="Error"
   })

   display.style.visibility="visible"
   display.innerHTML =""
}


function display_movies(data){
    data.forEach((element) => {
        console.log(element)
        let card = document.createElement("div")
        card.className = "container"

        let img = document.createElement("img")
        img.src = element.Poster

        let title = document.createElement("p");
        title.textContent = `Title:- ${element.Title}`;

        let year = document.createElement("p");
        year.textContent =  `Year:- ${element.Year}`;

        let id = document.createElement("p");
        id.textContent = `ID:- ${element.imdbID}`;

        let type = document.createElement("p");
        type.textContent =  `Type:- ${element.Type}`;

        card.append(img,title,year,id,type)
        display.append(card)
        
    });
}