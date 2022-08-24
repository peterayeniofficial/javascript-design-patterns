// Singletons are classes which can be instantiated once, and can be accessed globally.
//This single instance can be shared throughout our application, which makes Singletons
//great for managing global state in an application.

let instance;
let counter = 0;

class Counter {
  constructor() {
    if (instance) {
      throw new Error("You can only create one instance!");
    }
    instance = this;
  }
  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increment() {
    ++counter;
  }

  decrement() {
    --counter;
  }
}

const SingleCounter = Object.freeze(new Counter());
export default SingleCounter;
