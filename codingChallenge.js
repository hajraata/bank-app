/*
TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
*/

// challenge 01

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaNow = dogsJulia.slice();
  dogsJuliaNow.slice(1, 3);

  const dogsArr = dogsJuliaNow.concat(dogsKate);

  dogsArr.forEach((dog, i) => {
    if (dog < 3) {
      console.log(`Dog number ${i} is a puppy`);
    } else console.log(`Dog number ${i + 1} is an adult`);
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

/*
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
*/

// challenge 02

const calcAvgHumanAge = function (dogAges) {
  const humanYears = dogAges.map(dogAge =>
    dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
  );

  console.log(humanYears);

  const adultDogs = humanYears.filter(age => age >= 18);

  console.log(adultDogs);

  const avgAge =
    adultDogs.reduce((acc, age) => acc + age, 0) / adultDogs.length;

  return avgAge;
};

console.log(calcAvgHumanAge([5, 2, 4, 1, 15, 8, 3]));

// challenge 03

const calcAvgHumanAgeArrow = dogAges =>
  dogAges
    .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

console.log(calcAvgHumanAgeArrow([5, 2, 4, 1, 15, 8, 3]));
