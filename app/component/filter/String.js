Ext.define('LoginApp.component.filter.String', {
  extend: 'Ext.grid.filters.filter.String',

  alias: 'filter.string',
  type: 'string',

  itemDefaults: {
    enableKeyEvents: false,
    listeners: {
      /*
      scope: 'controller',
      specialkey: 'onFilterApplied',
      args: [this, 'name']
      */
// -->
      specialkey: function (field, e) {
        // console.log(this.up('gridcolumn').dataIndex);
        // console.log(this.up('gridcolumn').filter.$className);

        if (e.getKey() === e.ENTER) {
          // alert('ok');
          // this.up('gridcolumn').filter.setActive(true);
          console.log('a: ' + this.up('gridcolumn').$className);
          console.log('b: ' + this.up('gridcolumn').filter.$className);
          console.log('c: ' + this.$className);

          var f = this.up('gridcolumn').filter;
          var operator = f.operator;
          var value = f.getValue(field);
          var store = Ext.getStore('orderstore');
          store.onFilter('name', operator, value);
        };
      },
    },
  },
});
