// let sliderImage = Array.from(
//   document.querySelectorAll(".slider-container img")
// );

// let slideCount = sliderImage.length;
// let currentSlide = 1;
// let slideNumber = document.getElementById("slide-number");
// let nextButton = document.getElementById("next");
// let prevButton = document.getElementById("prev");

// nextButton.onclick = nextSlide;
// prevButton.onclick = prevSlide;

// let paginationElement = document.createElement("ul");
// paginationElement.setAttribute("id", "pagination-ul");
// for (let i = 1; i <= slideCount; i++) {
//   let paginationItem = document.createElement("li");
//   paginationItem.setAttribute("data-index", i);
//   paginationItem.appendChild(document.createTextNode(i));
//   paginationElement.appendChild(paginationItem);
// }
// document.getElementById("indicators").appendChild(paginationElement);
// let paginationBolets = Array.from(
//   document.querySelectorAll("#pagination-ul li")
// );
// for (let i = 0; i < paginationBolets.length; i++) {
//   paginationBolets[i].onclick = function () {
//     currentSlide = this.getAttribute("data-index");
//     removeAllActive();
//     theChecker();
//   };
// }

// function nextSlide() {
//   if (nextButton.classList.contains("disabled")) {
//     return false;
//   } else {
//     currentSlide++;
//     removeAllActive();
//     theChecker();
//   }
// }

// function prevSlide() {
//   if (prevButton.classList.contains("disabled")) {
//     return false;
//   } else {
//     currentSlide--;
//     removeAllActive();
//     theChecker();
//   }
// }
// removeAllActive();
// theChecker();
// function theChecker() {
//   slideNumber.textContent = `Slide# ${currentSlide} of ${slideCount}`;
//   sliderImage[currentSlide - 1].classList.add("active");
//   paginationElement.children[currentSlide - 1].classList.add("active");
//   if (currentSlide == 1) {
//     prevButton.classList.add("disabled");
//   } else {
//     prevButton.classList.remove("disabled");
//   }
//   if (currentSlide == slideCount) {
//     nextButton.classList.add("disabled");
//   } else {
//     nextButton.classList.remove("disabled");
//   }
// }
// console.log(currentSlide);
// function removeAllActive() {
//   sliderImage.forEach(function (img) {
//     img.classList.remove("active");
//   });
//   paginationBolets.forEach(function (b) {
//     b.classList.remove("active");
//   });
// }

let sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);
console.log(sliderImages);

let slideCount = sliderImages.length;
let firstSlide = 1;

let slideNumber = document.getElementById("slide-number");
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    return "";
  } else {
    firstSlide++;
    theChecker();
  }
}
function prevSlide() {
  if (prevButton.classList.contains("disabled")) {
    return false;
    // or Empty or " "
  } else {
    firstSlide--;
    theChecker();
  }
}

let paginationElement = document.createElement("ul");
paginationElement.setAttribute("id", "pagination-ul");

paginationUl = document.getElementById("pagination-ul");
for (let i = 1; i <= slideCount; i++) {
  let paginationItem = document.createElement("li");
  paginationItem.setAttribute("data-index", i);
  // paginationItem.appendChild(document.createTextNode(i));
  paginationItem.textContent = i;
  paginationElement.appendChild(paginationItem);
}
document.getElementById("indicators").appendChild(paginationElement);

let paginationBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);
for (let i = 0; i < paginationBullets.length; i++) {
  paginationBullets[i].onclick = function () {
    firstSlide = this.getAttribute("data-index");
    theChecker();
  };
}

console.log(paginationBullets);
function theChecker() {
  slideNumber.textContent = `Slide# ${firstSlide} of ${slideCount}`;
  // slideNumber.appendChild(
  //   document.createTextNode(`Slide# ${firstSlide} of ${slideCount}`)
  // );
  sliderImages.forEach(function (img) {
    img.classList.remove("active");
  });
  paginationBullets.forEach(function (ele) {
    ele.classList.remove("active");
  });

  sliderImages[firstSlide - 1].classList.add("active");
  paginationElement.children[firstSlide - 1].classList.add("active");
  if (firstSlide == 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }
  if (firstSlide == slideCount) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}

theChecker();
