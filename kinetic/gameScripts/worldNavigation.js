function WorldNavigation(stage) {
    this.stage = stage;
    
    this.mapLayer = new Kinetic.Layer();
    this.locationLayer = new Kinetic.Layer();
    
    
   
   this.InitializeLocations();
   bind(this, this.locationSelected);
}
WorldNavigation.prototype.DrawNavMap = function()
{
   this.stage.add(this.mapLayer);
   this.stage.add(this.locationLayer);
    this.mapLayer.clear();
    this.locationLayer.clear();
   this.InitializeNavMap();
   this.DrawLocations();
   this.stage.draw();
};

WorldNavigation.prototype.DrawLocations = function()
{
    
     this.locationLayer.add(this.storeLocation);
     this.locationLayer.add(this.stairLocation);
     this.locationLayer.add(this.wastesLocation);
     this.locationLayer.add(this.arenaLocation);
};
WorldNavigation.prototype.clearMap = function()
{
    
    this.mapLayer.remove();
    this.locationLayer.remove();
    
};
WorldNavigation.prototype.locationSelected = function()
{
    $(document).trigger('worldNavLocationSelected', [this.getName()]);    
};

WorldNavigation.prototype.locationOver = function()
{
     this.setFill('#ff0000');
    this.getLayer().draw();
    this.getLayer().drawHit();
};
WorldNavigation.prototype.locationOut = function()
{
    this.setFill(null);
    this.getLayer().draw();
    this.getLayer().drawHit();
    
};
WorldNavigation.prototype.InitializeLocations = function()
{
    this.storeLocation = new Kinetic.Rect({
        name: 'store',
          x: 212,
        y: 47,
        width: 117,
        height: 82,
        stroke: '#000000',
        strokeWidth: 4
       
      });
   this.storeLocation.on('click', this.locationSelected);
   this.storeLocation.on('mouseover', this.locationOver);
   this.storeLocation.on('mouseout', this.locationOut);
   this.CreateLabel(this.storeLocation, "Store");
   
   this.stairLocation = new Kinetic.Rect({
        name: 'stairs',
        x: 298,
        y: 290,
        width: 127,
        height: 85,
        stroke: '#000000',
        strokeWidth: 4
      });
   
   this.stairLocation.on('click', this.locationSelected);
   this.stairLocation.on('mouseover', this.locationOver);
   this.stairLocation.on('mouseout', this.locationOut);
   this.CreateLabel(this.stairLocation, "The Stairway");
   
    this.arenaLocation = new Kinetic.Rect({
        
        name: 'arena',
              x: 174,
        y: 346,
        width: 83,
        height: 70,
        stroke: '#000000',
        strokeWidth: 4
     
      });
     
   this.arenaLocation.on('click', this.locationSelected);
   this.arenaLocation.on('mouseover', this.locationOver);
   this.arenaLocation.on('mouseout', this.locationOut);
   this.CreateLabel(this.arenaLocation, "The Arena");
    this.wastesLocation = new Kinetic.Rect({
        
        name: 'wastes',
          x: 227,
        y: 164,
        width: 250,
        height: 92,
        stroke: '#000000',
        strokeWidth: 4
       
      });
      
      
   this.wastesLocation.on('click', this.locationSelected);
   this.wastesLocation.on('mouseover', this.locationOver);
   this.wastesLocation.on('mouseout', this.locationOut);
   this.CreateLabel(this.wastesLocation, "The Wastes");
};
WorldNavigation.prototype.CreateLabel = function(location, label)
{
    
      var locationLabel = new Kinetic.Text({
        x: location.getX(),
        y: location.getY()-20,
        text: label,
        fontSize: 18,
        fontFamily: 'Calibri',
        fill: '#000',
      });
    
     this.locationLayer.add(locationLabel);
};
WorldNavigation.prototype.InitializeNavMap = function()
{
    var water = new Kinetic.Rect({
    x: 0,
    y: 0,
    width: this.stage.getWidth(),
    height: this.stage.getHeight(),  
        fill: '#6FA2FF'
      });
    
  this.mapLayer.add (water);
    
    var mapGroup = new Kinetic.Group();
    
    mapGroup.add( new Kinetic.Ellipse({
        x: 274,  y: 123,
        radius: { x: 137, y: 106 },
        fill: '#d1c379'
      }));
    
    mapGroup.add( new Kinetic.Ellipse({
        x: 326,  y: 322,
        radius: { x: 148, y: 112 },
        fill: '#d1c379'
      }));
    mapGroup.add( new Kinetic.Ellipse({
        x: 260,  y: 225,
        radius: { x: 83, y: 44 },
        fill: '#d1c379'
      }));
    mapGroup.add( new Kinetic.Ellipse({
        x: 229,  y: 354,
        radius: { x: 91, y: 56 },
        fill: '#d1c379'
      }));
    mapGroup.add( new Kinetic.Ellipse({
        x: 198,  y: 396,
        radius: { x: 56, y: 56 },
        fill: '#d1c379'
      }));
     mapGroup.add( new Kinetic.Ellipse({
        x: 239,  y: 411,
        radius: { x: 38, y: 32 },
        fill: '#d1c379'
      }));
     mapGroup.add( new Kinetic.Ellipse({
        x: 385,  y: 205,
        radius: { x: 132, y: 109 },
        fill: '#d1c379'
      }));
  this.mapLayer.add (mapGroup);
};



