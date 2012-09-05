app.views.Home = Ext.extend(Ext.Panel, {
  scroll: 'horizontal',
layout: {
        type: 'hbox',
        align: 'center',
        pack: 'center'
    },
    dockedItems: [
  	{
  		dock: 'top',
  		xtype: 'toolbar',
  		title: '<img class="logo" src="app/images/logo.png" />',
  	}
  ],

  items: [
    {
  	  		xtype: 'button',
		  		cls: 'mapIcon',
		  		handler: function() {
		  			app.views.viewport.setActiveItem(app.views.map, {type: 'slide', direction: 'left'});
		  		}      
    },
    
  	  	{
		  		xtype: 'button',
		  		cls: 'twitterIcon',
		  		handler: function() {
		  			app.views.viewport.setActiveItem(app.views.twitter, {type: 'slide', direction: 'left'});
		  		}
		  	},
		  	{
		  		xtype: 'button',
		  		cls:  'paymentIcon',
		  		handler: function() {
		  			app.views.viewport.setActiveItem(app.views.payment, {type: 'slide', direction: 'left'});
		  		}
		  	},
		  	{
		  		xtype: 'button',
		  		cls: 'cameraIcon',
		  		handler: function() {
		  		  Ext.dispatch({
			        controller: app.controllers.camera,
			        action: 'openCamera'
			      });
		  		}
		  	},
		  	{
		  		xtype: 'button',
		  		cls: 'webviewIcon',
		  		handler: function() {
		  			app.views.viewport.setActiveItem(app.views.stocks, {type: 'slide', direction: 'left'});
		  		}
		  	},
		  	{
		  		xtype: 'button',
		  		cls: 'settingsIcon',
		  		handler: function() {
		  			app.views.viewport.setActiveItem(app.views.settings, {type: 'slide', direction: 'left'});
		  		}
		  	}
  ]
});