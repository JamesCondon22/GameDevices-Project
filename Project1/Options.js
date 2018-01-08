/**
 * @author James Condon
 * @author Conor O'Toole
 * C00207200
 * The title scene class which is a child of the scene class
 */

class Options
{
/**
  * @param {title} string title of the MenuScene.
  * This construcor uses the keyword super to inherit from the Scene class
  */
  constructor(title,load)
  {
    this.title = title
    this.imgBack = new Image();
    this.imgBack.src = load['BackImg']
    this.imgLeft = new Image();
    this.imgLeft.src = load['LeftArrowImg']
    this.imgRight = new Image();
    this.imgRight.src = load['RightArrowImg']
    this.imgInstruct = new Image();
    this.imgInstruct.src = load['InstructionsImg']
    this.instructX = 100
    this.instructY = 700
    this.x = 650
    this.y = 10
    this.leftX = 100
    this.arrowY = 400
    this.rightX = 450
    this.pressed = false
    document.addEventListener("touchend", this.onTouchEnd.bind(this), false);
  }
  onTouchEnd(e)
  {
     var touches = e.touches
	   this.endX = touches.clientX;
 	   this.endY = touches.clientY;
    this.pressed = false
  }
  update()
  {
    if (this.checkCollisionBetween(gameNs.player.currentX, gameNs.player.currentY, 10,10))
    {
      gameNs.sceneManager.goToScene("Main Scene")
      gameNs.sceneManager.render()

    }

    if (this.checkCollisionBetweenInstruct(gameNs.player.currentX, gameNs.player.currentY, 10,10))
    {


    }
    if (this.checkCollisionBetweenLeft(gameNs.player.currentX, gameNs.player.currentY, 10,10) && this.pressed === false)
    {

      if (gameNs.volume > 0.1)
      {
        gameNs.volume -= .05
          this.pressed = true
        console.log(gameNs.volume)
      }
    }
    if (this.checkCollisionBetweenRight(gameNs.player.currentX, gameNs.player.currentY, 10,10) && this.pressed === false)
    {

      if (gameNs.volume < 0.9)
      {
        gameNs.volume += .05
        this.pressed = true
        console.log(gameNs.volume)
      }
    }
    //console.log(gameNs.player.currentX + ", " +  gameNs.player.currentY)
  }

  checkCollisionBetween(x,y,width,height)
  {
   var collides = false;

   if ((this.x < x + width) &&
       (this.x + 280 > x) &&
       (this.y + 180 > y) &&
       (this.y < y + height))
   {
     collides = true;
   }
   return collides;
 }

 checkCollisionBetweenInstruct(x,y,width,height)
 {
  var collides = false;

  if ((this.instructX < x + width) &&
      (this.instructX + 700 > x) &&
      (this.instructY + 200 > y) &&
      (this.instructY < y + height))
  {
    collides = true;
  }
  return collides;
}

 checkCollisionBetweenLeft(x,y,width,height)
 {
  var collides = false;

  if ((this.leftX < x + width) &&
      (this.leftX + 280 > x) &&
      (this.arrowY + 180 > y) &&
      (this.arrowY < y + height))
  {
    collides = true;
  }
  return collides;
 }

 checkCollisionBetweenRight(x,y,width,height)
 {
  var collides = false;

  if ((this.rightX < x + width) &&
      (this.rightX + 280 > x) &&
      (this.arrowY + 180 > y) &&
      (this.arrowY < y + height))
  {
    collides = true;
  }
  return collides;
 }
  render()
  {
    var canvas = document.createElement("mycanvas");
    var ctx = mycanvas.getContext("2d");
    document.body.style.background = "#800";
    ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
    ctx.font = '100px serif'; //48
    //ctx.fillText(this.title, 30, 80);
    //gameNs.scenetitle = this.title;
    ctx.fillText("Volume", 250,350);
    ctx.drawImage(this.imgBack, this.x, this.y, 280, 180);
    ctx.drawImage(this.imgRight, this.rightX, this.arrowY, 280, 180);
    ctx.drawImage(this.imgLeft, this.leftX, this.arrowY, 280, 180);
    ctx.drawImage(this.imgInstruct, this.instructX, this.instructY, 700, 200);

  }

}
