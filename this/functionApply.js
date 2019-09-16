'use strict';

this.name = 'Janna';

function sayMyName(wardDrops) {
  this.wardDrops = wardDrops;
  console.log(this.name, this.wardDrops)
}
const character = {
  name: 'Jinx',
};


sayMyName.apply(this, [8]); // returns Janna 8
sayMyName.apply(character, [4]); // returns Jinx 4

console.log(this.wardDrops); // returns 8
console.log(character.wardDrops); // returns 4
