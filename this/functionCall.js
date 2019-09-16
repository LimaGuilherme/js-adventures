'use strict';

this.name = 'Janna';

function sayMyName(wardDrops) {
  this.wardDrops = wardDrops;
  console.log(this.name, this.wardDrops)
}
const character = {
  name: 'Jinx',
};


sayMyName.call(this, 8); // returns Janna 8
sayMyName.call(character, 4); // returns Jinx 4

console.log(this.wardDrops); // returns 8
console.log(character.wardDrops); // returns 4
