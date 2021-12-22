let clubs = [
  {
    name: "Barcelona",
    best_club: "CF Barcelona",
    population: "12030563",
  },
  {
    name: "London",
    best_club: "Arsenal",
    population: "120305333",
  },
  {
    name: "Madrid",
    best_club: "Atletico",
    population: "120305633",
  },
  {
    name: "Valencia",
    best_club: "Valencia CF",
    population: "120305644",
  },
  {
    name: "Rome",
    best_club: "Roma",
    population: "120303333333",
  },
  {
    name: "Rome",
    best_club: "Lazio",
    population: "120303333333",
  },
];

for (let i = 0; i < clubs.length; i++) {
  if (clubs[i].name === "Rome") {
    console.log(`Nie sme ekipa od Rim:${clubs[i].best_club}`);
  } else {
    continue;
  }
}
let compareValue = parseInt(clubs[0].population);
let arr = [];
clubs.forEach((club) => {
  if (parseInt(club.population) == compareValue) {
    arr.push(club.best_club);
  }
  if (parseInt(club.population) > compareValue) {
    compareValue = parseInt(club.population);
    arr = [];
    arr.push(club.best_club);
  }
});
console.log(arr);
