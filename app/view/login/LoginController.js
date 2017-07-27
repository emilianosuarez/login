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
                var jsonResp = Ext.util.JSON.decode(response.responseText);
                var token = jsonResp.id;
                localStorage.setItem("accessToken", token);

                loginView.destroy();

                Ext.create({
                    xtype: 'app-main',
                    accessToken: token
                });

            },
            failure: function (response) {
                Ext.Msg.alert("Error", "Your account or password is incorrect");
            }
        });
    }
});
