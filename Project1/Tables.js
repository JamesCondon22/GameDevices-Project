/**
 * @author James Condon
 * C00207200
 * The scene class parent of the other scenes
 */
class Table
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
      this.img.src = "resources/new_table.png"
      this.seat = [2]
      this.seat[0] = new Seat(this.x - 90, this.y, 100,120)
      this.seat[1] = new Seat(this.x + this.width - 20, this.y, 100,120)
      this.seatOneFull = false;
      this.seatTwoFull = false;
      this.tableFull = false
      this.full = false;
   }
   /**
    * @param {Date} deltaTime time
    * updates the sprite by checking if the tick are less than the time
    * the count is incremented. the count is multiplied by the image
    * width. when the count is more than length of the spritesheet its reset
    */
   update(dt)
   {

     //if (this.seatOneFull && this.seatTwoFull)
   }
   detectHit(x1,y1,x2,y2,w,h)
   {
     //Very simple detection here
     if(x2-x1>w) return false;
     if(y2-y1>h) return false;
     return true;
   }
   checkCollisionBetween(x,y,width,height)
  {
    var collides = false;

    if ((this.x < x + width) &&
        (this.x + this.width > x) &&
        (this.y + this.height > y) &&
        (this.y  < y + height))
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
     for (var i = 0; i< 2; i++)
     {
       this.seat[i].render();
     }
   }
 }
