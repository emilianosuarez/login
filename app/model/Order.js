Ext.define('LoginApp.model.Order', {
    extend: 'LoginApp.model.Base',

    fields: [
        'orderId',
        'deliveryTime',
        'name',
        {name: 'createdAt', type: 'date'}
    ],

});
