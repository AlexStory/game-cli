# game-cli
node program to make text based adventure games

simply run game-cli <JSON file>
your JSON file needs:
 ##Name
 
 ##Description
 
 ##Rooms
  An array of all the rooms inyour game.
  Rooms must Have:
  ###Name
  ###Description
  ###Go
    an object each item is a key-value pair where if the user types "go [key]" they will end up on the room with the name [value]
  Rooms May Have:
  ###win
    a boolean, if true the game will play this rooms the description and end the game.
