var factList = [
  "About 9.2% of the world, or 689 million people, live in extreme poverty on less than $1.90 a day, according to the World Bank.",
  "In the United States, 10.5% of the population — 34 million people — live in poverty as of 2019.",
  "Nearly 22,000 children die each day due to living in poverty.",
  "A third of all poor in developing countries are children aged zero to 12.",
  "There are 2.2 billion children in the world, and 1 billion of them live in poverty.",
  "In 2018, 16.2% of all children (11.9 million kids) lived in Poverty USA—that’s almost 1 in every 6 children.",
  "In 2015, the National Center on Family Homelessness analyzed state-level data and found that nationwide, 2.5 million children experience homelessness in a year.",
  "One frappuccino at Starbucks costs more than the median income for people in the developing world ($3 a day).",
  "A quarter of humanity, 1.6 billion people, lives without electricity.",
  "According to an Oxfam report, if the world’s 100 richest people pooled their collective earnings in 2012, they could have ended extreme world poverty four times over.",
  "Half of the 736 million people living in extreme poverty globally live in five countries: India, Nigeria, Democratic Republic of Congo, Ethiopia, and Bangladesh.",
  "2.2 million people lack access to a safely-managed drinking water service.",
  "The entire health budget of Ethiopia, a country of 105 million people, is equivalent to just 1% of the fortune of the world’s richest man, Amazon CEO Jeff Bezos.",
];

var fact = document.getElementById("fact");
var button = document.getElementById("button");
var count = 0

button.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count ==factList.length){
    count = 0;
  }
}