function SoundManager()
{

	//an object to hold a name for each sound and its associated buffer (memory holding the sound)
	this.audioBuffers={}

	//required for managing and for playing any sound.  Best practise is one per page.
	//It is setup in init()
	this.audioContext = null;

}


SoundManager.prototype.playSound = function(name, loop, value)
{
  console.log(this.audioBuffers[name]);
  if(this.audioBuffers[name] == undefined)
  {
    console.log("Sound '"+name+"' doesn't exist or hasn't been loaded")
    return;
  }
  //retrieve the buffer we stored earlier
  var audioBuffer = this.audioBuffers[name];

	var gain = this.audioContext.createGain()
	gain.gain.value = value
  //create a buffer source - used to play once and then a new one must be made
  var source = this.audioContext.createBufferSource();
  source.buffer = audioBuffer;
	source.loop = loop;
	source.connect(gain)
	gain.connect(this.audioContext.destination)

  //source.connect(this.audioContext.destination);
  source.start(0); // Play immediately.
}


/**
Loads a sound file into an audio buffer
@param url is the url to the sound file - you can also use relative path
@param name is you give the sound, it is stored
*/
SoundManager.prototype.loadSoundFile = function (name, url)
{
	var that = this;
  console.log(url);

  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'arraybuffer';

  xhr.onload = function(e) {

      //buffer containing sound returned by xhr
      var arrayBuffer=this.response;

      that.audioContext.decodeAudioData(arrayBuffer, function(buffer) {
      //associate the audio buffer with the sound name so can use the decoded audio later.
      that.audioBuffers[name]=buffer;

      }, function(e) {
      console.log('Error decoding file', e);
    });

  };

  //send the xhr request to download the sound file
  xhr.send();
}


/**
*init the audio context
*This function is taken directly from http://www.html5rocks.com/en/tutorials/webaudio/intro/
*/
SoundManager.prototype.init = function ()
{
  try {
    // Fix up for prefixing
    window.AudioContext = window.AudioContext||window.webkitAudioContext;
    this.audioContext = new AudioContext();
  }
  catch(e) {
    alert('Web Audio API is not supported in this browser');
  }
}
