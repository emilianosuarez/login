Ext.define('LoginApp.store.Base', {
  extend: 'Ext.data.Store',

  alias: 'store.base',

  autoLoad: true,
  remoteFilter: true,
  remoteSort: true,

  listeners: {
    // FIXME: ver de cambiar a 'onlogin' y quitarlo en logout
    beforeload: function(store) {

      // TODO: setear el token con el metodo set del login

      var accessToken = Ext.util.LocalStorage.get('id').getItem('accessToken');
      this.getProxy().setHeaders({
          'Authorization': accessToken,
      });
    }
  },

  onFilter: function(filters) {
    var property = '';
    var operator = '';
    var value = '';
    var filterQuery = '';
    var stringFilters = [];
    var currentFilter = {};
    var where = {};
    var and = [];
    var queryParams = {};

    Ext.Array.each(filters, function(filter, index) {
      currentFilter = {};
      property = filter.getProperty();
      operator = filter.getOperator();
      value = filter.getValue();

      console.log('onFilter.property: ' + property);
      console.log('onFilter.operator: ' + operator);
      console.log('onFilter.value: ' + value);

      switch (operator) {
        case 'eq':
          if (value instanceof Date) {
            currentFilter[property] = {'gt': value};
            and.push(currentFilter);
            currentFilter = {};
            currentFilter[property] = {'lt': Ext.Date.add(value, Ext.Date.DAY, 1)};
          } else {
            currentFilter[property] = value;
          }
          break;
        case 'in':
          currentFilter[property] = {'inq': value};
          break;
        case 'like':
            currentFilter[property] = {'like': '%' + value + '%'};
          break;
        case 'lt':
          currentFilter[property] = {'lt': value};
          break;
        case 'gt':
          currentFilter[property] = {'gt': value};
          break;
        default:
          currentFilter[property] = {operator: value};
          break;
      }
      and.push(currentFilter);
    });

    where['where'] = {};
    where['where']['and'] = and;

    // FIXME: Remove hard-coded params
    queryParams['params'] = {};
    queryParams['params']['page'] = 1;
    queryParams['params']['start'] = 0;
    queryParams['params']['limit'] = 15;

    if (filters.length) {
      console.log('query: ' + JSON.stringify(where));
      queryParams['params']['filter'] = JSON.stringify(where);
    }

    this.load(queryParams);
},

});
