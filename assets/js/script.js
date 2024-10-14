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
// console.log(memberCardsEL);

// ciclo all'interno dell'array per recuperare il singolo membro
for (let i = 0; i < teamMembers.length; i++) {

  // salvo il singolo membro all'interno di una costante
  const singleMember = teamMembers[i];

  // invoco la funzione per recuperare le proprietà del singolo oggetto
  const markup = getMemberCardMarkup(singleMember);
  console.log(markup);

  // aggiungo il markup alla DOM
  memberCardsEL.insertAdjacentHTML("beforeend", markup);
};



function getMemberCardMarkup(member) {

  // destrutturo l'oggetto in tre constanti con le sue tre proprietà
  const {name, role, email, img} = member;

  // la funzione restituisce il markup che devo aggiungere alla DOM
  return`
    <div class="col-12 col-md-6 col-xl-4 mb-4">
      <div class="d-flex align-items-center bg-dark">
        <div class="col-3">
          <img src="${img}" alt="" class="">
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