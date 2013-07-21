function GameStore(stage) {
    this.stage = stage;
    
    this.buttonLayer = new Kinetic.Layer();
   
}

GameStore.prototype.clearStore = function()
{  
    this.buttonLayer.remove();
};
GameStore.prototype.ShowStore = function()
{
   this.stage.add(this.buttonLayer);
    this.InitializeButtons();
    
   this.stage.draw();
};

GameStore.prototype.InitializeButtons = function()
{
    this.backButton = new Kinetic.Rect({
        name: 'store',
          x: 3,
        y: 3,
        width: 100,
        height: 40,
        fill: 'red'
       
      });
   this.backButton.on('click', this.locationSelected);
   
     this.buttonLayer.add(this.backButton);
    
};
GameStore.prototype.locationSelected = function()
{
    $(document).trigger('storeQuit');    
  
    
};
