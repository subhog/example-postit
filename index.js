Notes = new Meteor.Collection('notes');


if(Meteor.isClient) {


  Template.area.notes = function() {
    return Notes.find();
  };


}
