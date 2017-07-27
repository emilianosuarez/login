Ext.define('LoginApp.store.Order', {
    extend: 'Ext.data.Store',

    config: {
        storeId: 'orderstore',
        accessToken: ''
    },

    alias: 'store.order',
    model: 'LoginApp.model.Order',
    autoLoad: true,

    // autoSync: true,
    // remoteFilter: true,
    // remoteSort: true,

    proxy: {
        type: 'rest',
        headers: {
            'Authorization': localStorage.getItem("accessToken"),
        },
        // FIXME: url harcoded
        url: 'http://52.91.132.47:3000/users/me/orders',
        reader: {
            type: 'json',
            rootProperty: ''
        },
    },

    onFilter: function(property, operator, value) {
        var filter = '';

        if (operator == 'like') {
          filter = "\"" + property + "\"" + ": {\"like\": \"%" + value + "%\"}";
        }
        // console.log('filter: ' + "{\"where\": {" + filter + "}}");

        // FIXME: Remove hard-coded params
        var store = Ext.getStore('orderstore');
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
