const person = {
  name: "Samuel",
  age: 20,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

const printName = ({ name }) => {
  console.log(name);
};

printName(person);

const { name, age } = person;
console.log(name, age);

// const copiedPerson = { ...person };
// console.log(copiedPerson);

// person.greet();

const hobbies = ["Sports", "Cooking"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

// for (hobby in hobbies) {
//   console.log(hobby[0]);
// }

// console.log(hobbies.map((hobby) => "Hobby: " + hobby));
// console.log(hobbies);

// hobbies.push("Programming");
// console.log(hobbies);

// const copiedArray = [...hobbies, "Samuel", "Gideon"];
// console.log(copiedArray);

// const toArray = (arg1, arg2, arg3) =>
// {
//    return [arg1, arg2, arg3];
// };

// console.log(toArray(1,2,3,4,5,6,7,8))
