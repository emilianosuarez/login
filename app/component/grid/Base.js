Ext.define('LoginApp.component.grid.Base', {
  extend: 'Ext.grid.Panel',

  renderTo: Ext.getBody(),

  plugins: 'gridfilters',
  
  listeners: {
    filterchange: function(store, filters) {
      store.onFilter(filters);
    }
  },
});
