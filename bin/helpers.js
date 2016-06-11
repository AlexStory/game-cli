const chalk = require('chalk');


exports.getRoomByName = getRoomByName;
exports.getStartRoom = getStartRoom;
exports.getRoomFromPath = getRoomFromPath;
exports.setRooms = setRooms;
let game = {};
let rooms = {};

function setRooms(tgame){
    game = tgame;
    rooms = tgame.rooms;
}
function getRoomByName( name){
    return rooms.filter((x)=>{
        return x.name === name ;
    })[0] ;
}

function getStartRoom(){
    if(game.start){
        return getRoomByName(game.start);
    } else{
        return rooms[0] ;
    }
}

function getRoomFromPath(room, go){
    return rooms.filter((x) =>{
        return x.name === room.go[go];
    })[0];
}