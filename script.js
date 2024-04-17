// INDEX
const indexCards = document.querySelector("#indexCards");
const indexCardsImg = [
  "card__img--personal-training",
  "card__img--group-training",
  "card__img--individual-training",
];
const indexCardsHeading = [
  "Personal trainings",
  "Group trainings",
  "Individual trainings",
];
const indexCardsText = [
  `Everyone who opts for personal training services will enjoy the
unique conditions offered by Fitness Zone. The guarantee of
effective and safe exercise is the diagnostics performed in our
club.`,
  `We understand that group trainings are often more fun and
  therefore easier than others! We have prepared a large number of
  different programs for women and men.`,
  `Whether you are a recreational person, an athlete, you train
  regularly or you are just planning to start exercising, in our gym
  you have everything you need to improve your health, physical
  shape and achieve the desired appearance!`,
];
let htmlArr = [];
for (let i = 0; i < indexCardsImg.length; i++) {
  htmlArr.push(`
        <div class="card">
            <div class="card__img ${indexCardsImg[i]}"></div>
                <div class="card__content">
                    <h3 class="heading-tertiary">${indexCardsHeading[i]}</h3>
                    <p class="card__text">
                        ${indexCardsText[i]}
                    </p>
            </div>
        </div>
    `);
}
if (indexCards) {
  indexCards.innerHTML = htmlArr.join("");
}

function detailsFunc() {
  alert(
    "We are working on the website, soon this information will be available."
  );
}

//////////////////////////////////////
// CONTACT
const contactForm = document.querySelector("#contactForm");
const contactName = document.querySelector("#contactName");
const contactEmail = document.querySelector("#contactEmail");
const contactMessage = document.querySelector("#contactMessage");

function checkData() {
  const isAllValid = [];
  function isValid(el, style) {
    if (el.value === "") {
      el.style.border = style;
      isAllValid.push(false);
    } else {
      el.style.border = "";
      isAllValid.push(true);
    }
  }
  return { isValid, isAllValid };
}

function handleSubmitContact(e, positive, negative) {
  e.preventDefault();
  const { isValid, isAllValid } = checkData();
  const inputs = [contactName, contactEmail, contactMessage];
  inputs.forEach((input) => isValid(input, "solid 2px red"));

  if (isAllValid.every((val) => val === true)) {
    console.log(contactName.value.toUpperCase());
    console.log(contactEmail.value.toLowerCase());
    console.log(
      contactMessage.value.length,
      contactMessage.value.toLowerCase()
    );
    alert(positive);
  } else {
    alert(negative);
  }
}

contactForm?.addEventListener("submit", (e) =>
  handleSubmitContact(
    e,
    "Form is successfully submited!",
    "The form was not filled in correctly."
  )
);
