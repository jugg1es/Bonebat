ig.module(
    'game.entities.mainNavigation'
)
.requires(
    'impact.entity'
)
.defines(function(){

EntityMainNavigation = ig.Entity.extend({
    
    size: {x:320, y:240},
    
    init: function( x, y, settings ) {
        this.parent( x, y, settings );
        
       
    }
});

});