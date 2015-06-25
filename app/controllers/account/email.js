import Ember from 'ember';
import errorHandler from '../../utils/errorHandler';
import EmberValidations from 'ember-validations';

var _asyncSubmitDeffer = Ember.RSVP.defer();

export default Ember.Controller.extend(EmberValidations.Mixin,{
  actions: {
    submit: function(defer) {
      let self = this;

      this.get('model').save()
      .then(() => {
        localStorage.setItem("userEmail", self.get('model.newEmail'));
        defer.resolve();
        //TODO: refresh the user email in the navbar template
      })
      .catch(error => {
        errorHandler(self);
        defer.reject();
      });
    },
  }
});