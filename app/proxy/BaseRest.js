Ext.define('LoginApp.proxy.BaseRest', {
  extend: 'Ext.data.proxy.Rest',

  alias: 'proxy.restproxy',

  type: 'rest',

  // FIXME: url harcoded
  url: 'http://52.91.132.47:3000/users/me/orders',
  reader: {
      type: 'json',
      rootProperty: ''
  },

  buildUrl: function(request) {
    var me = this,
        url = me.callParent(arguments);
/*
      if( ! Ext.isEmpty(Helper.apiToken)) {
          url = Ext.urlAppend(url, "token="+Helper.apiToken);
      }
*/
    return url;
  },

});
