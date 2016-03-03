(function () {
   'use strict';
    var self = app.core.framework.modules;
    
    self.mainMenu = function() {};
    
    self.mainMenu.toggleMainMenu = function(ev) {              
        $(".toggle-menu").slideToggle();            
    };
        
    /* Jquery events*/
    $(document).ready(function() {        
        $('#toggleMainMenu').click(self.mainMenu.toggleMainMenu); 
    })   
              
})();

