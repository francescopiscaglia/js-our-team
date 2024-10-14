const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];








function getMemberCardMarkup(member) {

  const {name, role, email, image} = member;


  return`
    <div class="col-12 col-md-6 mb-4">
      <div class="d-flex align-items-center bg-dark">
          <div class="col-3">
              <img src="${image}" alt="">
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