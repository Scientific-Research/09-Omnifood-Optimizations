console.log("Hello");

const myName = "Maximilian";
const h1 = document.querySelector(".heading-primary");
console.log(h1);

/* MY SOLUTION ************************************ */
/* Setting the correct date in Copyright section */
/* 1) getting the year surrounded by span from HTML */
const currentYear = document.querySelector(".copyright span");
console.log(currentYear);

/* 2) defining the date variable and getting the date*/
const date = Date();
// console.log(date);

/* 3) getting only the year inside the date which is the third item in it! */
const year = date.split(" ")[3];
console.log(year);

/* 4) replacing the current year which obtained in last step with the year variable inside the span element */
currentYear.textContent = year;
/* MY SOLUTION ************************************ */

/* JONAS SOLUTION ******************************** */
// const yearEl = document.querySelector(".year");
// const currentYear1 = new Date().getFullYear();
// console.log(currentYear1);
// yearEl.textContent = currentYear1;
/* JONAS SOLUTION ******************************** */

// h1.textContent = myName; /** To replace the h1 with myName*/
// h1.style.backgroundColor = "red"; /** To change the background color to red!*/
// h1.style.padding = "5rem"; /** Change the padding */

/* Change the text, backgroundColor and padding of h1 when I click on it: */
/* THE BELOW addEventListener IS ONLY FOR TRAINING, THAT'S WHY I COMMENT IT OUT! */
// h1.addEventListener(
//   "click",
//   () => (
//     (h1.textContent = myName),
//     (h1.style.backgroundColor = "red"),
//     (h1.style.padding = "5rem")
//   )
// );

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
