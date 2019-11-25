module.exports = {
  run: function(creep) {
    var color = '#ff00ff';
    (require('creep_role_template')).run(creep, color);

    if (creep.memory.working == true) {
      let structures = creep.room.find(FIND_STRUCTURES, {
        filter: (s) => s.structureType == STRUCTURE_WALL &&
          s.hits < s.hitsMax
      });

      if (structures != undefined) {
        var leastHits = structures[0]
        for (let s in structures) {
          if (s.hits < leastHits.hits) {
            leastHits = structure;
          }
        }

        if (creep.repair(leastHits) == ERR_NOT_IN_RANGE) {
          creep.moveTo(leastHits, {visualizePathStyle: {stroke: '#ff00ff'}});
        } else {
          (require('creep_role_repairer')).run(creep);
        }
      }
    }
  }
};
