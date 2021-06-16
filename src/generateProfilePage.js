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
    `;
};