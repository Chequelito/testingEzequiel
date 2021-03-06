const generateManager = function (manager) {
  return `  <div class="col-md-3 mb-3 mt-5 ml-3">
  <div class="card text-white bg-warning">
  <div class="card-header">
    <h5 class="card-title">Manager</h5>
    <p class="card-text">${manager.name}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Id: ${manager.id}</li>
    <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
    <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
  </ul>
</div>
</div>
`;
};

const generateEngineer = function (engineer) {
  return `<div class="col-md-3 mb-3 mt-5 ml-3">
  <div class="card text-white bg-warning">  
  <div class="card-header">
    <h5 class="card-title">Engineer</h5>
    <p class="card-text">${engineer.name}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Id: ${engineer.id}</li>
    <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
    <li class="list-group-item">GitHub:<a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
  </ul>
</div>
</div>
`;
};

const generateIntern = function (intern) {
  return ` <div class="col-md-3 mb-3 mt-5 ml-3">
  <div class="card text-white bg-warning">
   <div class="card-header">
    <h5 class="card-title">Intern</h5>
    <p class="card-text">${intern.name}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Id: ${intern.id}</li>
    <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
    <li class="list-group-item">School: ${intern.school}</li>
  </ul>
</div>
</div>
`;
};



generateHTML = (data) => {
  pageArray = [];

  for (var i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();
    if (role === "Manager") {
      const managerCard = generateManager(employee);
      pageArray.push(managerCard);
    }
    if (role === "Engineer") {
      const engineerCard = generateEngineer(employee);
      pageArray.push(engineerCard);
    }
    if (role === "Intern") {
      const internCard = generateIntern(employee);
      pageArray.push(internCard);
    }
  }
  const employeeCards = pageArray.join(" ");
  const generateTeam = generateTeamPage(employeeCards);
  return generateTeam;
};


const generateTeamPage = function (employeeCards) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="./style.css" />
      <title>Employee Profiles</title>
    </head>
    <body>
      <header>
        <nav class="navbar navbar-dark bg-warning">
          <div class="container-fluid d-flex justify-content-center">
            <span class="navbar-brand m-5 h1">My Team</span>
          </div>
        </nav>
      </header>
      <main>
      <div class="container d-flex justify-content-center">
      <div class="row w-100">
      ${employeeCards}
      </div>
      </div>
      </main>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
      crossorigin="anonymous"
    ></script>
    <script src="../index.js"></script>
  </body>
</html>`;
};

module.exports = generateHTML;