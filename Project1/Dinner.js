/**
 * @author James Condon
 * C00207200
 * The scene class parent of the other scenes
 */
class Dinner
{
  /**
   * @param {title} string
   * This is the constructor for the scene class
   * This sets the title to the scene
   */
   constructor(xpos,ypos,width,height,load)
   {
      this.x = xpos;
      this.y = ypos;
      this.width = width;
      this.height = height;
      this.imgPasta = new Image();
      this.imgPasta.src = load['SpagImg'];
      this.imgPizza = new Image();
      this.imgPizza.src = load['PizzaImg'];
      this.imgLasagna = new Image();
      this.imgLasagna.src = load['LasagneImg'];
      this.imgMoney = new Image()
      this.imgMoney.src = load['MoneyImg']
  	  document.addEventListener("touchend", this.onTouchEnd.bind(this), false);
      this.collected = false;
      this.servedTableOne = false
      this.servedTableTwo = false
      this.servedTableThree = false
      this.servedTableFour = false
      this.alive = true
      this.cashLeftOne = false
      this.cashLeftTwo = false
      this.cashLeftThree = false
      this.cashLeftFour = false
      this.newPosX = 0
      this.newPosY = 0
      this.secondsOne = 0
      this.holderOne = 0
      this.secondsTwo = 0
      this.holderTwo = 0
      this.secondsThree = 0
      this.holderThree = 0
      this.secondsFour = 0
      this.holderFour = 0
      this.index = 0
      var rndNum;
      this.rndNum = Math.floor(Math.random()*3);

   }
   /**
    * @param {Date} deltaTime time
    * updates the sprite by checking if the tick are less than the time
    * the count is incremented. the count is multiplied by the image
    * width. when the count is more than length of the spritesheet its reset
    */
   update()
   {
      if (this.collected === true)
      {
        this.x = gameNs.player.x + 30;
        this.y = gameNs.player.y + 130;
        gameNs.game.foodCollected = true;
      }
      if (this.servedTableOne === true)
      {
        this.secondsOne = this.secondsOne + 1;
        this.holderOne = Math.trunc(this.secondsOne/60)
        gameNs.game.foodAtTable = true
        if (this.holderOne > 5)
        {
          var current = this.index;
          this.alive = false;
          this.servedTableOne = false
          this.cashLeftOne = true
          gameNs.tableOne.tableFull = false;
          gameNs.game.collectMoney = true;//gameNs.customer[current].alive = false
          //gameNs.customerTwo[this.index].alive = false
        }
      }
      if (this.servedTableTwo === true)
      {
        this.secondsTwo = this.secondsTwo + 1;
        this.holderTwo = Math.trunc(this.secondsTwo/60)
        gameNs.game.foodAtTable = true
        if (this.holderTwo > 5)
        {
          var current = this.index;
          this.alive = false;
          this.servedTableTwo = false
          this.cashLeftTwo = true
          gameNs.game.collectMoney = true;
        }
      }
      if (this.servedTableThree === true)
      {
        this.secondsThree = this.secondsThree + 1;
        this.holderThree = Math.trunc(this.secondsThree/60)
        gameNs.game.foodAtTable = true
        if (this.holderThree > 5)
        {
          this.alive = false;
          this.servedTableThree = false
          this.cashLeftThree = true
          gameNs.game.collectMoney = true;
        }
      }
      if (this.servedTableFour === true)
      {
        this.secondsFour = this.secondsFour + 1;
        this.holderFour = Math.trunc(this.secondsFour/60)
        gameNs.game.foodAtTable = true
        if (this.holderFour > 5)
        {
          this.alive = false;
          this.servedTableFour = false
          this.cashLeftFour = true
          gameNs.game.collectMoney = true;
        }
      }

   }
   detectHit(x1,y1,x2,y2,w,h)
   {
     //Very simple detection here
     if(x2-x1>w) return false;
     if(y2-y1>h) return false;
     return true;
   }

   onTouchEnd(e)
   {
     if (gameNs.player.atService === true && this.checkCollisionBetween(gameNs.player.currentX, gameNs.player.currentY, 30, 30))
     {
       this.collected = true;

     }
    if(gameNs.tableOne.tableFull && this.collected && gameNs.player.atTableOne && gameNs.tableOne.detectHit(gameNs.tableOne.x, gameNs.tableOne.y, gameNs.startX, gameNs.startY, gameNs.tableOne.width, gameNs.tableOne.height))
    {
       this.newPosX = gameNs.tableOne.x
       this.newPosY = gameNs.tableOne.y
       this.collected = false
       this.servedTableOne = true
       gameNs.game.foodAtTable = true
       this.placeDinner()
       gameNs.soundManager.playSound('served', false, 0.5);
    }
    if(this.collected === true && gameNs.player.atTableTwo === true && gameNs.tableTwo.detectHit(gameNs.tableTwo.x, gameNs.tableTwo.y, gameNs.startX, gameNs.startY, gameNs.tableTwo.width, gameNs.tableTwo.height))
    {
       this.newPosX = gameNs.tableTwo.x
       this.newPosY = gameNs.tableTwo.y
       this.collected = false
       this.servedTableTwo = true
       gameNs.game.foodAtTable = true
       this.placeDinner()
       gameNs.soundManager.playSound('served', false, 0.5);
    }
    if(this.collected === true && gameNs.player.atTableThree === true && gameNs.tableThree.detectHit(gameNs.tableThree.x, gameNs.tableThree.y, gameNs.startX, gameNs.startY, gameNs.tableThree.width, gameNs.tableThree.height))
    {
       this.newPosX = gameNs.tableThree.x
       this.newPosY = gameNs.tableThree.y
       this.collected = false
       this.servedTableThree = true
       gameNs.game.foodAtTable = true
       this.placeDinner()
       gameNs.soundManager.playSound('served', false, 0.5);
    }
    if(this.collected === true && gameNs.player.atTableFour === true && gameNs.tableFour.detectHit(gameNs.tableFour.x, gameNs.tableFour.y, gameNs.startX, gameNs.startY, gameNs.tableFour.width, gameNs.tableFour.height))
    {
       this.newPosX = gameNs.tableFour.x
       this.newPosY = gameNs.tableFour.y
       this.collected = false
       this.servedTableFour = true
       gameNs.game.foodAtTable = true
       this.placeDinner()
       gameNs.soundManager.playSound('served', false, 0.5);
    }

    if (this.cashLeftOne && gameNs.player.atTableOne &&  gameNs.tableOne.detectHit(gameNs.tableOne.x, gameNs.tableOne.y, gameNs.startX, gameNs.startY, gameNs.tableOne.width, gameNs.tableOne.height))
    {
      gameNs.player.score += 50
      this.cashLeftOne = false;
      gameNs.game.moneyCollected = true;
    }
    if (this.cashLeftTwo && gameNs.player.atTableTwo &&  gameNs.tableTwo.detectHit(gameNs.tableTwo.x, gameNs.tableTwo.y, gameNs.startX, gameNs.startY, gameNs.tableTwo.width, gameNs.tableTwo.height))
    {
      gameNs.player.score += 50
      this.cashLeftTwo = false;
      gameNs.game.moneyCollected = true;
    }
    if (this.cashLeftThree && gameNs.player.atTableThree &&  gameNs.tableThree.detectHit(gameNs.tableThree.x, gameNs.tableThree.y, gameNs.startX, gameNs.startY, gameNs.tableThree.width, gameNs.tableThree.height))
    {
      gameNs.player.score += 50
      this.cashLeftThree = false;
      gameNs.game.moneyCollected = true;
    }
    if (this.cashLeftFour && gameNs.player.atTableFour &&  gameNs.tableFour.detectHit(gameNs.tableFour.x, gameNs.tableFour.y, gameNs.startX, gameNs.startY, gameNs.tableFour.width, gameNs.tableFour.height))
    {
      gameNs.player.score += 50
      this.cashLeftFour = false;
      gameNs.game.moneyCollected = true;
    }

 	   this.endX = e.touches.clientX;
  	 this.endY = e.touches.clientY;
   }

   checkCollisionBetween(x,y,width,height)
  {
    var collides = false;

    if ((this.x < x + width) &&
        (this.x + this.width > x) &&
        (this.y + this.height > y) &&
        (this.y < y + height))
    {
      collides = true;
    }
    return collides;
  }

   render()
   {
     var canvas = document.getElementById('mycanvas');
     var ctx = canvas.getContext('2d');
     if (this.rndNum === 0 )
     {
       if (this.alive)
       ctx.drawImage(this.imgPasta, this.x, this.y, this.width, this.height);
     }
     if (this.rndNum ===1 )
     {
        if (this.alive)
       ctx.drawImage(this.imgPizza, this.x, this.y, this.width, this.height);
     }
     if (this.rndNum === 2 )
     {
        if (this.alive)
       ctx.drawImage(this.imgLasagna, this.x, this.y, this.width, this.height);
     }
     if (this.cashLeftOne || this.cashLeftTwo || this.cashLeftThree || this.cashLeftFour)
     {
       ctx.drawImage(this.imgMoney, this.x, this.y, this.width, this.height);

     }
   }

   placeDinner()
   {
       this.x = this.newPosX + 100
       this.y = this.newPosY - 20
   }

   retrieveIndex(index)
   {
     this.index = index
     console.log(this.index)
   }

 }
