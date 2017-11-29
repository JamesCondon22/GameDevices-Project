/**
 * @author James Condon
 * C00207200
 * The game scene class which is a child of the scene class
 */
class MenuScene
{
/**
  * @param {title} string title of the MenuScene.
  * This construcor uses the keyword super to inherit from the Scene class
  */
  constructor(title)
  {
    this.title = title
    gameNs.playing = false;
    this.createDiv('divId')
    this.createDiv2('divId2')
    this.createDiv3('divId3')
  }

  createDiv(divId)
  {
    gameNs.div = document.createElement("div");
	  gameNs.div.id = divId;
	  gameNs.div.innerHTML = '<img src=\'resources/buttonSpritePlay.png\'>';
	  //div.addEventListener("touchstart", playAudio);
	  document.body.appendChild(gameNs.div);
  }
  createDiv2(divId2)
  {
    gameNs.div = document.createElement("div2");
	  gameNs.div.id = divId2;
	  gameNs.div.innerHTML = '<img src=\'resources/buttonSpriteOptions.png\'>';
	  //div.addEventListener("touchstart", playAudio);
	  document.body.appendChild(gameNs.div);
  }
  createDiv3(divId3)
  {
    gameNs.div = document.createElement("div3");
	  gameNs.div.id = divId3;
	  gameNs.div.innerHTML = '<img src=\'resources/buttonSpriteExit.png\'>';
	  //div.addEventListener("touchstart", playAudio);
	  document.body.appendChild(gameNs.div);
  }
/**
  * creates a canvas and context
  * changes the color of the background to green
  * changes the font and the font size
  */
  render()
  {
    var canvas = document.createElement("mycanvas");
    var ctx = mycanvas.getContext("2d");
    ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
    document.body.style.background = "#0C8100";
    ctx.font = '35px Corbel';

  }


}
