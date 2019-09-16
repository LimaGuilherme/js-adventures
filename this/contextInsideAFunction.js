'use strict';

this.name = 'Evelynn';

function sayMyName() {
  console.log(this.name) // returns undefined
}

sayMyName();

