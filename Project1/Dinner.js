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
   constructor(xpos,ypos,width,height)
   {
      this.x = xpos;
      this.y = ypos;
      this.width = width;
      this.height = height;
      this.img = new Image();
      this.img.src = "resources/dinnerDish.png"
      document.addEventListener("touchstart", this.onTouchStart.bind(this), false);
      document.addEventListener("touchmove", this.onTouchMove.bind(this), false);
  	  document.addEventListener("touchend", this.onTouchEnd.bind(this), false);
      this.collected = false;
      this.served = false
      this.newPosX = 0
      this.newPosY = 0

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
        this.x = gameNs.player.x;
        this.y = gameNs.player.y;
      }
      if (this.served === true)
      {
        this.x = this.newPosX
        this.y = this.newPosY

      }
      //console.log(gameNs.player.atTable)

   }
   detectHit(x1,y1,x2,y2,w,h)
   {
     //Very simple detection here
     if(x2-x1>w) return false;
     if(y2-y1>h) return false;
     return true;
   }

   onTouchStart(e)
   {
     this.touches = e.touches;


     this.startX = this.touches[0].clientX;
     this.startY = this.touches[0].clientY;
   }
   onTouchMove(e)
   {
 	   this.touches = e.changedTouches;
 	   this.endX = this.touches[0].clientX;
 	   this.endY = this.touches[0].clientY;

     this.startX = this.touches[0].clientX;
 	   this.startY = this.touches[0].clientY;
   }
   onTouchEnd(e)
   {
     if (gameNs.player.atService === true && this.checkCollisionBetween(gameNs.player.currentX, gameNs.player.currentY, 30, 30))
     {
       this.collected = true;
     }
    if(this.collected === true && gameNs.player.atTableOne === true && gameNs.tableOne.detectHit(gameNs.tableOne.x, gameNs.tableOne.y, gameNs.startX, gameNs.startY, gameNs.tableOne.width, gameNs.tableOne.height))
    {
       this.newPosX = gameNs.tableOne.x
       this.newPosY = gameNs.tableOne.y
       //console.log("hit")
       this.collected = false
       this.served = true
    }

 	   this.endX = this.touches[0].clientX;
  	 this.endY = this.touches[0].clientY;
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
     ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

   }
 }
