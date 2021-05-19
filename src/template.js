function generateManager(manager){}
function generateEngineer(engineer){}
function generateIntern(intern){}
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
}
}
function generatePage(data){
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    ${generateTeam(data)}
</body>
</html>`
}