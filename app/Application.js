Ext.define('LoginApp.Application', {
    extend: 'Ext.app.Application',

    name: 'LoginApp',

    stores: [
        // TODO: add global / shared stores here
    ],


    launch: function () {

        // It's important to note that this type of application could use
        // any type of storage, i.e., Cookies, LocalStorage, etc.
        var accessToken;

        // Check to see the current value of the localStorage key
        accessToken = localStorage.getItem("accessToken");

        // This ternary operator determines the value of the TutorialLoggedIn key.
        // If TutorialLoggedIn isn't true, we display the login window,
        // otherwise, we display the main view
        Ext.create({
            xtype: accessToken ? 'app-main' : 'login'
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
    }
});
