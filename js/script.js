console.log("Hello");

const myName = "Maximilian";
const h1 = document.querySelector(".heading-primary");
console.log(h1);

/* MOBILE NAVIGATION */
/* To get the header, because we want to add the class to this header!*/
/* MY SOLUTION FOR MOBILE NAVIGATION - BOTH SOLUTIONS ARE WORKING ***************************** */
const header = document.querySelector(".header");
console.log(header);

/* To get the icon with three horizontal line: */
const mobNav = document.querySelector(".icon-mobile-nav");
console.log(mobNav);

/* To get the Close icon, to close the Navbar Page! */
const mobNavClose = document.querySelector(".close");

/* TO DISPLAY THE NAV BAR PAGE */
mobNav.addEventListener("click", () => {
  // <header class="header nav-open"></header>
  /* The default class of header is class="header" but when we click on the icon, we want that it opens the nav page => that's why we add the nav-open to header!*/

  /* THE ONLY WAY TO SHOW THE NAV BAR PAGE IS TO ADD nav-open TO THE header CLASS! */

  header.className = "header nav-open";
});

/* TO HIDE THE NAV BAR PAGE */
mobNavClose.addEventListener("click", () => {
  // <header class="header nav-open"></header>
  /* The default class of header is class="header" which means the Nav bar page will not appear, that's why i use it here => when i click on the cross sign, the class of the header will back to the original("header") from last state which was "header nav-open" => (showing the nav bar page) and the nav bar page will disappear!*/

  /* THE ONLY WAY TO hide THE NAV BAR PAGE IS TO remove nav-open FROM THE header CLASS! */

  header.className = "header";
});
/* MY SOLUTION FOR MOBILE NAVIGATION - BOTH SOLUTIONS ARE WORKING ***************************** */

/* JONAS SOLUTION FOR MOBILE NAVIGATION - BOTH SOLUTIONS ARE WORKING ************************** */
// const btnNavEl = document.querySelector(".btn-mobile-nav");
// const headerEl = document.querySelector(".header");

// btnNavEl.addEventListener("click", () => {
//   headerEl.classList.toggle("nav-open");
// });
/* JONAS SOLUTION FOR MOBILE NAVIGATION - BOTH SOLUTIONS ARE WORKING ************************** */

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
/* Smooth scrolling animation */

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    // console.log(href);

    /* Scroll back to top */
    if (href === "#")
      window.scrollTo({
        top: 0 /*back to foremost top point of the page! To use this, we have to know the pixel,value of where we want to link!*/,
        behavior: "smooth",
      });
    if (href !== "#" && href.startsWith("#")) {
      console.log(href);

      /* MY SOLUTION **************************** */
      const href2 = href.slice(1, 15);
      /**To get only the link word for example: meals, how and not symbol #, because getElementById needs only id and not id plus #!*/
      console.log(href2);
      const sectionEl = document.getElementById(href2);
      console.log(sectionEl);
      /* sectionEl => <section class="section-how" id="how">...</section> */
      sectionEl.scrollIntoView({ behavior: "smooth" });
      /* MY SOLUTION **************************** */

      /* JONAS SOLUTION **************************** */
      // const sectionEl2 = document.querySelector(href);
      // /* When we give an id like #how to a querySelector, it takes it and find the id automatically in HTML - but i used the getElementById which takes only selector without #, that's why i used the slice() function! */
      // console.log(sectionEl2);
      // sectionEl2.scrollIntoView({ behavior: "smooth" });
      /* JONAS SOLUTION **************************** */

      /* TO CLOSE THE MOBILE NAVIGATION BAR WHEN I CLICK ON ANY OF THE LINK ON THE NAV PAGE! */
      /* Only .main-nav works and main-nav-link doesn't work, that's why i wrote here the .main-nav class! */
      const mainNavEl = document.querySelector(".main-nav");
      mainNavEl.addEventListener("click", () => {
        // <header class="header nav-open"></header>
        /* The default class of header is class="header" which means the Nav bar page will not appear, that's why i use it here => when i click on the cross sign, the class of the header will back to the original("header") from last state which was "header nav-open" => (showing the nav bar page) and the nav bar page will disappear!*/

        /* THE ONLY WAY TO hide THE NAV BAR PAGE IS TO remove nav-open FROM THE header CLASS! */
        header.className = "header";
      });
    }
  });
});

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
