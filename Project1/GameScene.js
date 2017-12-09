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
    this.xPos = 100;
    this.index = 0
    this.dinnerIndex = 0
    gameNs.player = new Player(500,450, 100,180);
    this.noOfCustomers = 1
    this.noOfdinners = 1
    gameNs.customer = [this.noOfCustomers]
    gameNs.dinners = [this.noOfdinners]
    gameNs.customer[0] = new Customer(500,1000,100,180)
    gameNs.dinners[0] = new Dinner(100,50,50,50)
    gameNs.table = [4]
    gameNs.tableOne = new Table(70,450,250,100);
    gameNs.tableTwo = new Table(650,450,250,100);
    gameNs.tableThree= new Table(70,900,250,90);
    gameNs.tableFour= new Table(650,900,250,90);
    gameNs.service = new ServiceTable(50,50,900,150);
    //gameNs.washing = new CleaningTable(600,50,375,100);
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
    this.customerSeconds = 0
    this.newHolder = 0
    this.minutes = 0;
    this.secHolder = 0;
    gameNs.previousTime = Date.now();


  }

  update()
  {
    var canvas = document.getElementById('mycanvas');
		var ctx = canvas.getContext('2d');
    this.customerSeconds = this.customerSeconds + 1;
    this.newHolder = Math.trunc(this.customerSeconds/60)
    if (gameNs.player.move === true){
      gameNs.player.movePlayer()
      //console.log("moving")
    }
    //console.log(gameNs.player.move)
    var now = Date.now();
    var dt = (now - gameNs.previousTime);

    gameNs.previousTime = now;

    if (gameNs.player.move === true)
    {

          gameNs.player.update(dt);
    }
    console.log(this.index)
    if (this.newHolder >= 10)
    {
      this.insertCustomer();
      this.insertDinner();

    }

    //this.insertCustomer();
    for (var i = 0; i < this.noOfCustomers; i++)
    {
      gameNs.customer[i].update();
    }

    //The dinners arrray update
    for (var i = 0; i < this.noOfdinners; i++)
    {
      gameNs.dinners[i].update();
    }
    this.gameTimer();
    this.render();



    //console.log(gameNs.player.currentX+ ", "+gameNs.player.currentY)
    //console.log((gameNs.player.x + gameNs.player.width) + ", " + (gameNs.player.y + gameNs.player.height))
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


    gameNs.tableOne.render();
    gameNs.tableTwo.render();
    gameNs.tableThree.render();
    gameNs.tableFour.render();

    gameNs.service.render();
    //gameNs.washing.render();
    gameNs.player.render();
    for (var i = 0; i < this.noOfdinners; i++)
    {
      gameNs.dinners[i].render();
    }
    for (var i = 0; i < this.noOfCustomers; i ++)
    {
      gameNs.customer[i].render()
    }

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

     // Wrapping the seconds back around to 0 once it reaches a minute
     if (Math.trunc(this.seconds/60) >= 60 && Math.trunc(this.seconds/60) <= 61)
     {
       this.seconds = 0;
       this.minutes += 1;
     }

     this.secHolder = Math.trunc(this.seconds/60) //A variable thats assigned the seconds to calculate the minutes

     // if statement for assigning minutes after 59 seconds







   }

   insertCustomer()
   {
     this.index+=1;
     gameNs.customer[this.index] = new Customer(500,1000,100,180)
     this.noOfCustomers+= 1;
     this.newHolder = 0;
     this.customerSeconds = 0
   }

   insertDinner()
   {
     this.dinnerIndex+=1;
     gameNs.dinners[this.dinnerIndex] = new Dinner(this.xPos,50,50,50)
     this.noOfdinners+=1;
     this.xPos +=50
     if (this.xPos >= this.width)
     {
       this.xPos = 100;
     }
   }

 }
