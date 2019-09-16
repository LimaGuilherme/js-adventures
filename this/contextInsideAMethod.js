'use strict';

this.role = 'Top';

const character = {
  role: 'support',
  sayMyRole: function () {
    console.log(this.role)
  }
};

character.sayMyRole();
// returns support
