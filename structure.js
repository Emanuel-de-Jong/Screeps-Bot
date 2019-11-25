module.exports = {
  runAllStructures: function() {
    var roles = (require('structure_role')).returnStructureRoles('');

    for (let n in Game.structures) {
      let structure = Game.structures[n];
      if ((Object.keys(roles)).includes(structure.structureType)) {
        roles[structure.structureType][0].run(structure);
      }
    }
  }
};
