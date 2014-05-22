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


}
