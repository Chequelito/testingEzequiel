function generateManager(manager){
    return `
    <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${manager.getName()}/h5>
    <p class="card-text">${manager.getRole()}</p>
  </div>  
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${manager.getId()}</li>
    <li class="list-group-item">${manager.getEmail()}</li>
    <li class="list-group-item"></li>
  </ul></div>`

}
function generateEngineer(engineer){
return `
    <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${engineer.getName()}</h5>
    <p class="card-text">${engineer.getRole()}</p>
  </div>  
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${engineer.getId()}</li>
    <li class="list-group-item">${engineer.getEmail()}</li>
    <li class="list-group-item"></li>
  </ul></div>`
}
function generateIntern(intern){
    return `
    <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${intern.getName()}</h5>
    <p class="card-text">${intern.getRole()}</p>
  </div>  
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${intern.getId()}</li>
    <li class="list-group-item">${intern.getEmail()}</li>
    <li class="list-group-item">${intern.getSchool}</li>
  </ul></div>`

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
    return teamCards.join(" ")
}
return generateTeam;
}

function generatePage(data){
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<header><div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">My Team</h1>
    
  </div>
</div></header>
<body>
  ${generateTeam(data)}
</body>
</html>`
}

module.exports = generatePage;