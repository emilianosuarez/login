/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('LoginApp.view.main.MainController', {
  extend: 'Ext.app.ViewController',

  alias: 'controller.main',

  onClickButton: function (button) {
    Ext.util.LocalStorage.get('id').removeItem('accessToken');

    this.getView().destroy();

    Ext.create({
      xtype: 'login'
    });
  },

  // FIXME: To be removed
  onFilterApplied: function(filter) {

  }

});
