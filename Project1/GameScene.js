/**
 * @author James Condon
 * C00207200
 * The game scene class which is a child of the scene class
 */
class GameScene
{
/**
   * @param {title} string title of the MenuScene.
   * This construcor uses the keyword super to inherit from the Scene class
   */
  constructor(title)
  {
    this.title = title
    this.player = new Player(0,250, 60,100);
    gameNs.customer = new Customer(0,700,20,20)
    gameNs.table = [4]
    gameNs.table[0]= new Table(100,200,125,50);
    gameNs.table[1]= new Table(300,200,125,50);
    gameNs.table[2]= new Table(100,500,125,50);
    gameNs.table[3]= new Table(300,500,125,50);
    gameNs.service = new ServiceTable(25,50,200,50);
    gameNs.washing = new CleaningTable(275,50,200,50);
    gameNs.playing = true;
    gameNs.move = false
  }

  movePlayer(e){
    console.log("touching")
    gameNs.move = true
  }

  initWorld()
  {
    console.log("Initialising Game World");
    document.addEventListener("keydown", this.keyDownHandler.bind(this));
    document.addEventListener("touchstart", this.onTouchStart.bind(this), false);
    document.addEventListener("touchmove", this.onTouchMove.bind(this), false);
	  document.addEventListener("touchend", this.onTouchEnd, false);
    this.update = this.update.bind(this);


  }

  update()
  {
    var canvas = document.getElementById('mycanvas');
		var ctx = canvas.getContext('2d');
    //for (var i = 0; i < 4; i++)
    //{
      //if (this.player.checkCollision(gameNs.table[i]))
      //{
      //  this.player.moveRight
    //  }
    //}

    if (gameNs.move === true){
      this.player.moveRight()
    }

    this.render();

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
    gameNs.customer.render()
    for (var i = 0; i < 4; i++)
    {
      gameNs.table[i].render();
    }

    gameNs.service.render();
    gameNs.washing.render();
    this.player.render();
    ctx.font = '55px Arial';


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
	   gameNs.touches = e.touches;

	   gameNs.startX = gameNs.touches[0].clientX;
	   gameNs.startY = gameNs.touches[0].clientY;
  }
  onTouchMove(e)
  {
	   gameNs.touches = e.changedTouches;

	   gameNs.endX = gameNs.touches[0].clientX;
	   gameNs.endY = gameNs.touches[0].clientY;
     if(gameNs.customer.detectHit(gameNs.px, gameNs.py, gameNs.startX, gameNs.startY, gameNs.width, gameNs.height) )
     {

        gameNs.px = gameNs.endX;
        gameNs.py = gameNs.endY;
      }
	   gameNs.startX = gameNs.touches[0].clientX;
	   gameNs.startY = gameNs.touches[0].clientY;
  }

  onTouchEnd(e)
  {
    for (var i = 0; i < 4; i++)
    {
      if(gameNs.table[i].detectHit(gameNs.table[i].x, gameNs.table[i].y, gameNs.startX, gameNs.startY, gameNs.table[i].width, gameNs.table[i].height)&& gameNs.sceneManager.getScene() == "Game Scene") {
         // Assign new coordinates to our object
         gameNs.move = true
       }
    }

	   gameNs.endX = gameNs.touches[0].clientX;
 	   gameNs.endY = gameNs.touches[0].clientY;
  }




}
