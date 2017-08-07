Ext.define('LoginApp.proxy.rest.Base', {
  extend: 'Ext.data.proxy.Rest',

  alias: 'proxy.rest.base',

  type: 'rest',

  // FIXME: url harcoded
  url: 'http://107.23.193.148:3000/users/me/orders',
  reader: {
    type: 'json',
    rootProperty: ''
  },

  buildUrl: function(request) {

    var me = this;
    me.setExtraParam('a', 56);
    var url = me.callParent(arguments);

    console.log('request:' + request.$className);
    console.log('me:' + me.$className);
    console.log('this:' + this.$className);
    console.log('url:' + url);
    console.log(request._params);
    console.log(request._params.filter);

    // console.log(this.getExtraParams().toString() );
    // console.log('isInstance: ' . request.getProxy() );
/*
      if( ! Ext.isEmpty(Helper.apiToken)) {
          url = Ext.urlAppend(url, "token="+Helper.apiToken);
      }
*/
    return url + '&e=10';
  },

});
