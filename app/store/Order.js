Ext.define('LoginApp.store.Order', {
  extend: 'LoginApp.store.Base',

  config: {
    storeId: 'orderstore',
  },

  alias: 'store.order',
  model: 'LoginApp.model.Order',

  proxy: 'rest.base',

});
