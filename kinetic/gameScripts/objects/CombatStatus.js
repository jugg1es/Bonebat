function CombatStatus(name, isOpening) {
  this.name = name;
  this.isOpening = isOpening;
  
}

CombatStatus.prototype.getName = function()
{  
   return this.name;
};

CombatStatus.prototype.getIsOpening = function()
{  
   return this.isOpening;
};
