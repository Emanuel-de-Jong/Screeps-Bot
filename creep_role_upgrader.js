module.exports = {
  run: function(creep) {
    var color = '#ffff00';
    (require('creep_role_template')).run(creep, color);

    if (creep.memory.working == true) {
      if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
        creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: color}});
      }
    }
  }
};
