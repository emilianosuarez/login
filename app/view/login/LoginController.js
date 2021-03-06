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
      url: 'http://107.23.193.148:3000/users/login',
      method: 'POST',

      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },

      jsonData: {
        email: userLoginData.username,
        password: userLoginData.password
      },

      // TODO: agregar un metodo set (y get) token para agregarlo al proxy y setear el LocalStorage
      //

      success: function (response) {
        var token = Ext.util.JSON.decode(response.responseText).id;
        var storage = Ext.util.LocalStorage.get('id')
        storage.setItem('accessToken', token);
        storage.release();

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
