/**
 * @author James Condon
 * @author Conor O'Toole
 * C00207200
 * The title scene class which is a child of the scene class
 */

class Instructions
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
    this.x = 650
    this.y = 200

    document.addEventListener("touchend", this.onTouchEnd.bind(this), false);
  }

  update()
  {
    if (this.checkCollisionBetween(gameNs.player.currentX, gameNs.player.currentY, 10,10))
    {
      gameNs.sceneManager.goToScene("Options")
      gameNs.sceneManager.render()

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


  }

}
