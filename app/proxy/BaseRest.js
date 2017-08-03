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

    var me = this;
    me.setExtraParam('a', 1);
    var url = me.callParent(arguments);

    console.log('request:' + request.$className);
    console.log('me:' + me.$className);
    console.log('this:' + this.$className);
    console.log('url:' + url);
    console.log(request._params);


    // console.log(this.getExtraParams().toString() );

    // console.log('isInstance: ' . request.getProxy() );
/*
      if( ! Ext.isEmpty(Helper.apiToken)) {
          url = Ext.urlAppend(url, "token="+Helper.apiToken);
      }
*/
    return url;
  },

});
