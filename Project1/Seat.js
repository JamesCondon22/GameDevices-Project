/**
 * @author James Condon
 * C00207200
 * The scene class parent of the other scenes
 */
class Seat
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
      this.img.src = "resources/stool.png"
      this.full = false;
   }
  

   render()
   {
     var canvas = document.getElementById('mycanvas');
     var ctx = canvas.getContext('2d');
     ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

   }
 }
