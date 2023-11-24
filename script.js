// Show language menu on click
const langContainer = document.querySelector(".language");
const langBtn = document.querySelector(".language-button");

langBtn.addEventListener("click", () => {
  langContainer.classList.toggle("show-menu");
});

// Select language on click
const langOptions = document.querySelectorAll(".language-menu li");

langOptions.forEach((langOption) => {
  langOption.addEventListener("click", () => {
    langOptions.forEach((option) => {
      option.classList.toggle("selected");
    });
    setTimeout(() => {
      langContainer.classList.toggle("show-menu");
    }, 300);
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
    // Once upon paragraph(s)
    const paragraphOne = document.createElement("p");
    paragraphOne.innerHTML =
      "Utforska vildmarken med ProTechs senaste tillskott – Sarek X4 Series Jacket. Utrustad med avancerad teknologi, inklusive elslingor som ger långvarig värme, och ett 100% vattentätt yttre, håller denna jacka dig bekväm och skyddad oavsett väder. Dess mångsidiga design passar perfekt för alla utomhusaktiviteter, med fokus på både funktionalitet och stil.";
    const paragraphTwo = document.createElement("p");
    paragraphTwo.innerHTML =
      "Hög kvalitet och hållbarhet är kännetecken för denna jacka, vilket gör den till det ultimata valet för äventyrsentusiaster. Upptäck naturen med självsäkerhet i ProTechs Sarek X4 Series Jacket.";
    story.appendChild(paragraphOne);
    story.appendChild(paragraphTwo);

    // Desktop images
    const productSmallUrls = [
      "/images/placeholders/image-placeholder-1.png", //Jacket BLACK
      "/images/placeholders/image-placeholder-2.png", //Jacket BLUE
      "/images/placeholders/image-placeholder-3.png", //Jacket YELLOW
    ];

    const productsSmallImgs = document.querySelectorAll(".products.small img");
    productsSmallImgs.forEach((img, index) => {
      img.src = productSmallUrls[index];
    });

    const productLargeUrls = [
      "/images/placeholders/image-placeholder-4.png", //Jacket GREEN
      "/images/placeholders/image-placeholder-8.png", //Jacket brown
      "/images/placeholders/image-placeholder-5.png", //Spark
      "/images/placeholders/image-placeholder-6.png", //Power bank
      "/images/placeholders/image-placeholder-3.png", //Jacket YELLOW
      "/images/placeholders/image-placeholder-9.png", //Powerbank pro
    ];

    const productsLargeImgs = document.querySelectorAll(".products.large img");
    productsLargeImgs.forEach((img, index) => {
      img.src = productLargeUrls[index];
    });

    // const onceUponImgLarge = document.createElement("img");
    // onceUponImgLarge.src = "images/placeholders/imgage-placeholder-7.png"; // Mountain
    // document
    //   .querySelector(".img-container-campaign")
    //   .appendChild(onceUponImgLarge);

    const onceUponImgSmall = document.querySelector(".once-upon-img-top > img");
    onceUponImgSmall.src = "/images/placeholders/image-placeholder-4.png"; // Green jacket

    // Campaign image
    // const campaignImg = document.createElement("img");
    // campaignImg.src = "/images/placeholders/campaign-hiker.png";
    // document.querySelector(".campaign-img").appendChild(campaignImg);
    const campaignImg = document.querySelector(".campaign-img > img");
    campaignImg.src = "/images/placeholders/campaign-hiker.png";
  } else {
    // Once upon paragraph
    const paragraph = document.createElement("p");
    paragraph.innerHTML =
      "TrailBlaze är kollektionen för dig som inte backar för utmaningar. Med...";
    story.appendChild(paragraph);
  }
}

var x = window.matchMedia("(min-width: 450px)");
myFunction(x); // Call listener function at run time
