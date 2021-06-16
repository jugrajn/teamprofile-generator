// ---------------Create a Function that renders Manager Card---------------
const renderManager = (manager) => {

    return `          
    <div class="col">
        <div id='teamCard' class="card">
            <h5>${manager.name}</h5>
            <h6>Manager</h6>
        </div>

        <div class='card'>
            <p>ID: ${manager.id}</p>
            <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p>Office Number:${manager.officeNumber}</p>
        </div>
    </div>`;
};



// ---------------Create a Function that renders Engineer Card---------------
const renderEngineer = (engineer) => {

    return `
    <div class="col">
        <div id='teamCard' class='card'>
            <h5>${engineer.name}</h5>
            <h6>Engineer</h6>
        </div>

        <div class='card'>
            <p>ID: ${engineer.id}</p>
            <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p>GitHub: <a href="https://github.com/${engineer.gitHub}" target="_blank" rel="noopener noreferrer">${engineer.gitHub}</a></p>
        </div>
    </div>`;
};


// ---------------Create a Function that renders Intern Card---------------
const renderIntern = (intern) => {

    return `
    <div class="col">
        <div id='teamCard' class='card'>
            <h5>${intern.name}</h5>
            <h6>Intern</h6>
        </div>

        <div class='card'>
            <p>ID: ${intern.id}</p>
            <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p>School:${intern.school}</p>
        </div>
    </div>`;
};

//Create function that takes all generated employee cards based on input that can be insterted into HTML file
const createTeam = (response) => {
    let theTeam = [];
   
}

// ---------------Create a function that renders general HTML Page---------------
const generateTeamProfile = () => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Benne&display=swap" rel="stylesheet">
    <style>

      h5, h6 {
        color: #fff;
        font-family: 'Benne', serif;
        font-weight: bold;
        padding-left: 5px;
      }

      h1 {
        font-family: 'Benne', serif;
        font-weight: bold;
      }

      #teamCard {
        background-image: linear-gradient(to bottom right, rgb(10, 85, 35), teal);
      }
    </style>

</head>
<body>

      <div class="container">

        <div class="row justify-content-center jumbotron">
          <div class="col-s12">
            <h1>Team Profile</h1>
          </div>
        </div>

        <div class="row justify-content-space-between">
        <!--INSERT TEAM CARD ELEMENTS HERE   -->
        ${}
        </div>

      </div>
</body>
</html>`;
};