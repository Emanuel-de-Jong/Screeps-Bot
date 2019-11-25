module.exports = {
  returnCreepRoles: function(kind) {
    var loopRoles = {
      'builder': [require('creep_role_builder'), {}, 75],
      'harvester': [require('creep_role_harvester'), {}, 70],
      'repairer': [require('creep_role_repairer'), {}, 60],
      'upgrader': [require('creep_role_upgrader'), {}, 100],
      'wallrepairer': [require('creep_role_wallrepairer'), {}, 50]
    };
    var manualRoles = {
      'claimer': [require('creep_role_claimer'), {target: ''}]
    };
    switch (kind) {
      case 'loopRoles':
        return loopRoles;
      case 'manualRoles':
        return manualRoles;
      default:
        return _.merge(loopRoles, manualRoles);
    }
  },

  returnCreepRolesToCreate: function() {
    if (Memory.creep.role.returnCreepRolesToCreate == undefined){
      Memory.creep.role.returnCreepRolesToCreate = {};
    }
    return Memory.creep.role.returnCreepRolesToCreate;
  }
};
