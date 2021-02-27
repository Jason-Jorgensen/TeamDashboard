const Engineer = require("./library/engineer");
const Intern = require("./library/intern");
const Manager = require("./library/manager");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const generateHTML = require("./library/generateHTML");


fs.writeFileSync("./output/team.html",generateHTML.main1())
console.log("Plese build your team");

function mgr() {

    inquirer.prompt([{
        type: "input",
        name: "managerName",
        message: "What is the team manager's name? ",
    },
    {
        type: "input",
        name: "managerId",
        message: "What is the team manager's id? ",
    }, {
        type: "input",
        name: "managerEmail",
        message: "What is the team manager's email? ",
    }, {
        type: "input",
        name: "managerOffice",
        message: "What is the team manager's office number? ",
    },
    ]).then((manager) => {
        let employee = new Manager(manager.managerName, manager.managerId, manager.managerEmail, manager.managerOffice);
        const generateCard = generateHTML.generateHTML(employee);
        
        fs.appendFile("./output/team.html",`\n${generateCard}`, (err) => {
            if (err) throw err;
        });
        newEmployee();
    });
}
mgr();


function newEmployee() {
    inquirer.prompt([{
        type: "list",
        name: "selectEmployee",
        message: "Which type of team member would you like to add? ",
        choices: ["Engineer", "Intern", "I don't want to add any more team members"],
    }]).then((selector) => {
        if (selector.selectEmployee == "Engineer") {
            inquirer.prompt([{
                type: "input",
                name: "engineerName",
                message: "What is your engineer's name? ",
            }, {
                type: "input",
                name: "engineerId",
                message: "What is your engineer's id? ",
            }, {
                type: "input",
                name: "engineerEmail",
                message: "What is your engineer's email? ",
            }, {
                type: "input",
                name: "engineerGithub",
                message: "What is your engineer's Github username? ",
            },]).then((response) => {
                let employee = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub);
                const generateCard = generateHTML.generateHTML(employee);
                
                fs.appendFile("./output/team.html",`\n${generateCard}`, (err) => {
                    if (err) throw err;
                });
                newEmployee();
            })} 
            
            else if (selector.selectEmployee == "Intern") {
            inquirer.prompt([{
                type: "input",
                name: "internName",
                message: "What is your intern's name? ",
            }, {
                type: "input",
                name: "internId",
                message: "What is your intern's id? ",
            }, {
                type: "input",
                name: "internEmail",
                message: "What is your intern's email? ",
            }, {
                type: "input",
                name: "internSchool",
                message: "What is your intern's school? ",
            },]).then((response) => {
                let employee = new Intern(response.internName, response.internId, response.internEmail, response.internSchool);
                const generateCard = generateHTML.generateHTML(employee);
                
                fs.appendFile("./output/team.html",`\n${generateCard}`, (err) => {
                    if (err) throw err;
                });
                newEmployee();
            })} 
        
            else {
                console.log("Finishing your Dashboard...")
                fs.appendFile("./output/team.html",`\n${generateHTML.main2()}`, (err) => {
                    if (err) throw err;
                });
            }
        })

   
    };
 