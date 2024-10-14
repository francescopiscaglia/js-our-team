const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./assets/img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./assets/img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "./assets/img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./assets/img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./assets/img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./assets/img/female3.png"
  }
];


// seleziono l'elemento dalla DOM
const memberCardsEL = document.getElementById("member-cards");

// seleziono il form dalla DOM
const formEL = document.querySelector("form");
// console.log(formEL);

// ciclo all'interno dell'array per recuperare il singolo membro
for (let i = 0; i < teamMembers.length; i++) {

  // salvo il singolo membro all'interno di una costante
  const singleMember = teamMembers[i];

  // invoco la funzione per recuperare le proprietà del singolo oggetto
  const markup = getMemberCardMarkup(singleMember);

  // aggiungo il markup alla DOM
  memberCardsEL.insertAdjacentHTML("beforeend", markup);
};

// event listeners 
formEL.addEventListener("submit", function(e) {
  e.preventDefault();

  // salvo i valori degli input
  let name = document.getElementById("full-name").value;
  let email = document.getElementById("e-mail").value;
  let role = document.getElementById("role").value;

  const isValidInput = isValid(name, role);
 
  if (!isValidInput) {
    alert("Per favore inserisci dei dati validi");
    return;
  };
  
  // creo un nuovo oggetto con i dati nel nuovo membro
  const newMember = {
    name,
    role,
    email,
    img: "./assets/img/foto cv.JPG"
  };

  // richiamo la funzione per il markup
  const markup = getMemberCardMarkup(newMember);

  // aggiorno la DOM con il nuovo membro
  memberCardsEL.insertAdjacentHTML("beforeend", markup);

  formEL.reset();
});



// funzione per aggiungere il markup
function getMemberCardMarkup(member) {

  // destrutturo l'oggetto in tre constanti con le sue tre proprietà
  const {name, role, email, img} = member;

  // la funzione restituisce il markup che devo aggiungere alla DOM
  return`
    <div class="col-12 col-md-6 col-xl-4 mb-4">
      <div class="d-flex align-items-center bg-dark rounded">
        <div class="col-3">
          <img src="${img}" alt="" class="rounded">
        </div>
        <div class="col-9 ps-3 text-light">
          <h5 class="fw-bold">${name}</h5>
          <div>${role}</div>
          <a href="#" class="e-mail">${email}</a>
        </div>
      </div>
    </div>
  `;
};

function isValid(name, role) {

  if(name.length < 3 || role.length < 3) {
    return false;
  };

  return true;
};