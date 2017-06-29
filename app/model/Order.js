Ext.define('LoginApp.model.Order', {
    extend: 'LoginApp.model.Base',

    fields: [
        'orderId', 'deliveryTime', 'name', 'createdAt'
    ]
});
