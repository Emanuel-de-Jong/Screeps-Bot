module.exports = {
  runAllCreeps: function() {
    var roles = (require('creep_role')).returnCreepRoles('');

    for (let n in Game.creeps) {
      let creep = Game.creeps[n];
      if ((Object.keys(roles)).includes(creep.memory.role)) {
        roles[creep.memory.role][0].run(creep);
      }
    }
  }
};
