import Ember from 'ember';

var announcements = [{
  id: 1,
  title: "Weather Warning",
  description: "temperatures will likely exceed 100 degrees today"
}, {
  id: 2,
  title: "Upcoming estate sale",
  description: "your neighbors are having a huge sale tomorrow"
}, {
  id: 3,
  title: "The end of the world is coming",
  description: "Get ready for the apocolypse"
}];


export default Ember.Route.extend({
  model() {
    return announcements;
  }
});
