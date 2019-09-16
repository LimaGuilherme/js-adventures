'use strict';

this.name = 'Janna';
this.wardDrops = 8;

function sayMyName(wardDrops) {
  this.wardDrops = wardDrops;
  console.log(this.name, this.wardDrops)
}
const character = {
  name: 'Jinx',
  wardDrops : 2,
    sayMyRole: function () {
      console.log(this.name, this.wardDrops);
    }
};

const boundSayMyName = sayMyName.bind(this);
boundSayMyName(8); // returns Janna 8

const roleBind = character.sayMyRole.bind(character);
console.log(roleBind()); // returns Jinx 2


const role = character.sayMyRole;
console.log(role()); // return undefined
