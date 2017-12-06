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
      document.addEventListener("touchstart", this.onTouchStart.bind(this), false);
      document.addEventListener("touchmove", this.onTouchMove.bind(this), false);
  	  document.addEventListener("touchend", this.onTouchEnd.bind(this), false);
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
     if(this.detectHit(this.px, this.py, this.startX, this.startY, this.width, this.height) )
     {
       console.log("collide")
        this.px = this.endX;
        this.py = this.endY;
      }
     this.startX = this.touches[0].clientX;
 	   this.startY = this.touches[0].clientY;
   }
   onTouchEnd(e)
   {

 	   this.endX = this.touches[0].clientX;
  	 this.endY = this.touches[0].clientY;
   }


   render()
   {
     var canvas = document.getElementById('mycanvas');
     var ctx = canvas.getContext('2d');
     ctx.fillRect(this.px, this.py, this.width,this.height);

   }


 }
