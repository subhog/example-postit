Notes = new Meteor.Collection('notes');


if(Meteor.isClient) {


  Template.area.helpers({

    notes: function() {
      return Notes.find();
    },

    x: function() {
      return this.x * $('.area').width();
    },

    y: function() {
      return this.y * $('.area').height();
    },

    displayInput: function() {
      return Session.get('displayInput');
    },

    inputX: function() {
      return Session.get('x');
    },

    inputY: function() {
      return Session.get('y');
    },

  });


  Template.area.events({

    'click .area': function(e, t) {
      if(! $(e.target).is('.area')) return;

      Session.set('x', e.clientX);
      Session.set('y', e.clientY);
      Session.set('x%', e.clientX / t.$('.area').width());
      Session.set('y%', e.clientY / t.$('.area').height());

      Session.set('displayInput', true);
    },

    'click .confirm, keyup .field': function(e, t) {
      if(e.keyCode && e.keyCode !== 13) return;

      Notes.insert({
        text: t.$('.field').val(),
        x: Session.get('x%'),
        y: Session.get('y%'),
      });

      Session.set('displayInput', false);
    },

  });

  Meteor.subscribe('someNotes');

}



if(Meteor.isServer) {

  Meteor.publish('someNotes', function() {
    return Notes.find({}, {
      sort: {time: -1},
      limit: 42,
    });
  });

}








