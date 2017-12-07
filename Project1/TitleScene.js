/**
 * @author James Condon
 * C00207200
 * The title scene class which is a child of the scene class
 */

class TitleScene
{
/**
  * @param {title} string title of the MenuScene.
  * This construcor uses the keyword super to inherit from the Scene class
  */
  constructor(title)
  {
    this.title = title
    gameNs.playing = false;
    this.imgMan = new Image();
    this.imgMan.src = "resources/FatTony.png";
    this.imgLogo = new Image();
    this.imgLogo.src = "resources/Logo.png";
  }

  render()
  {
    var canvas = document.createElement("mycanvas");
    var ctx = mycanvas.getContext("2d");
    document.body.style.background = "#800";
    ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
    ctx.font = '100px serif'; //48
    ctx.fillText(this.title, 30, 80);
    gameNs.scenetitle = this.title;
    ctx.drawImage(this.imgMan, 100, 100, 600, 1000);
    ctx.drawImage(this.imgLogo, 0, 1100, 1000, 300);
  }

}
