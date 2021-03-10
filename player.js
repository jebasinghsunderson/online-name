class Player{
    constructor(){
      this.name=null
      this.index=null
      this.distance=0
    }
    getCount(){
        var playerRef = database.ref("playerCount")
        playerRef.on("value",function(data){
            playerCount=data.val()
        });
    
    }
    updateCount(count){
        database.ref("/").update({
          playerCount:count
        
        });
    }
    update(name){
   var playerindex="players/player"+this.index
   database.ref(playerindex).set({
     name:this.name,
     distance:this.distance 
   });       
   
    }
static getPlayerInfo(){
      var playerInforef=database.ref("players")
      playerInforef.on("value",(data)=>{
        allPlayers=data.val()
      })
    }

    
};