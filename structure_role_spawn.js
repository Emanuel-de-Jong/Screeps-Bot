var creepRoleModule = require('creep_role');

module.exports = {
  run: function(structure) {
    if (structure.spawning) {
      return;
    }
    var roles = creepRoleModule.returnCreepRoles('loopRoles')
    var energy = Game.spawns[structure.name].room.energyAvailable;
    var creepRolesToCreate = creepRoleModule.returnCreepRolesToCreate()

    if (_.sum(Game.creeps, (c) => c.memory.role == 'harvester') < 2) {
      module.exports.createCreep('harvester', structure, roles['harvester'][1]);
    } else if (creepRolesToCreate.length != 0) {
      module.exports.createCreep(creepRolesToCreate[((Object.keys(creepRolesToCreate))[0])][0], structure, creepRolesToCreate[((Object.keys(creepRolesToCreate))[0])][1]);
    } else if (energy >= Game.spawns[structure.name].room.energyCapacityAvailable) {
      var leastCreepsByRoleRatio = [Number.MAX_SAFE_INTEGER, undefined];
      for (let r of Object.keys(roles)) {
        let sum = _.sum(Game.creeps, (c) => c.memory.role == r &&
          c.room == structure.room);
        sum /= roles[r][2];
        if (sum < leastCreepsByRoleRatio[0]) {
          leastCreepsByRoleRatio[0] = sum;
          leastCreepsByRoleRatio[1] = r;
        }
      }
      module.exports.createCreep(leastCreepsByRoleRatio[1], structure, roles[leastCreepsByRoleRatio[1]][1]);
    }
  },

  createCreep: function(role, spawn, properties) {
    var roles = creepRoleModule.returnCreepRoles('');
    var energy = Game.spawns[spawn.name].room.energyAvailable;

    var bodyStats = {
      'MOVE': [50, 0],
      'WORK': [100, 0],
      'CARRY': [50, 0],
      'ATTACK': [80, 0],
      'RANGED_ATTACK': [150, 0],
      'HEAL': [250, 0],
      'CLAIM': [600, 0],
      'TOUGH': [10, 0]
    }

    switch (role) {
      case 'claimer':
        bodyStats['MOVE'][1] = 2;
        bodyStats['CLAIM'][1] = 1;
        break;
      default:
        bodyStats['MOVE'][1] = 1;
        bodyStats['WORK'][1] = 1;
        bodyStats['CARRY'][1] = 1;
    }

    var bodyParts = [];
    while (energy > 50) {
      for (var b of Object.keys(bodyStats)) {
        for (var i = 0; i < bodyStats[b][1]; i++) {
          if (energy >= bodyStats[b][0]) {
            switch (b) {
              case 'MOVE':
                bodyParts.push(MOVE);
                break;
              case 'WORK':
                bodyParts.push(WORK);
                break;
              case 'CARRY':
                bodyParts.push(CARRY);
                break;
              case 'ATTACK':
                bodyParts.push(ATTACK);
                break;
              case 'RANGED_ATTACK':
                bodyParts.push(RANGED_ATTACK);
                break;
              case 'HEAL':
                bodyParts.push(HEAL);
                break;
              case 'CLAIM':
                bodyParts.push(CLAIM);
                break;
              case 'TOUGH':
                bodyParts.push(TOUGH);
                break;
            }
            energy -= bodyStats[b][0];
          }
        }
      }
    }
    console.log(role);

    properties['role'] = role;
    properties['working'] = false;

    Game.spawns[spawn.name].createCreep(bodyParts, undefined, properties);
  }
};
