/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('LoginApp.view.main.MainController', {
  extend: 'Ext.app.ViewController',

  alias: 'controller.main',

  onClickButton: function (button) {
      // Remove the localStorage key/value
      localStorage.removeItem('accessToken');

      // Remove Main View
      this.getView().destroy();

      // Add the Login Window
      Ext.create({
          xtype: 'login'
      });
  },

  // FIXME: To be removed
  onFilterApplied: function(filter, name) {
  }

});
