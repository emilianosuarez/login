Ext.define('LoginApp.store.Base', {
  extend: 'Ext.data.Store',

  alias: 'store.base',

  autoLoad: true,
  remoteFilter: true,
  remoteSort: true,

  listeners: {
    beforeload: function(store) {
      var accessToken = Ext.util.LocalStorage.get('id').getItem('accessToken');
      this.getProxy().setHeaders({
          'Authorization': accessToken,
      });
      return true;
    }
  },

});
