Ext.define('LoginApp.view.login.LoginController', {
  extend: 'Ext.app.ViewController',
  
  alias: 'controller.login',

  onLoginClick: function(button) {
    var win = button.up('window');
    var formPanel = win.down('form');
    var userLoginData = formPanel.getValues();
    var loginView = this.getView();

    Ext.Ajax.request({
      // FIXME: url harcoded
      url: 'http://52.91.132.47:3000/users/login',
      method: 'POST',

      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },

      jsonData: {
        email: userLoginData.username,
        password: userLoginData.password
      },

      success: function (response) {
        var token = Ext.util.JSON.decode(response.responseText).id;
        var storage = Ext.util.LocalStorage.get('id')
        storage.setItem('accessToken', token);
        storage.release();

        console.log('accessToken? ' + Ext.util.LocalStorage.get('id').getItem('accessToken'));

        loginView.destroy();

        Ext.create({
          xtype: 'app-main',
        });

      },
      failure: function (response) {
        Ext.Msg.alert("Error", "Your account or password is incorrect");
      }
    });
  }
});
