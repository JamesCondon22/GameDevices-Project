/**
 * @author James Condon
 * C00207200
 * @author Conor O'Toole
 * C00206724
 * The game scene class which is a child of the scene class
 */
class GameScene
{
/**
   * @param {title} string title of the MenuScene.
   * This construcor uses the keyword super to inherit from the Scene class
   */
  constructor(title, load)
  {
    this.title = title
    this.xPos = 200;
    this.index = 0
    this.load = load
    this.dinnerIndex = 1
    this.count = 2
    gameNs.player = new Player(500,450, 100,180, load['TrumpImg']);
    this.noOfCustomers = 1
    this.noOfdinners = 2
    gameNs.customer = [this.noOfCustomers]
    gameNs.customerTwo = [this.noOfCustomers]
    gameNs.customer[0] = new Customer(500,1000,100,180)
    gameNs.customerTwo[0] = new CustomerTwo(400,1000,100,180)
    gameNs.dinners = [this.noOfdinners]
    gameNs.dinners[0] = new Dinner(125,50,50,50,load)
    gameNs.dinners[1] = new Dinner(200,50,50,50,load)
    gameNs.table = [4]
    gameNs.tableOne = new Table(70,450,250,100, load['TableImg']);
    gameNs.tableTwo = new Table(650,450,250,100, load['TableImg']);
    gameNs.tableThree= new Table(70,900,250,90, load['TableImg']);
    gameNs.tableFour= new Table(650,900,250,90, load['TableImg']);
    gameNs.service = new ServiceTable(50,50,900,150, load['ServiceTableImg']);
    this.background = new Background(0,0,1000,1500)
    //gameNs.washing = new CleaningTable(600,50,375,100);
    gameNs.playing = true;
    gameNs.soundManager = new SoundManager()
    var seconds;
    var minutes;
    var secHolder

    //Tutorial variables
    this.movedPlayer = false;
    this.movedCustomer = false;
    this.foodCollected = false;
    this.foodAtTable = false;
    this.collectMoney = false;
    this.moneyCollected = false;
    this.tutorialOver = false;
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
    gameNs.soundManager.init();
    gameNs.soundManager.loadSoundFile('ding', "resources/ding.mp3")
    gameNs.soundManager.loadSoundFile('served', "resources/served.mp3")
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

    if (this.newHolder >= 10 && this.count <= 8 && this.tutorialOver === true)
    {
      this.insertCustomer();
      this.insertDinner()
    }


    for (var i = 0; i < this.noOfCustomers; i++)
    {
        gameNs.customer[i].update(this.noOfCustomers)
    }
    for (var i = 0; i < this.noOfCustomers; i++)
    {
        gameNs.customerTwo[i].update(this.noOfCustomers)
    }

    //The dinners arrray update
    for (var i = 0; i < this.noOfdinners; i++)
    {
      gameNs.dinners[i].update();
    }
    if (this.tutorialOver === true)
    {
      this.gameTimer();
    }
    this.render();



    if (gameNs.tableOne.seatOneFull && gameNs.tableOne.seatTwoFull)
    {
      gameNs.tableOne.tableFull = true
      this.movedCustomer = true

    }
    if (gameNs.tableTwo.seatOneFull && gameNs.tableTwo.seatTwoFull)
    {
      gameNs.tableTwo.tableFull = true
      this.movedCustomer = true

    }
    if (gameNs.tableThree.seatOneFull && gameNs.tableThree.seatTwoFull)
    {
      gameNs.tableThree.tableFull = true
      this.movedCustomer = true

    }
    if (gameNs.tableFour.seatOneFull && gameNs.tableFour.seatTwoFull)
    {
      gameNs.tableFour.tableFull = true
      this.movedCustomer = true

    }
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

    this.background.render();
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
    for (var i = 0; i < this.noOfCustomers; i ++)
    {
      gameNs.customerTwo[i].render()
    }

    ctx.font = '55px Arial';
    ctx.fillText(this.minutes + ":",10,50)
    ctx.fillText(this.secHolder, 60, 50);
    ctx.fillText(" / 2:00", 110, 50);

    if (this.tutorialOver === false)
    {
        if (this.movedCustomer === false)
        {
          ctx.fillText("Drag the customers to a Table", 10,800);
        }
        if (this.movedCustomer === true && this.movedPlayer === false)
        {
          ctx.fillText("Point and click Trump towards the food", 10,800);
        }
        if (this.movedPlayer === true && gameNs.player.atService === true && gameNs.dinners[0].collected === false && this.movedCustomer === true)
        {
          ctx.fillText("Collect food from the service by", 10,785);
          ctx.fillText("touching it", 100,830);
        }
        if (this.foodCollected === true && this.movedCustomer === true)
        {
          if (gameNs.player.atTableOne === false && gameNs.player.atTableTwo === false && gameNs.player.atTableThree === false && gameNs.player.atTableFour === false)
          {
            ctx.fillText("point and click trump to the full table", 10,785);
            ctx.fillText("(avoid the tables)", 100,830);
          }
        }
        if (this.foodCollected === true)
        {
          if (this.foodAtTable === false && this.collectMoney === false)
          {
            if(gameNs.player.atTableOne === true || gameNs.player.atTableTwo === true || gameNs.player.atTableThree === true || gameNs.player.atTableFour === true)
                {
                  ctx.fillText("Touch the table to serve the food", 10,850);
                }
          }
        }

        if (this.collectMoney === true)
        {
          ctx.fillText("Touch the table to collect the money", 10,850);
        }

        if (this.moneyCollected === true)
        {

          this.tutorialOver = true;

        }
      }

      if (this.tutorialOver === true)
      {
          ctx.fillText("Begin!!", 850,50);
      }
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

	   this.startX = this.touches.clientX;
	   this.startY = this.touches.clientY;
  }

  onTouchEnd(e)
  {
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

   }

   insertCustomer()
   {
     this.index+=1;
     gameNs.customer[this.index] = new Customer(500,1000,100,180)
     gameNs.customerTwo[this.index] = new CustomerTwo(400,1000,100,180)
     this.noOfCustomers+= 1;
     this.newHolder = 0;
     this.customerSeconds = 0
     gameNs.soundManager.playSound('ding', false, 0.5);
   }

   insertDinner()
   {
     this.count += 2
     this.dinnerIndex+=1;
     this.xPos +=75
     gameNs.dinners[this.dinnerIndex] = new Dinner(this.xPos,50,50,50, this.load)
     this.noOfdinners+=1;
     this.dinnerIndex+=1;
     this.xPos +=75
     gameNs.dinners[this.dinnerIndex] = new Dinner(this.xPos,50,50,50, this.load)
     this.noOfdinners+=1;

     if (this.xPos >= this.width)
     {
       this.xPos = 100;
     }
   }

 }
