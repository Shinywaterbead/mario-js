
printPyramid(5);


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
    var i;
    for (i = 0; i < height; i++) { 
      let numSpaces = height-(i+1);
      let numBricks = i + 2;  
      let spaces = " ".repeat(numSpaces);
      let bricks = "#".repeat(numBricks);
        console.log(spaces + bricks);   
    } 
}
