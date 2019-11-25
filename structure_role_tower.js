module.exports = {
  run: function(structure) {
      var target = structure.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
      if (target != undefined && !((require('general')).returnFriends).includes(target.owner)) {
        structure.attack(target);
      }
  }
}
