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
    var seconds;
    var minutes;
    var secHolder

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
    this.seconds = 0;
    this.minutes = 0;
    this.secHolder = 0;


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
  /*  var countDownDate = new Date("Sep 5, 2018 15:37:25").getTime();

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("mycanvas").innerHTML = minutes + "m " + seconds + "s";
    console.log(minutes);*/


    //setTimeout(this.gameLost(), 60000);
    this.gameTimer();

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

    //Outputting the timer to the screen here
    ctx.font = '55px Arial';
    ctx.fillText(this.minutes + ":",10,50)
    ctx.fillText(this.secHolder, 60, 50);
    ctx.fillText(" / 2:00", 110, 50);
    //gameNs.scenetitle = this.title;


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

  /**
  * Simple function to update game timer and display it to the screen
  * @param {seconds} float secound counter
  * @param {minutes} float minute counter
  * @param {secHolder} float place holder for calculating minutes based on seconds.
  */
  gameTimer()
   {
     //This sets the time for the seconds based upon the update speed
     this.seconds = this.seconds + 1;


     this.secHolder = Math.trunc(this.seconds/60) //A variable thats assigned the seconds to calculate the minutes

     // if statement for assigning minutes after 59 seconds
     if (this.secHolder >= 59)
     {
       this.minutes = 1;
     }

     // Wrapping the seconds back around to 0 once it reaches a minute
     if (Math.trunc(this.seconds/60) >= 59 && Math.trunc(this.seconds/60) <= 61)
     {
       this.seconds = 0;
     }



   }


}
