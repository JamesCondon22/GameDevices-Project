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
    this.x = 650
    this.y = 10
    this.leftX = 100
    this.arrowY = 400
    this.rightX = 400
  }

  update()
  {
    if (this.checkCollisionBetween(gameNs.player.currentX, gameNs.player.currentY, 10,10))
    {
      gameNs.sceneManager.goToScene("Main Scene")
      gameNs.sceneManager.render()

    }
    if (this.checkCollisionBetweenLeft(gameNs.player.currentX, gameNs.player.currentY, 10,10))
    {
      //gameNs.sceneManager.goToScene("Main Scene")
      //gameNs.sceneManager.render()
      console.log("Left")

    }
    if (this.checkCollisionBetweenRight(gameNs.player.currentX, gameNs.player.currentY, 10,10))
    {
      //gameNs.sceneManager.goToScene("Main Scene")
      //gameNs.sceneManager.render()
      console.log("right")
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
    ctx.drawImage(this.imgBack, this.x, this.y, 280, 180);
    ctx.drawImage(this.imgRight, this.rightX, this.arrowY, 280, 180);
    ctx.drawImage(this.imgLeft, this.leftX, this.arrowY, 280, 180);

  }

}
