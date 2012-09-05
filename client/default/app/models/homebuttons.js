app.models.HomeButtons = Ext.regModel('app.models.HomeButtons', {
    fields: ['button'],
});

app.stores.home = new Ext.data.Store({
  model: 'app.models.HomeButtons',
    data : 
      [
        { button:
   	  	     {
		  		      xtype: 'button',
		  		      cls: 'cameraIcon',
		  		      handler: function() {
		  		      Ext.dispatch({
			              controller: app.controllers.camera, action: 'openCamera'
			          });
		  		     }
		  	     },
        },
        { button:
       	     {
		  		      xtype: 'button',
		  		      cls: 'cameraIcon',
		  		      handler: function() {
		  		      Ext.dispatch({
			              controller: app.controllers.camera, action: 'openCamera'
			          });
		  		     }
		  	     },
        }
      ]
});