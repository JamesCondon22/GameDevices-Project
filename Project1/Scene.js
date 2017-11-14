/**
 * @author James Condon
 * C00207200
 * The scene class parent of the other scenes
 */
class Scene
{
  /**
   * @param {title} string
   * This is the constructor for the scene class
   * This sets the title to the scene
   */
  constructor(title)
  {
    this.title = title;
  }

  start()
  {

  }

  stop()
  {

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
    document.body.style.background = "#800";
    ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
    ctx.font = '48px serif';
    ctx.fillText(this.title, 10, 50);

  }
}
