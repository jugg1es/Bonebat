
function GameLoader() {
  this.skillCategories = null;
  this.skills = null;
  
  this.statuses = null;
  this.statusRelationships = null;
  this.gear = null;
  
  this.items = null;
  this.victoryConditions = null;
  
  this.players = null;
  this.monsters = null;
  
   bind(this, this.loadData);
}

GameLoader.prototype.fillData = function()
{ 
    console.log('** Fill Data **');
    
    console.log(this.monsters);
    for (var i = 0; i < this.monsters.length; i++) {
      monster = this.monsters[i];
       // console.log(monster);
    }
    $(document).trigger('loadComplete');  
};
GameLoader.prototype.loadData = function()
{ 
    var me = this;
    $.getJSON('http://www.peterroca.com/db/getData.ashx?data=skillcategory&callback=?', null, function (results) {
         me.skillCategories = results;
            $.getJSON('http://www.peterroca.com/db/getData.ashx?data=skills&callback=?', null, function (results) {
                me.skills = results;
                console.log('Skills Downloaded...');               
                $.getJSON('http://www.peterroca.com/db/getData.ashx?data=statuses&callback=?', null, function (results) {
                        me.statuses = results;
                      $.getJSON('http://www.peterroca.com/db/getData.ashx?data=statusrelationships&callback=?', null, function (results) {
                            me.statusRelationships = results;
                             console.log('Statuses Downloaded...');                             
                               $.getJSON('http://www.peterroca.com/db/getData.ashx?data=gear&callback=?', null, function (results) {
                                        me.gear = results;
                                         console.log('Gear Downloaded...');                                         
                                            $.getJSON('http://www.peterroca.com/db/getData.ashx?data=items&callback=?', null, function (results) {
                                                me.items = results;
                                                console.log('Items Downloaded...');                                                
                                                 $.getJSON('http://www.peterroca.com/db/getData.ashx?data=victoryconditions&callback=?', null, function (results) {
                                                         me.victoryConditions = results;
                                                         $.getJSON('http://www.peterroca.com/db/getData.ashx?data=player&callback=?', null, function (results) {
                                                              me.players = results;
                                                              console.log('Players Downloaded...');                                                
                                                                $.getJSON('http://www.peterroca.com/db/getData.ashx?data=monsters&callback=?', null, function (results) {
                                                                    me.monsters = results;
                                                                    console.log('Monsters Downloaded...');  
                                                                    me.fillData();
                                                                    
                                                                  });
       
                                                            });
      
                                                 });
                                           });
                                  });
                                
                               
                      });
                });
    
            });
        
      });   
    
  
};