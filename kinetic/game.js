var scripts = ['kinetic/gameScripts/worldNavigation.js'];
var stage;
var worldNavMap;
var engine;
var gameStore;
var loader;
var combatantMenu;
function LoadGame() {
    
   bind(this, this.loadComplete);
      
      $(document).on('loadComplete', this.loadComplete);
      $(document).on('worldNavLocationSelected', this.worldNavLocationSelected);
    $(document).on('gameEngineQuit', this.gameEngineQuit);
    $(document).on('storeQuit', this.storeQuit);
    $(document).on('combatantsSelected', this.combatantsSelected);
      
      //gameLoader.js
      loader = new GameLoader();
      loader.loadData();
     
    
}
function loadComplete(evt) {
    //console.log(loader.monsters);
    $('#loading').css('display', 'none');
    selectCombatants();
}
function selectCombatants() {
    combatantMenu = new CombatantMenu(this.stage, loader);
    combatantMenu.showMenu();
    
}
function combatantsSelected(evt, player, monster) {
    console.log('combatants selected');
    StartGame(player, monster);
}
function StartGame(player, monster) {
    
      stage = new Kinetic.Stage({
        container: 'gameCanvas',
        width: 640,
        height: 480
      });
      
    this.human = new CharacterBase(player, true, '');
    this.monster = new CharacterBase(monster, false, '');
    
    worldNavMap= new WorldNavigation(stage);
    engine = new GameplayEngine(stage);
    gameStore = new GameStore(stage);
    
   // worldNavMap.DrawNavMap();
    
    engine.ShowGameplay(this.human);
    
    
}
function storeQuit(evt) {
    gameStore.clearStore();
    worldNavMap.DrawNavMap();
}
function gameEngineQuit(evt) {
    engine.clearGameplay();
    worldNavMap.DrawNavMap();
}
function worldNavLocationSelected(evt, param1) {
    worldNavMap.clearMap();
    switch (param1) {        
        case 'store':
           gameStore.ShowStore();
            break;
        case 'stairs':
            engine.ShowGameplay();
            break;
        case 'arena':
            engine.ShowGameplay();
            break;
        case 'wastes':
            engine.ShowGameplay();
            break;
    }
}

function ResizeGame() {
   /* if (worldNavMap) {
       stage.setWidth( $(window).width());
       stage.setHeight( $(window).height());
        worldNavMap.DrawNavMap();
    }*/
} 

var rtime = new Date(1, 1, 2000, 12,00,00);
var timeout = false;
var delta = 200;
$(window).resize(function() {
    rtime = new Date();
    if (timeout === false) {
        timeout = true;
        setTimeout(resizeend, delta);
    }
});

function resizeend() {
    if (new Date() - rtime < delta) {
        setTimeout(resizeend, delta);
    } else {
        timeout = false;
       ResizeGame();
    }               
}

function bind(scope, fn) {
   return function() {
      return fn.apply(scope, arguments);
   }
}