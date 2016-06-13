#!/usr/bin/env node

const fs = require('fs');
const helpers = require('./helpers');
const rl = require('readline-sync');
const chalk = require('chalk');

let character = {};

//let game = JSON.parse(fs.readFileSync(process.argv[2]));
let game = require('../' + process.argv[2]);
helpers.setRooms(game);

const hasName = game.name || false;
const hasDescription = game.description || false;

hasName? console.log(`Welcome to ${game.name}`) : null;
hasDescription? console.log(game.description) : null;
runMainLoop();


function runMainLoop(room, options){
    if (!room){
        runMainLoop(helpers.getStartRoom(game));
    } else if(room.win === true) {
        console.log(chalk.bold.green(room.description))
    } else {
        AskQuestion(room, options)
    };
    
}

function processAnswer(room, answer){
    let args = answer.toLowerCase().trim().split(' ');
    if(args[0] === 'go' && args.length == 2){
        var roomToGo = helpers.getRoomFromPath( room, args[1]);
        roomToGo? runMainLoop(roomToGo) :runMainLoop(room, {premessage: 'You Can\'t go that way'});
    }
}

function AskQuestion(room, options) {
    options = options || {};
    var answer = rl.question(chalk.bold.green([options.premessage, room.description + "\n", '> '].join('\n')));
    processAnswer(room, answer);
}

