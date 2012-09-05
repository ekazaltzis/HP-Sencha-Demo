
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
  items : [homebuttons]
});

