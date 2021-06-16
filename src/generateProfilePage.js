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
            <p>Email: <a href="${manager.email}">${manager.email}</a></p>
            <p>Office Number:${manager.officeNumber}</p>
        </div>
    </div>`;
};



// ---------------Create a Function that renders Engineer Card---------------
const renderEngineer = (engineer) => {
    return ``;
};


// ---------------Create a Function that renders Intern Card---------------
const renderIntern = (intern) => {
    return ``;
};


// ---------------Create a function that renders general HTML Page---------------
const generateTeamProfile = () => {
    return ``;
};