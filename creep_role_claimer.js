module.exports = {
  run: function(creep) {
    var target = creep.memory.target;
    if (creep.room.name != target) {
      var exit = creep.room.findExitTo(target);
      creep.moveTo(creep.pos.findClosestByRange(exit), {visualizePathStyle: {stroke: '#2200ff'}});
    } else {
      if (creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {
        creep.moveTo(creep.room.controller);
      }
    }
  }
};
