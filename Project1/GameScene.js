/**
 * @author James Condon
 * C00207200
 * The game scene class which is a child of the scene class
 */
class GameScene extends Scene
{
/**
   * @param {title} string title of the MenuScene.
   * This construcor uses the keyword super to inherit from the Scene class
   */
  constructor(title)
  {
    super(title);
    this.player = new Player(0,250, 100,100);
    gameNs.playing = true;
    gameNs.move = false
  }

  initWorld()
  {
    console.log("Initialising Game World");
    document.addEventListener("keydown", this.keyDownHandler.bind(this));
    document.addEventListener("touchstart", this.onTouchStart, false);
    document.addEventListener("touchmove", this.onTouchMove, false);
	  document.addEventListener("touchend", this.onTouchEnd, false);
    this.update = this.update.bind(this);


  }

  update()
  {
    var canvas = document.getElementById('mycanvas');
		var ctx = canvas.getContext('2d');
    if (gameNs.move === true)
    {
      this.player.moveRight();
    }
    this.render();
    console.log(this.move)
		window.requestAnimationFrame(gameNs.game.update);
  }
/**
  * creates a canvas and context
  * changes the color of the background to purple
  * changes the font and the font size
  */
  render()
  {

    var canvas = document.createElement("mycanvas");
    var ctx = mycanvas.getContext("2d");
    ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
    document.body.style.background = "#987baa";
    this.player.render();
    ctx.font = '55px Arial';
    ctx.fillText(this.title, 10, 50);


  }

  keyDownHandler(e)
  {
    if (e.keyCode === 39)
    {
        this.player.moveRight();
    }
  }
  onTouchStart(e)
  {
     gameNs.move = true
	   this.touches = e.touches;
	   gameNs.startX = this.touches[0].clientX;
	   gameNs.startY = this.touches[0].clientY;

  }

  onTouchMove(e)
  {
	   this.touches = e.changedTouches;

	   gameNs.endX = this.touches[0].clientX;
	   gameNs.endY = this.touches[0].clientY;

	   gameNs.startX = this.touches[0].clientX;
	   gameNs.startY = this.touches[0].clientY;
  }

  onTouchEnd(e)
  {

	   gameNs.endX = this.touches[0].clientX;
 	   gameNs.endY = this.touches[0].clientY;

  }
}
