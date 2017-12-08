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
      this.fps = 10;
      this.count = 0;
      this.tickPerFrame = 1000 /this.fps;
      this.time = 0;
      this.width = width;
      this.height = height;
      this.img = new Image();
      this.img.src = "resources/ash.png"
      this.atTableOne = false;
      this.atTableTwo = false;
      this.atTableThree = false;
      this.atTableFour = false;
      this.atService = false;
      this.atWashing = false;
      this.move = false
      this.currentX = 0;
      this.currentY = 0;
      this.movingRight = false;
      this.movingLeft = false;
      this.movingUp = false;
      this.movingDown = false;
   }
   /**
    * @param {Date} deltaTime time
    * updates the sprite by checking if the tick are less than the time
    * the count is incremented. the count is multiplied by the image
    * width. when the count is more than length of the spritesheet its reset
    */
   update(dt)
   {

     if(dt != null)
        {
          this.time += dt;
        }
        var canvas = document.getElementById('mycanvas');
    		var ctx = canvas.getContext('2d');


        //changes position of x of the spritesheet
        if(this.tickPerFrame < this.time)
        {

          this.count +=1;
          if(this.count > 5)
          {
            this.count = 0;
          }
            this.time =0;
        }
   }

   render()
   {
     var canvas = document.getElementById('mycanvas');
     var ctx = canvas.getContext('2d');

     if (this.movingUp === true)
     ctx.drawImage(this.img, this.count * 200, 500, 200, 215, this.x, this.y, 200, 215);
     else if (this.movingLeft === true)
     ctx.drawImage(this.img, this.count * 200, 750, 200, 215, this.x, this.y, 200, 215);
     else if (this.movingRight === true)
     ctx.drawImage(this.img, this.count * 200, 250, 200, 215, this.x, this.y, 200, 215);
     else if (this.movingDown === true)
     ctx.drawImage(this.img, this.count * 200, 0, 200, 215, this.x, this.y, 200, 215);
   }


   movePlayer()
   {
     if (this.x + 50>   this.currentX)
     {
          this.x -= 3;
          this.movingLeft = true
          this.movingRight = false;
          this.movingUp = false;
          this.movingDown = false;
     }
     if (this.x+ 50<   this.currentX)
     {
          this.x += 3;
          this.movingRight = true
          this.movingLeft = false;
          this.movingUp = false;
          this.movingDown = false;
     }
     if (this.y+ 50>   this.currentY)
     {
         this.y -= 3;
         this.movingUp = true
         this.movingRight = false;
         this.movingLeft = false;
         this.movingDown = false;
     }
     if (this.y + 50<   this.currentY)
     {
        this.y += 3;
        this.movingDown = true
        this.movingRight = false;
        this.movingLeft = false;
        this.movingUp = false;


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

   }

   checkCollision(e)
 	{
 		var collides = false;

 		if ((this.x < e.x + e.width) &&
 				(this.x + this.width > e.x) &&
 				(this.y + this.height > e.y - 40) &&
 				(this.y < e.y))
 		{
 			collides = true;
 		}
 		return collides;
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

  detectHit(x1,y1,x2,y2,w,h)
  {
    //Very simple detection here
    if(x2-x1>w) return false;
    if(y2-y1>h) return false;
    return true;
  }



 }
