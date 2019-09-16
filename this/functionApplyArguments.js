'use strict';

this.name = 'Janna';

function stats() {
  this.wardDrops = arguments[0];
  this.kills = arguments[1];
  console.log(this.name, this.wardDrops, this.kills)
}

const character = {
  name: 'Jinx',
};


stats.apply(this, [8, 0]); // returns Janna 8 0
stats.apply(character, [4, 5]); // returns Jinx 4 5

