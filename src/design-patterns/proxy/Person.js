/* 
With a Proxy object, we get more control over the interactions with certain objects. 
A proxy object can determine the behavior whenever we're interacting with the object, 
for example when we're getting a value, or setting a value.

Generally speaking, a proxy means a stand-in for someone else. 
Instead of speaking to that person directly, you'll speak to 
the proxy person who will represent the person you were trying to reach. 
The same happens in JavaScript: instead of interacting with the target object directly, 
we'll interact with the Proxy object.

*/

const person = {
  name: "Peter",
  age: 34,
  nationality: "Nigerian",
};

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    if (!obj[prop]) {
      console.log(
        `Hmm.. this property doesn't seem to exisit on the target object`
      );
    } else {
      console.log(`The value of ${prop} is ${Reflect.get(obj, prop)}`);
    }
  },
  set: (obj, prop, value) => {
    if (prop == "age" && typeof value !== "number") {
      console.log(`Sorry, you can only pass numeric values for age.`);
    } else if (prop === "name" && value.length < 2) {
      console.log(`You need to provide a valid name.`);
    } else {
      console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
      //   obj[prop] = value;
      return Reflect.set(obj, prop, value);
    }
    return true;
  },
});

export { personProxy };
