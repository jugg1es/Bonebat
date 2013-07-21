ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	 'impact.debug.debug', // <- Add this
	
	
    'game.entities.mainNavigation',
    'game.levels.mainNav'
)
.defines(function(){

MyGame = ig.Game.extend({
	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	
	
	init: function() {
		// Initialize your game here; bind keys etc.
		
		this.loadLevel( LevelMainNav );
		
         console.log('init');
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		
		// Add your own, additional update code here
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		//ig.system.setGame(MyStore);
	}
});




// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 30, 320, 240, 2 );
    console.log('start');
});
