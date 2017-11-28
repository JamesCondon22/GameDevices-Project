

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

  gameNs.game.update();


}
/**
  * @param {sceneManager} object object of type SceneManager.
  * This draws all the scenes through the sceneManager object
  */
function draw(sceneManager)
{
  sceneManager.render();
}
/**
  * @param {sceneManager} object object of type SceneManager
  * @param {e} event mouse click event
  * This function takes a mouse click
  */
function clickHandler(sceneManager, e)
{
  //cycles to the next scene in the list
  sceneManager.goToNextScene();
  sceneManager.render();
}
