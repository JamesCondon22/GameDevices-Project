

 /**
  * @author James Condon
  * C00207200
  * This is an appliction that cycles through the scenes
  * There are three scenes title, menu and game
  * when the mouse is clicked the scene changes to next scene in the
  * nest position
  */

function main()
{
  initCanvas();


  var game = new Game();

  var scene = new TitleScene('Title Scene');
  var sceneTwo = new MenuScene('Main Scene');
  var sceneThree = new GameScene('Game Scene');

  var sceneManager = new SceneManager();

  sceneManager.addScene(scene);
  sceneManager.addScene(sceneTwo);
  sceneManager.addScene(sceneThree);

  //starts the first scene
  sceneManager.goToScene(scene.title);

  game.init();
  document.addEventListener("click", clickHandler.bind(null, sceneManager));
  draw(scene, sceneTwo, sceneThree, sceneManager);


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
