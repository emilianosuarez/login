Ext.define('LoginApp.store.Order', {
    extend: 'Ext.data.Store',

    alias: 'store.order',
    autoLoad: true,
    // autoSync: true,

    model: 'LoginApp.model.Order',

    proxy: {
        type: 'rest',
        // FIXME: url harcoded
        url: 'http://52.91.132.47:3000/users/me/orders?access_token=' + localStorage.getItem("accessToken"),
        reader: {
            type: 'json',
            rootProperty: ''
        }
    },
});
