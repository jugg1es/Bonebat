function CombatantMenu(stage, loader) {
    this.stage = stage;
    this.loader = loader;
    this.selectedPlayer = null;
    this.selectedMonster = null;
   
}

CombatantMenu.prototype.clearMenu = function()
{  
     $('#combatantMenu').remove();
};
CombatantMenu.prototype.showMenu = function()
{
    this.initialize();
    
};

CombatantMenu.prototype.initialize = function()
{
   $('body').prepend('<div id="combatantMenu"><div  class="combatantDiv">Select player<br/><div id="combatantPlayer"></div></div><div  class="combatantDiv">Select monster<br/><div id="combatantMonster"></div></div>' + 
                '<div class="combatantSelectButtons"><div id="btnSelectCombatants">Select</div></div></div>');
     $('#btnSelectCombatants').bind('click', {self:this}, this.useSelectedCombatants);
    for (var i = 0; i < this.loader.monsters.length; i++) {
      monster = this.loader.monsters[i];
       $('#combatantMonster').append('<div class="monster combatant" id="' + monster.MonsterID + '">' + monster.MonsterName + '</div>');
       
    }
     $(".monster").on("click", this.doSelectMonsterCombatants);
     
      for (var i = 0; i < this.loader.players.length; i++) {
      player = this.loader.players[i];
       $('#combatantPlayer').append('<div class="player combatant" id="' + player.PlayerID + '">' + player.PlayerName + '</div>');
       
    }
     $(".player").on("click", this.doSelectPlayerCombatants);
     
};
CombatantMenu.prototype.useSelectedCombatants = function(evt)
{
    var me = evt.data.self;
     var playerID =  $("#combatantPlayer .selectedCombatant").attr('id');
     var monsterID =  $("#combatantMonster .selectedCombatant").attr('id');
     var monster, player;
    
      for (var i = 0; i < me.loader.monsters.length; i++) {
        if(me.loader.monsters[i].MonsterID == monsterID) {
            
            monster = me.loader.monsters[i];
        }       
    }
    for (var i2 = 0; i2 < me.loader.players.length; i2++) {
     
       if(me.loader.players[i2].PlayerID == playerID) {            
             player = me.loader.players[i2];
        }              
    }
    console.log(player);
    console.log(monster);
    
    $(document).trigger('combatantsSelected', [player, monster]);  
    me.clearMenu();
      
};
CombatantMenu.prototype.doSelectMonsterCombatants = function(evt)
{
      $(".monster").removeClass('selectedCombatant');
      $(this).addClass('selectedCombatant');
      
};
CombatantMenu.prototype.doSelectPlayerCombatants = function(evt)
{
      $(".player").removeClass('selectedCombatant');
      $(this).addClass('selectedCombatant');
      
};