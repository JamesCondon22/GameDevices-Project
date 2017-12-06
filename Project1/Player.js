/**
 * @author James Condon
 * C00207200
 * The scene class parent of the other scenes
 */
class Player
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
      this.img.src = "resources/waiter.png"
      this.atTableOne = false;
      this.atTableTwo = false;
      this.atTableThree = false;
      this.atTableFour = false;
      this.atService = false;
      this.atWashing = false;
      this.move = false
      this.currentX = 0;
      this.currentY = 0;
   }
   /**
    * @param {Date} deltaTime time
    * updates the sprite by checking if the tick are less than the time
    * the count is incremented. the count is multiplied by the image
    * width. when the count is more than length of the spritesheet its reset
    */
   update(dt)
   {


   }

   render()
   {
     var canvas = document.getElementById('mycanvas');
     var ctx = canvas.getContext('2d');
     ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

   }


   movePlayer()
   {
     if (this.x + 50>   this.currentX)
     {
          this.x -= 3;
     }
     if (this.x+ 50<   this.currentX)
     {
          this.x += 3;
     }
     if (this.y+ 50>   this.currentY)
     {
         this.y -= 3;
     }
     if (this.y + 50<   this.currentY)
     {
        this.y += 3;

     }

      if (this.checkCollision(gameNs.tableOne))
      {
        this.move = false;
        this.atTableOne = true;
        //console.log(this.atTableOne)
      }
      else if (this.checkCollision(gameNs.tableTwo))
      {
        this.move = false;
        this.atTableTwo = true;
        //console.log(this.atTableTwo)
      }
      else if (this.checkCollision(gameNs.tableThree))
      {
        this.move = false;
        this.atTableThree = true;
        //console.log(this.atTableThree)
      }
      else if (this.checkCollision(gameNs.tableFour))
      {
        this.move = false;
        this.atTableFour = true;
        //console.log(this.atTableFour)
      }
      else
      {
        this.atTableOne = false;
        this.atTableTwo = false;
        this.atTableThree = false;
        this.atTableFour = false;
      }

     if (this.checkCollision(gameNs.service))
     {
       this.move = false;
       this.atService = true;
       console.log("atService")
     }
     else
     {
        this.atService = false;
     }
     if (this.checkCollision(gameNs.washing))
     {
       this.move = false;
       this.atWashing = true;
       console.log("atWashing")
     }
     else
     {
       this.atWashing = false;
     }
   }

   checkCollision(e)
 	{
 		var collides = false;

 		if ((this.x < e.x + e.width) &&
 				(this.x + this.width > e.x) &&
 				(this.y + this.height > e.y + 10) &&
 				(this.y + 80 < e.y + e.height))
 		{
 			collides = true;
 		}
 		return collides;
 	}

  detectHit(x1,y1,x2,y2,w,h)
  {
    //Very simple detection here
    if(x2-x1>w) return false;
    if(y2-y1>h) return false;
    return true;
  }



 }
