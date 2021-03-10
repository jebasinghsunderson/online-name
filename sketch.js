
var canvas,database;
var gameState=0
var form,game,player;
var playerCount = 0;
var allPlayers;


function setup(){
    database=firebase.database()
        canvas = createCanvas(1000,500);
   game=new Game();
   game.getState();
   game.start();
   
}

function draw(){
    background("white");
    if(playerCount===4){
        game.update(1);

    }
    if(gameState===1){
        clear()
        game.play
    }
}
