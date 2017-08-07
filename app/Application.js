Ext.define('LoginApp.Application', {
  extend: 'Ext.app.Application',

  name: 'LoginApp',

  launch: function () {
    var accessToken;
    accessToken = Ext.util.LocalStorage.get('id').getItem('accessToken');

    // TODO: quitar el accetoken al proxy: LoginApp.proxy.rest.Base
    
    Ext.create({
      xtype: accessToken ? 'app-main' : 'module-login',
    });
  },

  onAppUpdate: function () {
    Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
      function (choice) {
        if (choice === 'yes') {
          window.location.reload();
        }
      }
    );
  },

});
