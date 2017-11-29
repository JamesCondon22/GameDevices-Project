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
    this.player = new Player(0,250, 20,20);
    gameNs.customer = new Customer(0,700,20,20)
    gameNs.playing = true;
    gameNs.move = false
  }
  createDiv10(divId10)
  {
    var div = document.createElement("div");
	  div.id = divId10;
	  //div.innerHTML = '<img src=\'resources/floor.jpg\'>';
    div.style.position = "absolute";
    div.style.left = 0 + "px";
    div.style.top = 0 + "px";
	  document.body.appendChild(div);
  }

  createDiv4(divId4)
  {
    var div = document.createElement("div");
	  div.id = divId4;
	  div.innerHTML = '<img src=\'resources/tableCustomer.png\'>';
    div.style.position = "absolute";
    div.style.left = 100 + "px";
    div.style.top = 300 + "px";
    div.addEventListener("touchstart", this.movePlayer);
	  //gameNs.div4.addEventListener("touchstart", this.changeScene);
	  document.body.appendChild(div);
  }
  createDiv5(divId5)
  {
     var div = document.createElement("div");
	   div.id = divId5;
	   div.innerHTML = '<img src=\'resources/tableCustomer.png\'>';
     div.style.position = "absolute";
     div.style.left = 100 + "px";
     div.style.top = 500 + "px";
	   div.addEventListener("touchstart", this.movePlayer);
	   document.body.appendChild(div);
  }
  createDiv6(divId6)
  {
    var div = document.createElement("div");
    div.id = divId6;
    div.innerHTML = '<img src=\'resources/tableCustomer.png\'>';
    div.style.position = "absolute";
    div.style.left = 300 + "px";
    div.style.top = 500 + "px";
    div.addEventListener("touchstart", this.movePlayer);
   //div.addEventListener("touchstart", playAudio);
   document.body.appendChild(div);
  }
  createDiv7(divId7)
  {
    var div = document.createElement("div");
    div.id = divId7;
    div.innerHTML = '<img src=\'resources/tableCustomer.png\'>';
    div.style.position = "absolute";
    div.style.left = 300 + "px";
    div.style.top = 300 + "px";
    div.addEventListener("touchstart", this.movePlayer);
   //div.addEventListener("touchstart", playAudio);
   document.body.appendChild(div);
  }
  createDiv8(divId8)
  {
    var div = document.createElement("div");
    div.id = divId8;
    div.innerHTML = '<img src=\'resources/longTable.png\'>';
    div.style.position = "absolute";
    div.style.left = 25 + "px";
    div.style.top = 100 + "px";
   div.addEventListener("touchstart", this.movePlayer);
   document.body.appendChild(div);
  }
  createDiv9(divId9)
  {
    var div = document.createElement("div");
    div.id = divId9;
    div.innerHTML = '<img src=\'resources/longTable.png\'>';
    div.style.position = "absolute";
    div.style.left = 275 + "px";
    div.style.top = 100 + "px";
   div.addEventListener("touchstart", this.movePlayer);
   document.body.appendChild(div);
  }
  movePlayer(e){
    console.log("touching")
    gameNs.move = true
  }

  initWorld()
  {
    console.log("Initialising Game World");
    document.addEventListener("keydown", this.keyDownHandler.bind(this));
    document.addEventListener("touchstart", this.onTouchStart, false);
    document.addEventListener("touchmove", this.onTouchMove.bind(this), false);
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
    gameNs.customer.render()
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

	   this.touches = e.touches;
	   gameNs.startX = this.touches[0].clientX;
	   gameNs.startY = this.touches[0].clientY;

  }

  onTouchMove(e)
  {
	   this.touches = e.changedTouches;

	   gameNs.endX = this.touches[0].clientX;
	   gameNs.endY = this.touches[0].clientY;
     if(gameNs.customer.detectHit(gameNs.px, gameNs.py, gameNs.startX, gameNs.startY, gameNs.width, gameNs.height)) {
        // Assign new coordinates to our object
        gameNs.px = gameNs.endX;
        gameNs.py = gameNs.endY;
      }
	   gameNs.startX = this.touches[0].clientX;
	   gameNs.startY = this.touches[0].clientY;
  }

  onTouchEnd(e)
  {

	   gameNs.endX = this.touches[0].clientX;
 	   gameNs.endY = this.touches[0].clientY;


  }




}
