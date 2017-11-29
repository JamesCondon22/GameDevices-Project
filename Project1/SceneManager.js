/**
 * @author James Condon
 * C00207200
 * The scene class parent of the other scenes
 */

class SceneManager
{
/**
 * sets the current scene to null
 * initialises a dictionary
 * initialises a list
 * initialises the index to -1
 * initialises the number od scenes to -1
 */
  constructor()
  {
    this.currentScene = null;
    this.dictionary = {};
    this.titles = [];
    this.index = -1;
    this.numOfScenes = -1
    gameNs.scenetitle = null
  }

/**
 * @param {scene} object the scene being added
 * pushes the scene title to the list
 * increments the number of scenes
 * adds the scene to the dictionary
 */
  addScene(scene)
  {
    this.titles.push(scene.title);
    this.numOfScenes++;
    this.dictionary[this.numOfScenes] =scene;
    this.scenetitle = scene.title;
  }
  /**
   * @param {title} string the scene title
   * goes to being passed into the function
   * in this case Initialises the first scene to the title scene
   * sets the current scene to the scene in the dictionary
   */
  goToScene(title)
  {
    for (var i = 0; i < this.titles.length; i++)
    {
      if (this.titles[i] == title)
      {
        this.index = i;
      }
    }

    this.currentScene = this.dictionary[this.index];

  }
  /**
   * goes to the next scene
   * increments the index only if the index is more than 0
   * otherwise the index is set back to 0
   * sets the current scene to the scene in the dictionary
   */
  goToNextScene()
  {
    this.index++;
    if (this.index > this.numOfScenes)
    {
      this.index = 0;
    }
    if (this.index == 2)
    {
      var item = document.getElementById("divId");
      item.parentNode.removeChild(item);
      var item2 = document.getElementById("divId2");
      item2.parentNode.removeChild(item2);
      var item3 = document.getElementById("divId3");
      item3.parentNode.removeChild(item3);

    }

    this.currentScene = this.dictionary[this.index];
    //console.log(  this.currentScene )
  }

  /**
   *  logs the current scene
   * draws the current scene
   */
  render()
  {
  //  var curScene = this.dictionary[this.index];
    this.currentScene.render();
    gameNs.scenetitle = this.titles[this.index]
  }

  getScene()
  {
     return gameNs.scenetitle
  }









}
