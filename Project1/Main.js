

 /**
  * @author James Condon
  * C00207200
  * This is an appliction that cycles through the scenes
  * There are three scenes title, menu and game
  * when the mouse is clicked the scene changes to next scene in the
  * nest position
  */
var gameNs = {};

function main()
{
  initCanvas();
  var titlescene = new TitleScene('Title Scene');
  var main = new MenuScene('Main Scene');
  var game = new GameScene('Game Scene');
  var sceneManager = new SceneManager();
  gameNs.sceneManager = sceneManager
  gameNs.created = false
  gameNs.createdGame = false
  gameNs.pressed = false
  gameNs.playing = false
  gameNs.main = main
  gameNs.game = game;
  gameNs.game.initWorld();

  sceneManager.addScene(titlescene);
  sceneManager.addScene(main);
  sceneManager.addScene(game);
  sceneManager.goToScene(titlescene.title);
  document.addEventListener("click", clickHandler.bind(null, sceneManager));
  window.addEventListener("keydown", function(e) {

	    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
	        e.preventDefault();
	    }
	}, false);
  draw(titlescene, main, game, sceneManager);
  update(sceneManager);




}
/**
 * Initialises the canvas - the drawing surface. The canvas
 * is added to the document. When a HTML document is loaded into a
 * browser, it becomes a document object. This document object is
 * the root node of the HTML document and is considered the 'owner' of all other
 * nodes such as forms, buttons, the canvas etc.
 */
function initCanvas()
{
  // Use the document object to create a new element canvas.
 var canvas = document.createElement("canvas");
 // Assign the canvas an id so we can reference it elsewhere
 canvas.id = 'mycanvas';
 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;
 // We want this to be a 2D canvas.
 var ctx = canvas.getContext("2d");
 // Adds the canvas element to the document.
 document.body.appendChild(canvas);
}

function update(sceneManager)
{

  if (gameNs.sceneManager.getScene() == "Game Scene")
  {
    gameNs.game.update()
  }
  if (gameNs.sceneManager.getScene() == "Game Scene" && gameNs.createdGame == false)
  {
    gameNs.created = false
    gameNs.game.createDiv4("divId4")
    gameNs.game.createDiv5("divId5")
    gameNs.game.createDiv6("divId6")
    gameNs.game.createDiv7("divId7")
    gameNs.createdGame = true
    gameNs.playing = true
  }
  if (gameNs.sceneManager.getScene() == "Main Scene" && gameNs.created === false)
  {
    gameNs.createdGame = false
    gameNs.main.createDiv("divId")
    gameNs.main.createDiv2("divId2")
    gameNs.main.createDiv3("divId3")
    gameNs.created = true
  }



  window.requestAnimationFrame(this.update);
}
/**
  * @param {sceneManager} object object of type SceneManager.
  * This draws all the scenes through the sceneManager object
  */
function draw(sceneManager)
{
  sceneManager.render();

}

function changeScene(e)
{
  console.log("touched")
}
/**
  * @param {sceneManager} object object of type SceneManager
  * @param {e} event mouse click event
  * This function takes a mouse click
  */
function clickHandler(sceneManager, e)
{
  if (gameNs.playing == false)
  {
    sceneManager.goToNextScene()
    sceneManager.render();
  }





}
