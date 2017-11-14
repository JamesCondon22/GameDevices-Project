
/**
 * A function that acts as a constructer for the square
 * sets the x, y, width, height and color of the rectangle
 *
 */
 class Game
 {
	 constructer()
	 {


	 }

	 draw()
	 {

	 }

	 init()
	 {
		 console.log("Initialising game....");
	 }
	 /**
	  * Helper function that clamps value between min and max and returns value.
	  * Example: clamp(10, 1, 3) will return 3
	  * @param {Integer} value integer value to be clamped.
	  * @param {Integer} min lower range value.
	  * @param {Integer} max upper range value.
	 * @return {Integer} min if value is less than min, max if max is less than value, otherwise value.
	  */
	 clamp(value, min, max)
	 {
	 	if(max<min) {
	 		var temp = min;
	 		min = max;
	 		max = temp;
	 	}
	 	return Math.max(min, Math.min(value, max));
	 }


	 /**
	  * Helper function that returns a string of the form 'rgb(r,g,b)' where
	  * r,g and b are numeric values.
	  * @param {Number} r assumed numeric value for red.
	  * @param {Number} g assumed numeric value for green.
	  * @param {Number} b assumed numeric value for blue.
	 * @return {String} a string of the form 'rgb(r,g,b)' where r,g and b are integers clamped between 0 and 255.
	  */

	 rgb(r, g, b)
	 {
	 	return 'rgb('+clamp(Math.round(r),0,255)+', '+clamp(Math.round(g),0,255)+', '+clamp(Math.round(b),0,255)+')';
	 }


 }
