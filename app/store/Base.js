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
      // this.transformFilters(store);
      return true;
    }
  },

/*
  transformFilters: function(store) {
    var filters = store.getFilters();

    var orderFilter = new Ext.util.Filter({
        property: 'orderId',
        value   : 83
    });

    filters.add(orderFilter);
  },
*/

  onFilter: function(filters) {

    var property = '';
    var operator = '';
    var value = '';

    Ext.Array.each(filters, function(filter, index) {
      property = filter.getProperty();
      operator = filter.getOperator();
      value = filter.getValue();
      console.log('onFilter.property: ' + property);
      console.log('onFilter.operator: ' + operator);
      console.log('onFilter.value: ' + value);
    });

    /*
    var filter = '';

    if (operator == 'like') {
      filter = "\"" + property + "\"" + ": {\"like\": \"%" + value + "%\"}";
    }

    // FIXME: Remove hard-coded params
    var store = Ext.getStore('orderstore');

    store.load({
      params: {
        page: 1,
        start: 0,
        limit: 15,
        filter: "{\"where\": {" + filter + "}}",
      },
    });
  },
  */
},

});
