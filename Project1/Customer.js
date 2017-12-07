/**
 * @author James Condon
 * C00207200
 * The scene class parent of the other scenes
 */
class Customer
{
  /**
   * @param {title} string
   * This is the constructor for the scene class
   * This sets the title to the scene
   */
   constructor(xpos,ypos,width,height)
   {
      this.px = xpos;
      this.py = ypos;
      this.width = width;
      this.height = height;
      this.touched = false
      this.img = new Image();
      this.img.src = "resources/waiter.png"
      document.addEventListener("touchstart", this.onTouchStart.bind(this), false);
      document.addEventListener("touchmove", this.onTouchMove.bind(this), false);
  	  document.addEventListener("touchend", this.onTouchEnd.bind(this), false);
      this.touching = false;
      this.seatedFirst = false
   }
   /**
    * @param {Date} deltaTime time
    * updates the sprite by checking if the tick are less than the time
    * the count is incremented. the count is multiplied by the image
    * width. when the count is more than length of the spritesheet its reset
    */
   update()
   {

     if (this.checkCollision(gameNs.tableOne))
     {
       if (!gameNs.tableOne.tableFull && !gameNs.tableOne.seatOneFull)
       {
         this.seatOne()
       }
       //if (!gameNs.tableOne.tableFull && gameNs.tableOne.seatOneFull && !gameNs.tableOne.seatTwoFull)
      // {
      //   this.seatTwo()

     }
     else if (!this.checkCollision(gameNs.tableOne) && this.touching == false)

     {
       this.px = 500
       this.py = 800
     }
     //console.log(this.touching)
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
     this.touching = false
     this.startX = this.touches[0].clientX;
     this.startY = this.touches[0].clientY;

   }
   onTouchMove(e)
   {
 	   this.touches = e.changedTouches;
 	   this.endX = this.touches[0].clientX;
 	   this.endY = this.touches[0].clientY;
     if(this.detectHit(this.px, this.py, this.startX, this.startY, this.width, this.height) && !this.seatedFirst)
     {
       console.log("collide")
        this.px = this.endX - 75;
        this.py = this.endY - 50;
        this.touching = true

      }
     this.startX = this.touches[0].clientX;
 	   this.startY = this.touches[0].clientY;
   }
   onTouchEnd(e)
   {
     this.touching = false
 	   this.endX = this.touches[0].clientX;
  	 this.endY = this.touches[0].clientY;
   }
   checkCollision(e)
 	{
 		var collides = false;

 		if ((this.px < e.x + e.width) &&
 				(this.px + this.width > e.x) &&
 				(this.py + this.height > e.y) &&
 				(this.py < e.y + e.height))
 		{
 			collides = true;
 		}
 		return collides;
 	}

  seatOne()
  {
    this.px = gameNs.tableOne.seat[0].x
    this.py = gameNs.tableOne.seat[0].y - 30
    this.seatedFirst = true
    //gameNs.tableOne.seatOneFull = true
  }
  seatTwo()
  {
    this.px = gameNs.tableOne.seat[1].x
    this.py = gameNs.tableOne.seat[1].y

    gameNs.tableOne.seatTwoFull = true
    gameNs.tableOne.tableFull = true
  }

   render()
   {
     var canvas = document.getElementById('mycanvas');
     var ctx = canvas.getContext('2d');
     ctx.drawImage(this.img,this.px, this.py, this.width,this.height);

   }


 }
