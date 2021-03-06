import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return this.store.createRecord('account/cancel');
  },

  actions: {
    submit: function(){
      this.get('currentModel').save();
      // this.get('session').invalidate();
      // this.transitionTo('index');
    },
  }
});
