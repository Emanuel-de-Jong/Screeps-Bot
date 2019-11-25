module.exports = {
  run: function(creep) {
    var color = '#00ffff';
    (require('creep_role_template')).run(creep, color);

    if (creep.memory.working == true) {
      let structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
        filter: (s) => (s.structureType == STRUCTURE_SPAWN ||
            s.structureType == STRUCTURE_EXTENSION ||
            s.structureType == STRUCTURE_TOWER) &&
          s.energy < s.energyCapacity
      });
      if (structure != undefined) {
        if (creep.transfer(structure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
          creep.moveTo(structure, {visualizePathStyle: {stroke: color}});
        }
      } else {
        (require('creep_role_upgrader')).run(creep);
      }

    }
  }
};
