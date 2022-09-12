let nam = "Samuel";
let age = 31;
let hasHobbies = true;

const summarizeUser = (userName, userAge, userHasHobby) => {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies: " +
    userHasHobby
  );
};

const add = (a, b) => a + b;

console.log(add(4, 9));

console.log(summarizeUser(nam, age, hasHobbies));
