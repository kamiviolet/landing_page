"use strict";

(function responsiveNavbar() {
  const navBtn = document.querySelector(".nav_btn");

  document.addEventListener("click", (e)=>{
    if (e.target.classList.contains("nav_btn") || e.target.parentNode.classList.contains("nav_btn") ) {
      navBtn.classList.toggle("cross");
      }

    if (e.target.classList.contains("menu_items")) {
      navBtn.classList.remove("cross");
    }
  })
})()


const background = document.querySelector("section[role='highlight']");
const header = document.querySelector("header");
const headerLinks = document.querySelectorAll(".menu_items");
const BACKGROUND_IMAGES = [
    {src: "images/exterior.jpg"},
    {src: "images/landscape.jpg"},
    {src: "images/kitchen.png"},
    {src: "images/cats.jpg"},
    {src: "images/waterfall.jpg"},
];

(function changingSlide(index = 0) {
    background.style.background = `url(${BACKGROUND_IMAGES[index].src})`;
    background.style.backgroundRepeat = "no-repeat";
    background.style.backgroundSize = "cover";

    index++;
    if (index === BACKGROUND_IMAGES.length) {
      index = 0;
    }

    setTimeout(()=>{
      changingSlide(index)}
      , 20000);
})()

const FACILITIES = [
  {
    src: "images/horse_riding.jpg",
    text: "We breed Hucul horses in Muchovice, on whose backs we will gladly take you on an adventurous ride into the surrounding Beskydy wilderness. We will guide you along mountain trails, discover wild corners with unspoiled nature and climb mountain ridges with far-reaching views. Horses move quietly through the landscape and safely manage muddy terrain, streambeds, as well as stony forest paths.",
  },
  {
    src: "images/sauna.jpg",
    text: "We just refurbished the bathroom recently, equipped with bathtub, shower cabinet as well as a sauna room. For the sauna, logs are provided or you may chop for extra supply.",
  },
  {
    src: "images/bedrooms.png",
    text: "Our estate can cater 20 people at its full capacity (in winter it will be 13 people)."
  },
  {
    src: "images/mushrooms.jpg",
    text: "We are located off the street to the town and surrounded by few mountains. You may start your hiking route right after stepping out of the door with the possibilities of hunting many mushrooms."
  },
];

(function facilitiesDescription() {
  for (let feature of FACILITIES) {
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const figcaption = document.createElement("figcaption");

    document.querySelector("[role='info']").appendChild(figure);
    figure.appendChild(img);
    figure.appendChild(figcaption);

    figure.classList.add("info-subsection");
    img.setAttribute("src", feature.src);
    figcaption.textContent = feature.text ;
  }
})();


const COMMENTS = [
  {
    avator: "images/smile-solid.svg",
    source: "User A",
    review: "This is an inspiring quote, or a testimonial from a customer. Maybe it's just filling up space, or maybe people will actually read it. Who knows? All I know is that it looks nice.",
  },
  {
    avator: "images/smile-solid.svg",
    source: "User B",
    review: "This is an inspiring quote, or a testimonial from a customer. Maybe it's just filling up space, or maybe people will actually read it. Who knows? All I know is that it looks nice.",
  },
  {
    avator: "images/smile-solid.svg",
    source: "User C",
    review: "This is an inspiring quote, or a testimonial from a customer. Maybe it's just filling up space, or maybe people will actually read it. Who knows? All I know is that it looks nice.",
  },
  {
    avator: "images/smile-solid.svg",
    source: "User D",
    review: "This is an inspiring quote, or a testimonial from a customer. Maybe it's just filling up space, or maybe people will actually read it. Who knows? All I know is that it looks nice.",
  },
  {
    avator: "images/smile-solid.svg",
    source: "User E",
    review: "This is an inspiring quote, or a testimonial from a customer. Maybe it's just filling up space, or maybe people will actually read it. Who knows? All I know is that it looks nice.",
  },
  {
    avator: "images/smile-solid.svg",
    source: "User F",
    review: "This is an inspiring quote, or a testimonial from a customer. Maybe it's just filling up space, or maybe people will actually read it. Who knows? All I know is that it looks nice.",
  },
];

(function slidingReviews() {

  for (let comment of COMMENTS) {
    const blockquote = document.createElement("blockquote");
    const avator = document.createElement("img");
    const commentContent = document.createElement("p");
    const source = document.createElement("cite");

      document.querySelector(".reviews_wrapper").appendChild(blockquote);
      blockquote.appendChild(avator);
      blockquote.appendChild(commentContent);
      blockquote.appendChild(source);

    commentContent.textContent = comment.review;
    source.textContent = comment.source;
    avator.setAttribute("src", comment.avator);

  }
})();


//need to refine... and get rid of the inline function...

const toLeft = document.querySelector(".to_left");
const toRight = document.querySelector(".to_right");
const reviews = document.querySelectorAll(".reviews_wrapper blockquote");
let currReview = 1;
showReview(currReview);

function prevReview() {
    showReview(currReview -= 1);
  }
  
function nextReview() {
  showReview(currReview += 1);
}

function showReview(n, flip) { 
  if (n > reviews.length) {
      currReview = 1;
  }
  if (n < 1) {
      currReview = reviews.length;
  }

  reviews.forEach((review)=>{
    if (review.classList.contains("top")) {
      review.classList.replace("top", "hidden");
    }
    review.classList.add("hidden");
  })
  reviews[currReview -1].classList.replace("hidden", "top");
}

  toLeft.addEventListener("click", prevReview);
  toRight.addEventListener("click", nextReview);