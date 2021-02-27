const index = require("../index")

function generateHTML(employee){
if (employee.getRole()=="Manager"){
return(
//manager
`<div class="card employee-card mr-2">
    <div class="card-header">
        <h2 class="card-title">${employee.name}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${employee.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${employee.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
            <li class="list-group-item">Office number: ${employee.officeNumber}</li>
        </ul>
    </div>
</div>`
);}

else if (employee.getRole()=="Engineer"){
return(
//engineer    
`<div class='card employee-card mr-2'>
    <div class='card-header'>
        <h2 class='card-title'>${employee.name}</h2>
        <h3 class='card-title'><i class='fas fa-glasses mr-2'></i>${employee.getRole()}</h3>
    </div>
    <div class='card-body'>
        <ul class='list-group'>
            <li class='list-group-item'>ID: ${employee.id}</li>
            <li class='list-group-item'>Email: <a href='mailto:${employee.email}'>${employee.email}</a></li>
            <li class='list-group-item'>GitHub: <a href='https://github.com/${employee.github}' target='_blank' rel='noopener noreferrer'>${employee.github}</a></li>
        </ul>
    </div>
</div>`
);
}

else if (employee.getRole()=="Intern"){
return(
//intern
`<div class="card employee-card mr-2">
    <div class="card-header">
        <h2 class="card-title">${employee.name}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${employee.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${employee.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
            <li class="list-group-item">School: ${employee.school}</li>
        </ul>
    </div>
</div>`

);
}
}

function main1(){
    return(
    `<!doctype html>
<html lang="en">
  <head>
    <title>Team Dashboard</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    
  </head>
  <body style="background-color:lightblue;">
    
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">

`)
}; 

function main2 () {
    return(`
    </div>
    </div>
</div>
<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<!-- Bootstrap CSS -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<script src="https://kit.fontawesome.com/c502137733.js"></script>
</body>
</html>
`)
};



module.exports.generateHTML = generateHTML;
module.exports.main1 = main1;
module.exports.main2 = main2;