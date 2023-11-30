// Show language menu on click
const langContainer = document.querySelectorAll(".language");

langContainer.forEach((langContainer) => {
  const langBtn = langContainer.querySelector(".language-button");

  langBtn.addEventListener("click", () => {
    langContainer.classList.toggle("show-menu");
  });
});

// Select language on click
const langOptions = document.querySelectorAll(".language-menu li");

langOptions.forEach((langOption) => {
  langOption.addEventListener("click", () => {
    langOptions.forEach((option) => {
      option.classList.toggle("selected");
    });
    // setTimeout(() => {
    //   langContainer.classList.toggle("show-menu");
    // }, 300);
  });
});

// Media query
function myFunction(x) {
  const story = document.querySelector(".story");
  const storyParagraphs = story.querySelectorAll("p");
  storyParagraphs.forEach((paragraph) => {
    paragraph.remove();
  });
  if (x.matches) {
    // If media query matches

    // Hero card paragraph
    const heroParagraph = document.querySelector(".hero .card p");
    heroParagraph.innerHTML =
      "För att fira lanseringen av vår nya kollektion lottar ut produkter till ett värde av 50 000 kr. Ta chansen att bli utrustad för dina utmaningar.";

    // Once upon paragraph(s)
    const paragraphOne = document.createElement("p");
    paragraphOne.innerHTML =
      "Utforska vildmarken med ProTechs senaste tillskott - Sarek X4 Series Jacket. Utrustad med avancerad teknologi, inklusive elslingor som ger långvarig värme, och ett 100% vattentätt yttre, håller denna jacka dig bekväm och skyddad oavsett väder. Dess mångsidiga design passar perfekt för alla utomhusaktiviteter, med fokus på både funktionalitet och stil.";
    const paragraphTwo = document.createElement("p");
    paragraphTwo.innerHTML =
      "Hög kvalitet och hållbarhet är kännetecken för denna jacka, vilket gör den till det ultimata valet för äventyrsentusiaster. Upptäck naturen med självsäkerhet i ProTechs Sarek X4 Series Jacket.";
    story.appendChild(paragraphOne);
    story.appendChild(paragraphTwo);

    // Desktop images
    const productSmallUrls = [
      "/images/watch_pro_1.jpg", // Watch pro
      "/images/powerbank_1.jpg", // Powerbank
      "/images/jacket_basic_1.jpg", // Jacket basic
      "/images/watch_pro_2.jpg", // Watch pro 2
      "/images/powerbank_2.jpg", // Powerbank 2
      "/images/jacket_basic_2.jpg", // Jacket basic 2
    ];

    const productsSmallImgs = document.querySelectorAll(
      ".products.small img.primary"
    );
    productsSmallImgs.forEach((img, index) => {
      img.src = productSmallUrls[index];
    });

    const productsSmallImgsSecondary = document.querySelectorAll(
      ".products.small img.secondary"
    );
    productsSmallImgsSecondary.forEach((img, index) => {
      img.src = productSmallUrls[index + 3];
    });

    const productLargeUrls = [
      "/images/powerbank_pro_1.jpg", //Powerbank pro
      "/images/watch_pro_1.jpg", // Watch pro
      "/images/jacket_pro_1.jpg", // Jacket pro
      "/images/watch_basic_1.jpg", // Watch basic
      "/images/jacket_basic_1.jpg", // Jacket basic
      "/images/powerbank_1.jpg", // Powerbank
      "/images/powerbank_pro_2.jpg", //Powerbank pro
      "/images/watch_pro_2.jpg", // Watch pro
      "/images/jacket_pro_2.jpg", // Jacket pro
      "/images/watch_basic_2.jpg", // Watch basic
      "/images/jacket_basic_2.jpg", // Jacket basic
      "/images/powerbank_2.jpg", // Powerbank
    ];

    const productsLargeImgs = document.querySelectorAll(
      ".products.large img.primary"
    );
    productsLargeImgs.forEach((img, index) => {
      img.src = productLargeUrls[index];
    });

    const productsLargeImgsSecondary = document.querySelectorAll(
      ".products.large img.secondary"
    );
    productsLargeImgsSecondary.forEach((img, index) => {
      img.src = productLargeUrls[index + 6];
    });

    const onceUponImgSmall = document.querySelector(".once-upon-img-top > img");
    onceUponImgSmall.src = "/images/jacket_layers.jpg"; // Jacket layers

    // Remove campaign image, use background image instead for parallax on desktop
    //const campaignImg = document.querySelector(".campaign-img > img");
    //campaignImg.src = "/images/hiker-hd-desktop.jpg";
    //campaignImg.remove();
  } else {
    // Hero card paragraph
    const heroParagraph = document.querySelector(".hero .card p");
    heroParagraph.innerHTML =
      "Vi lottar ut produkter från vår nya kollektion till ett värde av 50 000 kr";

    // Once upon paragraph
    const paragraph = document.createElement("p");
    paragraph.innerHTML =
      "TrailBlaze är kollektionen för dig som inte backar för utmaningar. Med...";
    story.appendChild(paragraph);
  }
}

var x = window.matchMedia("(min-width: 450px)");
myFunction(x); // Call listener function at run time

// Prevent default when clicking submit button .send
const submitBtn = document.querySelector(".send");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  submitBtn.innerHTML = "Skickat!";
  submitBtn.style.backgroundColor = "#CACACA";
  submitBtn.style.color = "#000000";
});

function showOnceUponText() {
  if (!x.matches) {
    // On clicking add new section and div with all content
    const OnceUponText = document.querySelector(".story");
    const body = document.querySelector("body");
    const OnceUponContainer = document.querySelector(".once-upon-container");

    OnceUponText.style.display = "none";

    const newSection = document.createElement("section");
    newSection.classList.add("once-upon-onclick-container");

    const newDiv = document.createElement("div");
    newDiv.innerHTML =
      "<h2>Utrustad för utmaning</h2><p>Utforska vildmarken med ProTechs senaste tillskott - Sarek X4 Series Jacket. Utrustad med avancerad teknologi, inklusive elslingor som ger långvarig värme, och ett 100% vattentätt yttre, håller denna jacka dig bekväm och skyddad oavsett väder. Dess mångsidiga design passar perfekt för alla utomhusaktiviteter, med fokus på både funktionalitet och stil. <br><br> Hög kvalitet och hållbarhet är kännetecken för denna jacka, vilket gör den till det ultimata valet för äventyrsentusiaster. Upptäck naturen med självsäkerhet i ProTechs Sarek X4 Series Jacket.</p>";

    newSection.appendChild(newDiv);

    body.insertBefore(newSection, OnceUponContainer);

    // On clicking scale once upon img
    const OnceUponBigImg = document.querySelector(".once-upon-img-container");
    const OnceUponImgTop = document.querySelector(".once-upon-img-top");

    OnceUponBigImg.style.width = "122vw";
    OnceUponBigImg.style.height = "102vw";
    OnceUponImgTop.style.width = "60vw";
    OnceUponImgTop.style.height = "60vw";
    OnceUponImgTop.style.left = "6%";
  }
}

// Change file src for .hamburger img on click and active state
const hamburger = document.querySelector(".hamburger");
const hamburgerImg = document.querySelector(".hamburger img");
const dropMenu = document.querySelector(".drop-menu");

let isClicked = false;

hamburger.addEventListener("click", () => {
  if (!isClicked) {
    hamburgerImg.src = "/images/cancel.svg";
    isClicked = true;
    dropMenu.style.display = "flex";
    dropMenu.style.animation = "dropDown .3s ease-in-out forwards";
    dropMenu.style.transformOrigin = "top center";
  } else {
    hamburgerImg.src = "/images/hamburger.svg";
    isClicked = false;
    dropMenu.style.display = "none";
    /* dropMenu.style.animation = "close .3s ease-in-out backwards";
    dropMenu.style.transformOrigin = "bottom center"; */
  }
});

// Parallax on hiking img
// console.log(window.scrollY);

// if (!x.matches) {
//   window.addEventListener("scroll", function() {
//     const scrollpos = window.scrollY;
//     const imgscroll = document.querySelector(".campaign-img > img");

//     if (scrollpos > 2679 && scrollpos < 3000) {
//       imgscroll.style.transform = "scale(.8)";
//     } else {
//       imgscroll.style.transform = "scale(1)";
//     }
//   });
// }
