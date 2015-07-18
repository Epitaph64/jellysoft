/* 2015 (c) JellySoft 
 * 
 * File written by Garrett Weaver 
 *
 * This javascript file contains functions to generate a tile structure
 */ 

TileState = {
	Dirt   : 0,
	Grass  : 1,
	Cactus : 2
}

function generate(hardness){
	
	var grid = new array(24); 
	
	for(i = 0; i < 24; i++) {
		grid[i] = new array(24);
		for(j = 0; j < 24; j++) {
			grid[i][j] = Dirt; 
		}
	}
	
	var initialPos = {
		x : 0,
		y : 0
	};
	
	var output = {
		tiles : grid; 
		lighteningRate : 1,
		startPos : initialPos
	};
	
	return output; 
}
