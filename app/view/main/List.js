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
                type: 'string',
                itemDefaults: {
                    enableKeyEvents: false,
                    listeners: {
                        /*
                        scope: 'controller',
                        specialkey: 'onFilterApplied',
                        args: [this, 'name']
                        */

                        // specialkey: function (field, e) {
                            // controller.main.onFilterApplied(field, e);
                            // LoginApp.app.getController('controller.main').onFilterApplied(field, e);

                            /*
                            if (e.getKey() === e.ENTER) {
                                var f = this.up('gridcolumn').filter;
                                // alert('filtrando... ' + f.getValue(field));
                                alert(this.view); //.getController().onClickButtonFilter(f.getValue(field));
                                // f.task.delay(500, null, null, [f.getValue(field)]);
                            }*/
                        // }
// -->
                        specialkey: function (field, e) {
                            if (e.getKey() === e.ENTER) {
                                var f = this.up('gridcolumn').filter;
                                var operator = f.operator;
                                var value = f.getValue(field);
                                var store = Ext.getStore('orderstore');
                                store.onFilter('name', operator, value);
                            };
                        },

                    },
                },
            }
        },
        {
            xtype: 'datecolumn',
            text: 'Created At',
            dataIndex: 'createdAt',
            flex: 1,
            renderer: Ext.util.Format.dateRenderer('Y-m-d'),
            filter: {
                type: 'date'
            }
        },

    ],
});
