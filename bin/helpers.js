const game = require('./../game.json');
const rooms = game.rooms;

module.exports = {
    getRoomByName: getRoomByName,
    getStartRoom : getStartRoom
}

function getRoomByName(name){
    return rooms.filter((x)=>{
        return x.name === name ;
    })[0] ;
}

function getStartRoom(){
    if(game.start){
        return getRoomByName(game.start);
    }
    return rooms[0] ;
}