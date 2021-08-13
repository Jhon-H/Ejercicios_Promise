const API_URL = 'https://rickandmortyapi.com/api/character'
const IMG_PATH = `https://rickandmortyapi.com/api/character/avatar/`
const SEARCH_URL = 'https://rickandmortyapi.com/api/character/'

let formulario = document.querySelector(".search");
let main = document.querySelector("#main");

const getValues = async (url) =>{
  try{
    let resp = await fetch(url);
    let values = await resp.json();
    console.log(values.results);
    paint(values["results"]);
  }
  catch(error){
    alert(error);
  }
}

getValues(API_URL);

function paint(ryckys){
  main.innerHTML = "";
  ryckys.forEach(rycky => {
    let personaje = document.createElement("div");
    let val = rycky.status;
      
    personaje.classList.add("rycky");
    personaje.innerHTML = `
    <img src="${IMG_PATH + rycky.id + '.jpeg'}" alt="" class="img">
    <div class="info">
      <div class="div">
        <h2> ${rycky.name} </h2>
        <p><span class="circle" style=${status(val)}></span> ${rycky.status} - ${rycky.species}</p>
      </div>
      <div>
        <div class="ee">
          <p> Last known location: </p>
          <p> ${rycky.location.name} </p>
        </div>
        <div class="oo">
          <p> First seen in: </p>
          <p> ${rycky.origin.name} </p>
        </div>
      </div>
    </div>
    `

    main.appendChild(personaje);
  });
}

function status(val){
  if(val === "Alive") return "background-color:greenyellow;";
  if(val === "unknown") return "background-color:grey;";
  if(val === "Dead") return "background-color:tomato;";
}