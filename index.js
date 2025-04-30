/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

function makeFreelancer() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const rate =
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) +
    PRICE_RANGE.min;
  return { name, occupation, rate };
}

const freelancers = Array.from({ length: NUM_FREELANCERS }, makeFreelancer);

function getAverageRate(freelancers) {
  const totalRate = freelancers.reduce(
    (total, freelancer) => total + freelancer.rate,
    0
  );
  return totalRate / freelancers.length;
}

const averageRate = getAverageRate(freelancers);
console.log(averageRate);

function freelancerCard(freelancer) {
  const cardContainer = document.createElement("figure");
  const content = `
   <table>
    <tr>
      <td>${freelancer.name}</td>
      <td>${freelancer.occupation}</td>
      <td>$${freelancer.rate}</td>
    </tr>
   </table>
  `;
  cardContainer.innerHTML = content;
  return cardContainer;
}
freelancerCard(freelancers[0]);
//console.log(freelancerCard(freelancers[0]));

function freeLancerCards(freelancers) {
  const cardArticle = document.createElement("section");
  cardArticle.classList.add("cards");
  const cards = freelancers.map(freelancerCard);
  cardArticle.replaceChildren(...cards);
  //console.log(cards);
  return cardArticle;
}

console.log(freeLancerCards(freelancers));

function averageRateCard() {
  const cardContainer = document.createElement("figure");
  const content = `<p> The average rate is $${averageRate}</p>`;
  cardContainer.innerHTML = content;
  return cardContainer;
}

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Freelancer Forum</h1>
    <averageRateCard></averageRateCard>
    <freeLancerCards></freeLancerCards>
    
  `;
  $app
    .querySelector("freeLancerCards")
    .replaceWith(freeLancerCards(freelancers));
  $app.querySelector("averageRateCard").replaceWith(averageRateCard());
}

render();
