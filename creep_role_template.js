module.exports = {
  run: function(creep, color) {
    if (creep.memory.working == true && creep.carry.energy == 0) {
      creep.memory.working = false;
    } else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
      creep.memory.working = true;
    }

    if (creep.memory.working == false) {
      let source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
      if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
        creep.moveTo(source, {visualizePathStyle: {stroke: color}});
      }
    }
  }
};