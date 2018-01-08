

 /**
  * @author James Condon
  * C00207200
  * @author Conor O'Toole
  * C00206724
  * This is an appliction that cycles through the scenes
  * There are three scenes title, menu and game
  * when the mouse is clicked the scene changes to next scene in the
  * nest position
  */
var gameNs = {};

function main(load)
{
  initCanvas();
  var titlescene = new TitleScene('Time to get to work!',load);
  var main = new MenuScene('Main Scene',800,400, load);
  var game = new GameScene('Game Scene', load);
  var endScene = new EndScreen("Service is over",load)
  var options = new Options("Options",load)
  //var instructions = new Instructions("Instuctions", load)
  var sceneManager = new SceneManager();
  gameNs.sceneManager = sceneManager
  gameNs.created = false
  gameNs.createdGame = false
  gameNs.pressed = false
  gameNs.playing = false
  gameNs.main = main
  gameNs.game = game;
  gameNs.options = options
  gameNs.volume = 0.5
  gameNs.soundManager = new SoundManager()
  sceneManager.addScene(titlescene);
  sceneManager.addScene(main);
  sceneManager.addScene(game);
  sceneManager.addScene(options)
  sceneManager.addScene(endScene);
  sceneManager.goToScene(titlescene.title);
  document.addEventListener("click", clickHandler.bind(null, sceneManager));
  /*window.addEventListener('touchstart', function(e) {
    if (e.targetTouches.length === 2) {
      e.preventDefault();
    }
  }, { passive: false } );*/
  gameNs.soundManager.init();
  gameNs.soundManager.loadSoundFile('background', "resources/background.wav")
  gameNs.soundManager.loadSoundFile('ding', "resources/ding.mp3")
  gameNs.soundManager.loadSoundFile('served', "resources/served.mp3")
  gameNs.game.initWorld();
  gameNs.customerSeconds = 0
  gameNs.newHolder = 0
  draw(titlescene, main, game, endScene, sceneManager);
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
  gameNs.customerSeconds = gameNs.customerSeconds + 1;
  gameNs.newHolder = Math.trunc(gameNs.customerSeconds/60)

  if (gameNs.sceneManager.getScene() === "Game Scene" && gameNs.game.winner === false)
  {
    gameNs.game.update()
    gameNs.playing = true
  }

  if (gameNs.sceneManager.getScene() === "Main Scene")
  {
    gameNs.main.update()
  }

  if (gameNs.sceneManager.getScene() === "Options")
  {
    gameNs.options.update()
  }
  if (gameNs.game.winner === true && gameNs.sceneManager.getScene() === "Game Scene")
  {
    gameNs.sceneManager.goToScene("Service is over")
    gameNs.sceneManager.render();

  }
  if (gameNs.newHolder > 3 && gameNs.sceneManager.getScene() === "Time to get to work!")
  {
    gameNs.sceneManager.goToNextScene()
    gameNs.sceneManager.render();
  }

  //console.log(gameNs.playing)
//console.log(holder)

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
  //if (gameNs.playing === false)
  //{
    //sceneManager.goToNextScene()
    //sceneManager.render();
  //}

}
