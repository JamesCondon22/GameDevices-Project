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
  constructor(title,width,height)
  {
    this.title = title
    gameNs.playing = false;
    this.width = width;
    this.height = height;
    this.imgPlay = new Image();
    this.imgPlay.src = "resources/buttonSpritePlay.png"
    this.imgOptions = new Image();
    this.imgOptions.src = "resources/buttonSpriteOptions.png"
    this.imgExit = new Image();
    this.imgExit.src = "resources/buttonSpriteExit.png"

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
    ctx.drawImage(this.imgPlay, 20, 10, this.width, this.height);
    ctx.drawImage(this.imgOptions, 20, 310, this.width, this.height);
    ctx.drawImage(this.imgExit, 20, 610, this.width, this.height);

  }


}
