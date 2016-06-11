const inquirer = require('inquirer');
let game = require('./../game.json');
const helpers = require('./helpers')

let character = {};


const hasName = game.name || false;
const hasDescription = game.description || false;

hasName? console.log(`Welcome to ${game.name}`) : null;
hasDescription? console.log(game.description) : null;
runMainLoop();

function runMainLoop(room){
    if (!room){
        runMainLoop(helpers.getStartRoom());
    } else {
        inquirer.prompt([{
            type : 'input',
            name : 'val',
            message : room.description
        }])
            .then(function(ans){
                let args = ans.val.trim().split(' ');
                console.log(args);
            });
    }
}



