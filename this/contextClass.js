
class Hey {
  constructor () {
    this.hello = 'Hello';
  }
  sayHello(){
    console.log(this.hello);
  }
}

const hello = new Hey();

hello.sayHello(); //returns Hello

console.log(this.hello); // returns Hello