app.views.Home = Ext.extend(Ext.Carousel, {
  title: 'Home',
  iconCls: 'home',
  interval: 50,
  autoPlay: true,
  transitionEasing: 'easeIn' 

  ,dockedItems: [
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
		  		width:  '100%',
		  		height: '100%',
		  		handler: function() {
		  			app.views.viewport.setActiveItem(app.views.map, {type: 'slide', direction: 'left'});
		  		}      
    },
    
  	  	{
		  		xtype: 'button',
		  		cls: 'twitterIcon',
		  		width:  100,
		  		height: 100,
		  		handler: function() {
		  			app.views.viewport.setActiveItem(app.views.twitter, {type: 'slide', direction: 'left'});
		  		}
		  	},
		  	{
		  		xtype: 'button',
		  		cls:  'paymentIcon',
		  		width:  100,
		  		height: 100,
		  		handler: function() {
		  			app.views.viewport.setActiveItem(app.views.payment, {type: 'slide', direction: 'left'});
		  		}
		  	},
		  	{
		  		xtype: 'button',
		  		cls: 'cameraIcon',
		  		width:  100,
		  		height: 100,
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
		  		width:  100,
		  		height: 100,
		  		handler: function() {
		  			app.views.viewport.setActiveItem(app.views.stocks, {type: 'slide', direction: 'left'});
		  		}
		  	},
		  	{
		  		xtype: 'button',
		  		cls: 'settingsIcon',
		  		width:  100,
		  		height: 100,
		  		handler: function() {
		  			app.views.viewport.setActiveItem(app.views.settings, {type: 'slide', direction: 'left'});
		  		}
		  	}
	
  ]
});