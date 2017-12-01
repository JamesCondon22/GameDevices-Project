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
      gameNs.x = this.x
      gameNs.y = this.y
      this.img = new Image();
      this.img.src = "resources/waiter.png"
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
     ctx.drawImage(this.img, gameNs.x, gameNs.y, this.width, this.height);

   }


   moveRight()
   {
     if (gameNs.x + 50> gameNs.endX)
     {
          gameNs.x -= 3;
     }
     if (gameNs.x+ 50< gameNs.endX )
     {
          gameNs.x += 3;
     }
     if (gameNs.y+ 50> gameNs.endY )
     {
         gameNs.y -= 3;
     }
     if (gameNs.y + 50< gameNs.endY )
     {
        gameNs.y += 3;

     }
     for (var i = 0; i < 4; i++){
       if (this.checkCollision(gameNs.table[i]))
       {
         gameNs.move = false;
         console.log("colliding")
       }
     }
   }

   checkCollision(e)
 	{
 		var collides = false;

 		if ((gameNs.x < e.x + e.width) &&
 				(gameNs.x + this.width > e.x) &&
 				(gameNs.y + this.height > e.y) &&
 				(gameNs.y < e.y + e.height))
 		{
 			collides = true;
 		}
 		return collides;
 	}



 }
