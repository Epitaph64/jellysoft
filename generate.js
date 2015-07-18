/* 2015 (c) JellySoft 
 * 
 * File written by Garrett Weaver 
 *
 * This javascript file contains functions to generate a tile structure
 */ 

TileState = {
	Dirt   : 0,
	Grass  : 1,
	Cactus : 2,
	Rock   : 3
}

function generate(hardness){
	
	var grid = new Array(24); 
	
	for(i = 0; i < 24; i++) {
		grid[i] = new Array(24);
		
		// If you want to insert custom values, remove this for loop and hard code the values in after the i for loop ends 
		for(j = 0; j < 24; j++) {
			grid[i][j] = TileState.Dirt; 
		}
	}
	
	var initialPos = {
		x : 0,
		y : 0
	};
	
	if(hardness < 3) {
		grid[12][12] = TileState.Cactus; 
		grid[11][12] = TileState.Grass; 
	}
	else if (hardness >= 3){
		initialPos.x = 11;
		initialPos.y = 23;
		
		//Cacti
		grid[0][2] = TileState.Cactus;
		grid[0][3] = TileState.Cactus;
		grid[1][2] = TileState.Cactus;
		grid[1][3] = TileState.Cactus;
		grid[0][17] = TileState.Cactus;
		grid[0][18] = TileState.Cactus;
		grid[9][2] = TileState.Cactus;
		grid[9][3] = TileState.Cactus;
		grid[7][7] = TileState.Cactus;
		grid[7][8] = TileState.Cactus;
		grid[6][17] = TileState.Cactus;
		grid[6][18] = TileState.Cactus;
		grid[10][22] = TileState.Cactus;
		grid[10][23] = TileState.Cactus;
		
		for(i = 0; i <= 1; i++) {
			for(j = 4; j <= 11; j++) {
				grid[i][j] = TileState.Grass;
			}
		}
		
		for(i = 0; i <= 1; i++) {
			for(j = 14; j <= 17; j++) {
				grid[i][j] = TileState.Grass;
			}
		}
		
		for(i = 0; i <= 1; i++) {
			for(j = 20; j <= 23; j++) {
				grid[i][j] = TileState.Grass;
			}
		}
		
		for(i = 0; i <= 1; i++) {
			for(j = 0; j <= 1; j++) {
				grid[i][j] = TileState.Rock;
			}
		}
		for(i = 0; i <= 1; i++) {
			for(j = 12; j <= 13; j++) {
				grid[i][j] = TileState.Rock;
			}
		}
		
		for(i = 2; i <= 3; i++) {
			for(j = 0; j <= 3; j++) {
				grid[i][j] = TileState.Grass;
			}
		}
		
		for(i = 2; i <= 3; i++) {
			for(j = 4; j <= 5; j++) {
				grid[i][j] = TileState.Rock;
			}
		}
		
		for(i = 2; i <= 3; i++) {
			for(j = 7; j <= 8; j++) {
				grid[i][j] = TileState.Grass;
			}
		}
		
		for(i = 2; i <= 3; i++) {
			for(j = 9; j <= 11; j++) {
				grid[i][j] = TileState.Rock;
			}
		}
		
		for(i = 2; i <= 3; i++) {
			for(j = 14; j <= 15; j++) {
				grid[i][j] = TileState.Grass;
			}
		}
		
		for(i = 2; i <= 3; i++) {
			for(j = 16; j <= 17; j++) {
				grid[i][j] = TileState.Rock;
			}
		}
		
		for(i = 2; i <= 3; i++) {
			for(j = 18; j <= 19; j++) {
				grid[i][j] = TileState.Grass;
			}
		}
		
		for(i = 0; i <= 1; i++) {
			for(j = 20; j <= 21; j++) {
				grid[i][j] = TileState.Rock;
			}
		}
		
		for(i = 2; i <= 3; i++) {
			for(j = 22; j <= 23; j++) {
				grid[i][j] = TileState.Grass;
			}
		}
		
		for(i = 4; i <= 5; i++) {
			for(j = 0; j <= 1; j++) {
				grid[i][j] = TileState.Grass;
			}
		}
		
		for(i = 4; i <= 5; i++) {
			for(j = 7; j <= 8; j++) {
				grid[i][j] = TileState.Rock;
			}
		}
		
		for(i = 4; i <= 5; i++) {
			for(j = 22; j <= 23; j++) {
				grid[i][j] = TileState.Grass;
			}
		}
		
		for(i = 4; i <= 5; i++) {
			for(j = 7; j <= 8; j++) {
				grid[i][j] = TileState.Rock;
			}
		}
		
		for(i = 6; i <= 7; i++) {
			for(j = 0; j <= 1; j++) {
				grid[i][j] = TileState.Rock;
			}
		}
		
		for(i = 6; i <= 7; i++) {
			for(j = 2; j <= 3; j++) {
				grid[i][j] = TileState.Grass;
			}
		}
		
		for(i = 6; i <= 7; i++) {
			for(j = 5; j <= 6; j++) {
				grid[i][j] = TileState.Rock;
			}
		}
		
		for(i = 6; i <= 7; i++) {
			for(j = 7; j <= 8; j++) {
				grid[i][j] = TileState.Grass;
			}
		}
		
		for(i = 6; i <= 7; i++) {
			for(j = 12; j <= 13; j++) {
				grid[i][j] = TileState.Rock;
			}
		}
		
		for(i = 6; i <= 7; i++) {
			for(j = 14; j <= 15; j++) {
				grid[i][j] = TileState.Grass;
			}
		}
		
		for(i = 6; i <= 7; i++) {
			for(j = 16; j <= 19; j++) {
				grid[i][j] = TileState.Rock;
			}
		}
		
		for(i = 6; i <= 7; i++) {
			for(j = 22; j <= 23; j++) {
				grid[i][j] = TileState.Grass;
			}
		}
		
		for(i = 8; i <= 9; i++) {
			for(j = 12; j <= 13; j++) {
				grid[i][j] = TileState.Rock;
			}
		}
		
		for(i = 8; i <= 9; i++) {
			for(j = 14; j <= 15; j++) {
				grid[i][j] = TileState.Grass;
			}
		}
		
		for(i = 10; i <= 11; i++) {
			for(j = 0; j <= 1; j++) {
				grid[i][j] = TileState.Rock;
			}
		}
		
		for(i = 10; i <= 11; i++) {
			for(j = 3; j <= 6; j++) {
				grid[i][j] = TileState.Grass;
			}
		}
		for(i = 10; i <= 11; i++) {
			for(j = 7; j <= 13; j++) {
				grid[i][j] = TileState.Rock;
			}
		}
		
		for(i = 10; i <= 11; i++) {
			for(j = 14; j <= 15; j++) {
				grid[i][j] = TileState.Grass;
			}
		}
		
		for(i = 10; i <= 11; i++) {
			for(j = 18; j <= 19; j++) {
				grid[i][j] = TileState.Cactus;
			}
		}
		
		for(i = 10; i <= 11; i++) {
			for(j = 20; j <= 21; j++) {
				grid[i][j] = TileState.Rock;
			}
		}
		
		for(i = 12; i <= 13; i++) {
			for(j = 0; j <= 1; j++) {
				grid[i][j] = TileState.Rock;
			}
		}
		
		for(i = 12; i <= 13; i++) {
			for(j = 3; j <= 6; j++) {
				grid[i][j] = TileState.Grass;
			}
		}
		for(i = 12; i <= 13; i++) {
			for(j = 7; j <= 8; j++) {
				grid[i][j] = TileState.Cactus;
			}
		}
		for(i = 12; i <= 13; i++) {
			for(j = 10; j <= 11; j++) {
				grid[i][j] = TileState.Rock;
			}
		}
		
		for(i = 12; i <= 13; i++) {
			for(j = 18; j <= 19; j++) {
				grid[i][j] = TileState.Rock;
			}
		}
		
		for(i = 12; i <= 13; i++) {
			for(j = 20; j <= 21; j++) {
				grid[i][j] = TileState.Grass;
			}
		}
		
		for(i = 12; i <= 13; i++) {
			for(j = 22; j <= 23; j++) {
				grid[i][j] = TileState.Rock;
			}
		}
		
		for(i = 14; i <= 15; i++) {
			for(j = 0; j <= 3; j++) {
				grid[i][j] = TileState.Grass;
			}
		}
		
		for(i = 14; i <= 15; i++) {
			for(j = 4; j <= 5; j++) {
				grid[i][j] = TileState.Rock;
			}
		}
		
		for(i = 14; i <= 15; i++) {
			for(j = 7; j <= 8; j++) {
				grid[i][j] = TileState.Grass;
			}
		}
		
		for(i = 14; i <= 15; i++) {
			for(j = 10; j <= 11; j++) {
				grid[i][j] = TileState.Rock;
			}
		}
		
		for(i = 14; i <= 15; i++) {
			for(j = 0; j <= 3; j++) {
				grid[i][j] = TileState.Grass;
			}
		}
		
		for(i = 14; i <= 15; i++) {
			for(j = 4; j <= 5; j++) {
				grid[i][j] = TileState.Rock;
			}
		}
		
		for(i = 14; i <= 15; i++) {
			for(j = 7; j <= 8; j++) {
				grid[i][j] = TileState.Grass;
			}
		}
		
		for(i = 14; i <= 15; i++) {
			for(j = 10; j <= 11; j++) {
				grid[i][j] = TileState.Rock;
			}
		}
		
		for(i = 14; i <= 15; i++) {
			for(j = 14; j <= 15; j++) {
				grid[i][j] = TileState.Grass;
			}
		}
		
		for(i = 14; i <= 15; i++) {
			for(j = 16; j <= 17; j++) {
				grid[i][j] = TileState.Rock;
			}
		}
		
		for(i = 16; i <= 17; i++) {
			for(j = 0; j <= 1; j++) {
				grid[i][j] = TileState.Grass;
			}
		}
		
		for(i = 16; i <= 17; i++) {
			for(j = 2; j <= 3; j++) {
				grid[i][j] = TileState.Cactus;
			}
		}
		
		for(i = 16; i <= 17; i++) {
			for(j = 7; j <= 8; j++) {
				grid[i][j] = TileState.Rock;
			}
		}
		
		for(i = 16; i <= 17; i++) {
			for(j = 9; j <= 11; j++) {
				grid[i][j] = TileState.Grass;
			}
		}
		
		for(i = 16; i <= 17; i++) {
			for(j = 20; j <= 21; j++) {
				grid[i][j] = TileState.Rock;
			}
		}
		
		for(i = 16; i <= 17; i++) {
			for(j = 22; j <= 23; j++) {
				grid[i][j] = TileState.Grass;
			}
		}
		
		for(i = 18; i <= 19; i++) {
			for(j = 0; j <= 3; j++) {
				grid[i][j] = TileState.Grass;
			}
		}
		
		for(i = 18; i <= 19; i++) {
			for(j = 4; j <= 5; j++) {
				grid[i][j] = TileState.Rock;
			}
		}
		
		for(i = 18; i <= 19; i++) {
			for(j = 7; j <= 8; j++) {
				grid[i][j] = TileState.Grass;
			}
		}
		
		for(i = 18; i <= 19; i++) {
			for(j = 9; j <= 15; j++) {
				grid[i][j] = TileState.Rock;
			}
		}
		
		for(i = 18; i <= 19; i++) {
			for(j = 20; j <= 21; j++) {
				grid[i][j] = TileState.Grass;
			}
		}
		
		for(i = 18; i <= 19; i++) {
			for(j = 22; j <= 23; j++) {
				grid[i][j] = TileState.Cactus;
			}
		}
		
		for(i = 20; i <= 21; i++) {
			for(j = 20; j <= 21; j++) {
				grid[i][j] = TileState.Rock;
			}
		}
		
		for(i = 20; i <= 21; i++) {
			for(j = 20; j <= 23; j++) {
				grid[i][j] = TileState.Grass;
			}
		}
		
		for(i = 22; i <= 23; i++) {
			for(j = 0; j <= 10; j++) {
				grid[i][j] = TileState.Rock;
			}
		}
		
		for(i = 22; i <= 23; i++) {
			for(j = 13; j <= 23; j++) {
				grid[i][j] = TileState.Rock;
			}
		}
	}
	
	
	
	var output = {
		tiles : grid,
		lighteningRate : 1,
		startPos : initialPos
	};
	
	return output; 
}
