class Form{
    constructor(){
      this.input = createInput("");
      this.button = createButton("PLAY");
      this.greeting= createElement("h3");
    }
hide(){
  this.input.hide();
  this.button.hide();
  this.greeting.hide();
}
display(){
  var title = createElement("h2");
  title.html("Car Racing Game");
  title.position(250,0);
 
  this.input.position(200,200);
  this.button.position(200,260);

  this.button.mousePressed(()=>{

this.input.hide();
this.button.hide();

player.name = this.input.value();
playerCount+=1;
player.index=playerCount
player.update();
player.updateCount(playerCount);

this.greeting.html("hello  "+player.name+" !!! and welcome to the game");
this.greeting.position(250,150);
  })   
  }
};


