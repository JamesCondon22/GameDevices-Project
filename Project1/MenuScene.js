/**
 * @author James Condon
 * C00207200
 * The game scene class which is a child of the scene class
 */
class MenuScene
{
/**
  * @param {title} string title of the MenuScene.
  * This construcor uses the keyword super to inherit from the Scene class
  */
  constructor(title,width,height,load)
  {
    this.title = title
    gameNs.playing = true;
    this.width = width;
    this.height = height;
    this.imgPlay = new Image();
    this.imgPlay.src = load['PlayBtn']
    this.imgOptions = new Image();
    this.imgOptions.src = load['OptionBtn']
    this.imgExit = new Image();
    this.imgExit.src = load['ExitBtn']
    this.playY = 200
    this.optionsY = 650
    this.exitY = 1100
    this.x = 70
  }


  update()
  {
    if (this.checkCollisionBetween(gameNs.player.currentX, gameNs.player.currentY, 10,10))
    {
      gameNs.sceneManager.goToScene('Game Scene')
      gameNs.sceneManager.render()
      console.log("touched")
    }
    if (this.checkCollisionBetweenOptions(gameNs.player.currentX, gameNs.player.currentY, 10,10))
    {
      gameNs.sceneManager.goToScene('Options')
      gameNs.sceneManager.render()
      console.log("touched")
    }
    if (this.checkCollisionBetweenExit(gameNs.player.currentX, gameNs.player.currentY, 10,10))
    {
      gameNs.sceneManager.goToScene('Game Scene')
      gameNs.sceneManager.render()
      console.log("touched")
    }
  }

  checkCollisionBetween(x,y,width,height)
  {
   var collides = false;

   if ((this.x < x + width) &&
       (this.x + this.width > x) &&
       (this.playY + this.height > y) &&
       (this.playY < y + height))
   {
     collides = true;
   }
   return collides;
 }
 checkCollisionBetweenOptions(x,y,width,height)
 {
  var collides = false;

  if ((this.x < x + width) &&
      (this.x + this.width > x) &&
      (this.optionsY + this.height > y) &&
      (this.optionsY < y + height))
  {
    collides = true;
  }
  return collides;
}
checkCollisionBetweenExit(x,y,width,height)
{
 var collides = false;

 if ((this.x < x + width) &&
     (this.x + this.width > x) &&
     (this.exitY + this.height > y) &&
     (this.exitY < y + height))
 {
   collides = true;
 }
 return collides;
}

/**
  * creates a canvas and context
  * changes the color of the background to green
  * changes the font and the font size
  */
  render()
  {
    var canvas = document.createElement("mycanvas");
    var ctx = mycanvas.getContext("2d");
    ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
    document.body.style.background = "#0C8100";
    ctx.font = '35px Corbel';
    ctx.drawImage(this.imgPlay, 70, this.playY, this.width, this.height);
    ctx.drawImage(this.imgOptions, 70, this.optionsY, this.width, this.height);
    ctx.drawImage(this.imgExit, 70, this.exitY, this.width, this.height);
    //document.addEventListener("touchstart", this.onTouchStart.bind(this), false);
    //this.collisionPlay();
  }

 //onTouchStart(e)
 //{
   //console.log("touchStart");
  // gameNs.touches = e.touches;
  // gameNs.startX = gameNs.touches[0].clientX;
  // gameNs.startY = gameNs.touches[0].clientY;

   //gameNs.sceneManager.changeScene("Game Scene");

//   if (20 > gameNs.startX && 20 < gameNs.startX + this.width)
  // {
  //   console.log("play Collision X");
  //   if (this.imgPlay.x > gameNs.startY && this.imgPlay.y < gameNs.startY + this.height)
  //   {
       //console.log("play Collision Y");
       //gameNs.sceneManager.goToScene("Game Scene");
  //   }
  // }
// }


 collisionPlay()
 {

   if (this.imgPlay.x > gameNs.startX && this.imgPlay.x < gameNs.startX + this.width)
   {
     if (this.imgPlay.x > gameNs.startY && this.imgPlay.y < gameNs.startY + this.height)
     {
       console.log("play Collision");
       gameNs.sceneManager.goToScene("Game Scene");
     }
   }
 }

}
