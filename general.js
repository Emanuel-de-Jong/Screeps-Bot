module.exports = {
  clearUnnecessaryMemory: function() {
    var roles = (require('creep_role')).returnCreepRoles('');

    for (let n in Game.creeps) {
      let creep = Game.creeps[n];
      if (!(Object.keys(roles)).includes(creep.memory.role)) {
        creep.suicide();
      }
    }

    for (let n in Memory.creeps) {
      if (!Game.creeps[n]) {
        delete Memory.creeps[n];
      }
    }
  },

  claimRoom: function(spawn, target){
    (require('structure_role_spawn')).createCreep('claimer', spawn, {target: target});
  },


  returnFriends: function() {
    return ['squeezy', 'swifttech'];
  }
};
