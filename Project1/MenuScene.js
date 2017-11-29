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

  }

  createDiv(divId)
  {
    var div = document.createElement("div");
	  div.id = divId;
	  div.innerHTML = '<img src=\'resources/buttonSpritePlay.png\'>';
    div.style.position = "absolute";
    div.style.left = 100 + "px";
    div.style.top = 100 + "px";
	  document.body.appendChild(div);
  }
  createDiv2(divId2)
  {
    var div = document.createElement("div");
	  div.id = divId2;
	  div.innerHTML = '<img src=\'resources/buttonSpriteOptions.png\'>';
    div.style.position = "absolute";
    div.style.left = 100 + "px";
    div.style.top = 300 + "px";
	  //div.addEventListener("touchstart", playAudio);
	  document.body.appendChild(div);
  }
  createDiv3(divId3)
  {
    var div = document.createElement("div");
	  div.id = divId3;
	  div.innerHTML = '<img src=\'resources/buttonSpriteExit.png\'>';
    div.style.position = "absolute";
    div.style.left = 100 + "px";
    div.style.top = 500 + "px";
	  //div.addEventListener("touchstart", playAudio);
	  document.body.appendChild(div);
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
