function CharacterBase(record, isPlayer, displayPath) {
    
  this.isPlayer = isPlayer;
  this.displayPath = displayPath;
  
  this.skills = [];
  this.activeStatuses = [];
  this.activeBuffs = [];
  this.items = [];
  this.gear = [];
  
  if(isPlayer){ 
      this.initializePlayer(record);
  }
  else {
      this.initializeMonster(record);
  }
 
}
CharacterBase.prototype.initializePlayer = function(player)
{  
  this.id = player.PlayerID;
  this.name = player.PlayerName;
  this.hitPoints = player.MaxHitpoints;
  
    
  
};
CharacterBase.prototype.initializeMonster = function(monster)
{  
    this.id = monster.MonsterID;
  this.name = monster.MonsterName;
  this.hitPoints = monster.HitPoints;
  
};
CharacterBase.prototype.getIsPlayer = function()
{  
   return this.isPlayer;
};
CharacterBase.prototype.getDisplayPath = function()
{  
   return this.displayPath;
};

CharacterBase.prototype.getName = function()
{  
   return this.name;
};
CharacterBase.prototype.getSkills = function()
{  
   return this.skills;
};
CharacterBase.prototype.getActiveStatuses = function()
{  
   return this.activeStatuses;
};
CharacterBase.prototype.getActiveBuffs = function()
{  
   return this.activeStatuses;
};
CharacterBase.prototype.addSkill = function(skill)
{  
   this.skills.push(skill);
};
CharacterBase.prototype.addActiveStatuses = function(status)
{  
   this.activeStatuses.push(status);
};


CharacterBase.prototype.evaluate = function()
{
    
  
};
