/**
 * @author James Condon
 * C00207200
 * @author Conor O'Toole
 * C00206724
 * The End screen class which is a child of the scene class
 */

class EndScreen
{
/**
  * @param {title} string title of the MenuScene.
  * This construcor uses the keyword super to inherit from the Scene class
  */
  constructor(title, load)
  {
    this.title = title
    gameNs.playing = false;
    this.imgLoser = new Image();
    this.imgLoser.src = "resources/Loser.png";
    this.imgWinner = new Image();
    this.imgWinner.src = "resources/Winner.png";
    this.imgLogo = new Image();
    this.imgLogo.src = "resources/Logo.png";
  }

  render()
  {
    var canvas = document.createElement("mycanvas");
    var ctx = mycanvas.getContext("2d");
    document.body.style.background = "#800";
    ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
    ctx.font = '200px VIVALDII.TFF'; //48
    ctx.fillText(this.title, 0, 0);
    ctx.fillText("Score: " + gameNs.player.score, 500, 50);
    gameNs.scenetitle = this.title;
    ctx.drawImage(this.imgWinner, 100, 100, 600, 1000);
    ctx.drawImage(this.imgLogo, 0, 1100, 1000, 300);
  }

}
