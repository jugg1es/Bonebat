function Skill(name, category) {
  this.name = name;
  this.category = category;
}

Skill.prototype.getName = function()
{  
   return this.name;
};
Skill.prototype.getCategory = function()
{  
   return this.category;
};