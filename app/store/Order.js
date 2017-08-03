Ext.define('LoginApp.store.Order', {
  extend: 'LoginApp.store.Base',

  config: {
    storeId: 'orderstore',
  },

  alias: 'store.order',
  model: 'LoginApp.model.Order',

  proxy: 'restproxy',

  onFilter: function(property, operator, value) {
/*
    var accessToken;
    var storeSession = Ext.create('Ext.data.Store', {
        model: "Session"
    });
    storeSession.load();
    // store.add({accessToken: 'aascasfas'});
    // store.sync();

    if (storeSession.first()) {
        accessToken = storeSession.first().data.accessToken;
    }
    console.log('accessToken: ' + accessToken);
*/
    var filter = '';

    if (operator == 'like') {
      filter = "\"" + property + "\"" + ": {\"like\": \"%" + value + "%\"}";
    }

    // FIXME: Remove hard-coded params
    var store = Ext.getStore('orderstore');
    /*
    store.getProxy().setHeaders({
        'Authorization': accessToken,
    });
    */

    store.load({
      params: {
        page: 1,
        start: 0,
        limit: 10,
        filter: "{\"where\": {" + filter + "}}",
      },
    });
  },

});
