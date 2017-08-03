Ext.define('LoginApp.Application', {
  extend: 'Ext.app.Application',

  name: 'LoginApp',

  launch: function () {
    var accessToken;
    accessToken = Ext.util.LocalStorage.get('id').getItem('accessToken');

    Ext.create({
      xtype: accessToken ? 'app-main' : 'login',
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
