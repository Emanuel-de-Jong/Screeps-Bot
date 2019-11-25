var generalModule = require('general');

var creepModule = require('creep');

var structureModule = require('structure');

module.exports.loop = function() {
  generalModule.clearUnnecessaryMemory();

  creepModule.runAllCreeps();

  structureModule.runAllStructures();
}
