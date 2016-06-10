const inquirer = require('inquirer');

let character = {};
let game = require('./../game.json');
const rooms = game.rooms;

const hasName = game.name || false;
const hasDescription = game.description || false;

hasName? console.log(`Welcome to ${game.name}`) : null;
hasDescription? console.log(game.description) : null;
runMainLoop();
function runMainLoop(room){
    if (!room){
        runMainLoop(getStartRoom());
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

function getStartRoom(){
    if(game.start){
        return getRoomByName(game.start);
    }
    return rooms[0] ;
}

function getRoomByName(name){
    return rooms.filter((x)=>{
        return x.name === name ;
    })[0] ;
}