function generateManager(manager){
    return ` <div><h1>${manager.getName()}</h1>
    <h3>${manager.getId()}</h3>
    ${manager.getEmail()}
    <h3>${manager.getRole()}</div></div>`

}
function generateEngineer(engineer){
return ` <div><h1>${engineer.getName()}</h1>
    <h3>${engineer.getId()}</h3>
    ${engineer.getEmail()}
    <h3>${engineer.getRole()}</div></div>`
}
function generateIntern(intern){
    return ` <div><h1>${intern.getName()}</h1>
    <h3>${intern.getId()}</h3>
    ${intern.getEmail()}
    <h3>${intern.getRole()}</div></div>`

}
function generateTeam(data){
    var teamCards = []
for (i=0; i<data.length; i++) {
    if(data[i].getRole() === "Manager") {
        teamCards.push(generateManager(data[i]))
    }
    if(data[i].getRole() === "Intern") {
        teamCards.push(generateIntern(data[i]))
    }
    if(data[i].getRole() === "Engineer") {
        teamCards.push(generateEngineer(data[i]))

    }
    return teamCards.join("")
}
}
function generatePage(data){
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
        <nav class="navbar navbar-dark bg-dark">
          <div class="container-fluid d-flex justify-content-center">
            <span class="navbar-brand m-5 h1">My Team</span>
          </div>
        </nav>
      </header>
      <main>
      ${generateTeam(data)}
      </main>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
      crossorigin="anonymous"
    ></script>
    <script src="../index.js"></script>
  </body>
</html>`
}

module.exports = generatePage