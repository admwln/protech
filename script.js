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
      "TrailBlaze är kollektionen för dig som inte backar för utmaningar. MedProTechs vision är att skapa en meningsfull och berikande upplevelse för sina kunder genom att erbjuda högkvalitativa vildmarksprodukter som förbättrar deras utomhuslivsstil. Vi strävar efter att vara en pålitlig partner för våra kunder när det gäller utrustning och teknik för äventyr i naturen.";
    const paragraphTwo = document.createElement("p");
    paragraphTwo.innerHTML =
      "Vi fokuserar mest på att erbjuda produkter som inte bara uppfyller, utan överträffar sina kunders förväntningar när det gäller kvalitet och funktionalitet. Vårt sortiment inkluderar väl genomtänkta produkter, som powerbanks och vattentäta hörlurar, som är utformade för att möta de specifika behoven hos dem som älskar att spendera tid i naturen.";
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

    const onceUponImgLarge = document.createElement("img");
    onceUponImgLarge.src = "images/placeholders/imgage-placeholder-7.png"; // Mountain
    document
      .querySelector(".img-container-campaign")
      .appendChild(onceUponImgLarge);

    const onceUponImgSmall = document.createElement("img");
    onceUponImgSmall.src = "/images/placeholders/image-placeholder-4.png"; // Green jacket
    document.querySelector(".once-upon-img-top").appendChild(onceUponImgSmall);

    // Campaign image
    const campaignImg = document.createElement("img");
    campaignImg.src = "/images/placeholders/campaign-hiker.png";
    document.querySelector(".campaign-img").appendChild(campaignImg);
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
