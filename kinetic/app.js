requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'kinetic/',
    urlArgs: 'bust=v2'
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    /*paths: {
        app: '../app'
    }*/
});

// Start the main app logic.
requirejs(['gameScripts/worldNavigation',
        'gameScripts/gameStore',
        'gameScripts/gameplayEngine',
        'game',
        'gameScripts/gameLoader',
        'gameScripts/CombatantMenu',
        'gameScripts/objects/CharacterBase',
        'gameScripts/objects/CombatStatus',
        'gameScripts/objects/ConsumableItem',
        'gameScripts/objects/GearItem',
        'gameScripts/objects/Skill'
        ],
function   () {
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
   // StartGame();
   
   
    //game.js        
    LoadGame();
});

if(typeof(console) === 'undefined') {
    var console = {}
    console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = function() {};
}