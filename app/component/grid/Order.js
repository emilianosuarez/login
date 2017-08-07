Ext.define('LoginApp.component.grid.Order', {
  extend: 'LoginApp.component.grid.Base',
  xtype: 'mainlist',

  requires: [
    'LoginApp.store.Order',
  ],

  title: 'Order',

  store: {
    type: 'order'
  },

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
      },
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
