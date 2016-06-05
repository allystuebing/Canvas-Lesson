/*This is a multi-line javascript comment. Below we create a function called draw. This function will allow us to draw a few squares on our canvas. */
 function draw() {
      var canvas = document.getElementById("canvas"); 
//we create a variable called canvas that accesses our canvas id on our HTML page
      if (canvas.getContext) {										
// we begin an if loop that checks for browser capability. we could add an else component if needed
        var ctx = canvas.getContext("2d");						
// Then we inform the browser that we'll be using 2d rendering content... 

        ctx.fillStyle = "rgb(200,0,0)";								
//red, green, blue
        ctx.fillRect (179, 125, 55, 50);								
// x, y, width, height  ----> I guess it's a rectangle.... ignore earlier comment.... 
        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";                 
//This one includes opacity... or transparency
        ctx.fillRect (123, 125, 55, 50);

      }
    }
    