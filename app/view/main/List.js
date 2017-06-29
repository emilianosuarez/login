Ext.define('LoginApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'LoginApp.store.Order'
    ],

    title: 'Order',

    store: {
        type: 'order'
    },

    plugins: 'gridfilters',

    columns: [
        {
            text: 'Order ID',
            dataIndex: 'orderId',
            filter: {
              type: 'number'
            }
        },
        {
            text: 'Delivery Time',
            dataIndex: 'deliveryTime',
            flex: 1,
            filter: {
                type: 'list'
            }
        },
        {
            text: 'Name',
            dataIndex: 'name',
            flex: 1,
            filter: {
                type: 'string'
            }
        },
        {
            text: 'Created At',
            dataIndex: 'createdAt',
            renderer: Ext.util.Format.dateRenderer('Y-m-d'),
            flex: 1,
            filter: {
                type: 'date'
            }
        },

    ],
});
