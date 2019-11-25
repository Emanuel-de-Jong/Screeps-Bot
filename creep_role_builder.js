module.exports = {
  run: function(creep) {
    var color = '#ff0000';
    (require('creep_role_template')).run(creep, color);

    if (creep.memory.working == true) {
      let constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
      if (constructionSite != undefined) {
        if (creep.build(constructionSite) == ERR_NOT_IN_RANGE) {
          creep.moveTo(constructionSite, {visualizePathStyle: {stroke: color}});
        }
      } else {
        (require('creep_role_upgrader')).run(creep);
      }
    }
  }
};
