Notes = new Meteor.Collection('notes');


if(Meteor.isClient) {


  Template.area.notes = function() {
    return Notes.find();
  };

  Template.area.x = function() {
    return this.x * $('.area').width();
  };

  Template.area.y = function() {
    return this.y * $('.area').height();
  };

  Template.area.displayInput = function() {
    return Session.get('displayInput');
  };

  Template.area.inputX = function() {
    return Session.get('x');
  };

  Template.area.inputY = function() {
    return Session.get('y');
  };

  Template.area.events({

    'click .area': function(e, t) {
      Session.set('x', e.clientX);
      Session.set('y', e.clientY);
      Session.set('displayInput', true);
    },

  });

}
