class Game{
    constructor(){

    }
    getState(){
        var gameref=database.ref("gameState");
        gameref.on("value",function(data){
            gameState=data.val();
        });
    }
  update(state){
     database.ref("/").update({
     gameState:state
     });
     
  }
async start(){
  if(gameState===0){
     player=new Player();
     var playerCountref = await database.ref("playerCount").once("value")
      if(playerCountref.exists()){
 playerCount=playerCountref.val()
 player.getCount();
      }
    
     form=new Form();
     form.display();
    
}
}

play(){
 form.hide()    
 textSize(25)
text("Game has started",200,100)
Player.getPlayerInfo()
  
if(allPlayers !== undefined){
  var pos=130;
  pos=pos+20;
  for (var plr in allPlayers){

    if(plr==="player"+player.index)
      fill("red")

    else
      fill("black")
    
  }

  textSize(15)
  text(allPlayers[plr].name + ":  ", allPlayers[plr].distance,120,pos  )
}
if(keyDown(UP_ARROW)&& player.index !== null){
  player.distance+=50
  player.update(display)

}
}


    
}