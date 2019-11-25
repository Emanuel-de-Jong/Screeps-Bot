module.exports = {
  returnStructureRoles: function(kind) {
    var loopRoles = {
      'spawn': [require('structure_role_spawn'), {}, 100],
      'tower': [require('structure_role_tower'), {}, 100]
    };
    var manualRoles = {

    };
    switch (kind) {
      case 'loopRoles':
        return loopRoles;
      case 'manualRoles':
        return manualRoles;
      default:
        return _.merge(loopRoles, manualRoles);
    }
  }
}
