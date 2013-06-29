this.Meteor = {
  _SynchronousQueue: function(){
    return {
      drain:function(){}
    };
  }
};
this.test = new LocalCollection('test');