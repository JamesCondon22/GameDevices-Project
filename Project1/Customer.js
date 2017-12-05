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
      gameNs.px = xpos;
      gameNs.py = ypos;
      gameNs.width = width;
      gameNs.height = height;
      this.touched = false

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


   render()
   {
     var canvas = document.getElementById('mycanvas');
     var ctx = canvas.getContext('2d');
     ctx.fillRect(gameNs.px, gameNs.py, gameNs.width,gameNs.height);

   }


 }