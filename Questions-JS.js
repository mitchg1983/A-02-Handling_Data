const userData = [
  {
    id: "111",
    name: "Peter",
    favorites: {
      food: ["burgers", "pizza"],
      activites: ["basketball", "baseball"],
    },
  },
  {
    id: "222",
    name: "John",
    favorites: {
      food: ["burgers", "tacos"],
      activites: ["football", "golf"],
    },
  },
  {
    id: "333",
    name: "Mary",
    favorites: {
      food: ["pizza", "tacos", "fried chicken"],
      activites: ["volleyball", "softball"],
    },
  },
];

// 5. Given the data above, use ".map" to make an array of objects.
// Each object should have the id of the user and the amount of favorite foods they have.
// example: [{id: '111', favoriteFoods: 2}]

const questionFive = userData.map((user) => {
  const { id, name, favorites } = user;

  const faveFood = favorites.food;
  const totalFaves = faveFood.length;

  let newUser = {
    id: id,
    name: name,
    favorites: favorites,
    totalFaves: totalFaves,
  };

  console.log(newUser);

  return newUser;
});

console.log("QUESTION FIVE: ...", questionFive);

////////////////////
// EXTRA CREDIT:
///////////////////

// 6. Given the data above, use ".reduce" to make an array of all the names
// of the people who have pizza as one of their favorite foods.
// example: ['Peter', 'Mary']

// 7. Show us an example of a switch statement being used
