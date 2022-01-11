const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'img/wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'img/angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'img/walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'img/angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'img/scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'img/barbara-ramos-graphic-designer.jpg',
  },
];

//facciamo una funziona che crea le card e le mette nel Dom
function creazioneCard( card ){
  document.getElementById("container").innerHTML +=
  `<div class="team-card">
    <div class="card-image">
      <img
        src="${card.image}"
        alt=""
      />
      </div>
      <div class="card-text">
        <h3>${card.name}</h3>
        <p>${card.role}</p>
        </div>
      </div>
      </div>
    `
}
//ciclo for che crea carte in base alla lunghezza dell array degli ogetti
for(let i=0; i < team.length; i++){
  creazioneCard( team[i] )
}

//variabile che prende in considerazione il buttone 
let inserisciPersona = document.getElementById("addMemberButton");


//Funzione che ti crea le nuove card in base a quello che scrivi nei campi del DOM
function creazioneCard2(){
  let nome = document.getElementById("name").value;
  let role = document.getElementById("role").value;
  let image = document.getElementById("image").value;
  
  let userCard = {
    name : nome,
    role : role,
    image : image,
  }
  
  document.getElementById("container").innerHTML +=
  `<div class="team-card">
    <div class="card-image">
      <img
        src="${userCard.image}"
        alt="${userCard.nome}"
      />
      </div>
      <div class="card-text">
        <h3>${userCard.nome}</h3>
        <p>${userCard.role}</p>
        </div>
      </div>
      </div>
    `
    //Pusha il nuovo oggetto nell array
    team.push(userCard)
    console.log(team)
    svuotaForm()
}

//funzione che al click ti crea le card
inserisciPersona.addEventListener("click", creazioneCard2);


function svuotaForm(){
  document.getElementById("name").value = "";
  document.getElementById("role").value = "";
  document.getElementById("image").value = "" ;
}