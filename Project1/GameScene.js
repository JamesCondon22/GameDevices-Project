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
    gameNs.player = new Player(0,250, 60,100);
    gameNs.customer = new Customer(0,700,20,20)
    gameNs.dinner = new Dinner(20,20,20,20)
    gameNs.table = [4]
    gameNs.tableOne= new Table(100,250,125,50);
    gameNs.tableTwo= new Table(300,250,125,50);
    gameNs.tableThree= new Table(100,500,125,50);
    gameNs.tableFour= new Table(300,500,125,50);
    gameNs.service = new ServiceTable(25,50,200,50);
    gameNs.washing = new CleaningTable(275,50,200,50);
    gameNs.playing = true;
    var seconds;
    var minutes;
    var secHolder

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

    if (gameNs.player.move === true){
      gameNs.player.movePlayer()
      //console.log("moving")
    }
  //  console.log(gameNs.player.currentX +", " +gameNs.player.currentY)
    gameNs.dinner.update();
    this.gameTimer();
    this.render();
    console.log(gameNs.player.move)
    //console.log(gameNs.player.move)
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

    gameNs.tableOne.render();
    gameNs.tableTwo.render();
    gameNs.tableThree.render();
    gameNs.tableFour.render();

    gameNs.service.render();
    gameNs.washing.render();
    gameNs.player.render();
    gameNs.dinner.render();
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
	   this.touches = e.touches;

	   this.startX = this.touches[0].clientX;
	   this.startY = this.touches[0].clientY;
     if(gameNs.tableOne.detectHit(gameNs.tableOne.x, gameNs.tableOne.y, this.startX, this.startY, gameNs.tableOne.width, gameNs.tableOne.height))
     {
       //if (gameNs.player.atTableOne === false)
       //{
          gameNs.player.move = true
          gameNs.player.currentX = this.startX
          gameNs.player.currentY= this.startY
       //}
     }
     if(gameNs.tableTwo.detectHit(gameNs.tableTwo.x, gameNs.tableTwo.y, this.startX, this.startY, gameNs.tableTwo.width, gameNs.tableTwo.height))
     {
       if (gameNs.player.atTableTwo === false)
       {gameNs.player.move  = true
       gameNs.player.currentX = this.startX
       gameNs.player.currentY= this.startY}
     }
     if(gameNs.tableThree.detectHit(gameNs.tableThree.x, gameNs.tableThree.y, this.startX, this.startY, gameNs.tableThree.width, gameNs.tableThree.height))
     {
       if (gameNs.player.atTableThree === false)
       {gameNs.player.move = true
       gameNs.player.currentX = this.startX
       gameNs.player.currentY= this.startY}
     }
     if(gameNs.tableFour.detectHit(gameNs.tableFour.x, gameNs.tableFour.y, this.startX, this.startY, gameNs.tableFour.width, gameNs.tableFour.height))
     {
       if (gameNs.player.atTableFour === false)
       {
         gameNs.player.move = true
         gameNs.player.currentX = this.startX
         gameNs.player.currentY= this.startY
       }

     }
     //if (gameNs.player.detectHit(gameNs.player.x, gameNs.player.y, gameNs.player.startX, gameNs.player.startY, gameNs.player.width, gameNs.player.height))
     //{
    //    gameNs.player.move = false
     //}


     console.log(this.startX + ' , ' + this.startY);
     console.log(gameNs.player.x + ' , ' + gameNs.player.y);
  }
  onTouchMove(e)
  {
	   this.touches = e.changedTouches;

	   this.endX = this.touches.clientX;
	   this.endY = this.touches.clientY;
     //if(gameNs.customer.detectHit(gameNs.px, gameNs.py, gameNs.startX, gameNs.startY, gameNs.width, gameNs.height) )
     //{

      //  gameNs.px = gameNs.endX;
      //  gameNs.py = gameNs.endY;
      //}
	   this.startX = this.touches.clientX;
	   this.startY = this.touches.clientY;
  }

  onTouchEnd(e)
  {





    //if(gameNs.service.detectHit(gameNs.service.x, gameNs.service.y, gameNs.startX, gameNs.startY, gameNs.service.width, gameNs.service.height)&& gameNs.sceneManager.getScene() == "Game Scene") {

    //   gameNs.move = true
    // }
    // if(gameNs.washing.detectHit(gameNs.washing.x, gameNs.washing.y, gameNs.startX, gameNs.startY, gameNs.washing.width, gameNs.washing.height)&& gameNs.sceneManager.getScene() == "Game Scene") {
//
//gameNs.move = true
    //  }


     var touches = e.touches
	   this.endX = touches.clientX;
 	   this.endY = touches.clientY;



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
