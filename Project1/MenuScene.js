/**
 * @author James Condon
 * C00207200
 * The game scene class which is a child of the scene class
 */
class MenuScene extends Scene
{
/**
  * @param {title} string title of the MenuScene.
  * This construcor uses the keyword super to inherit from the Scene class
  */
  constructor(title)
  {
    super(title);
    gameNs.playing = false;
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
    ctx.font = '65px Corbel';
    ctx.fillText(this.title, 10, 50);
  }


}