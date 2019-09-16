'use strict';

this.name = 'Walter';

function  sayMyName() {
    console.log(this.name)
}

sayMyName();


// without 'use strict' returns Walker
// with 'use strict' return Uncaught TypeError: Cannot read property 'name' of undefined

//////////////////////////////////////////////////////////

const user = {
  name: 'Walker',
  sayMyName: function () {
    console.log(this.name)
  }
};

user.sayMyName();


// returns Walker
// without name in user returns undefined

//////////////////////////////////////////////////////////

console.log(window.name);

// returns Walter;