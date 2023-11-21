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
  story.innerHTML = "";
  if (x.matches) {
    // If media query matches
    const paragraphOne = document.createElement("p");
    paragraphOne.innerHTML =
      "TrailBlaze är kollektionen för dig som inte backar för utmaningar. MedProTechs vision är att skapa en meningsfull och berikande upplevelse för sina kunder genom att erbjuda högkvalitativa vildmarksprodukter som förbättrar deras utomhuslivsstil. Vi strävar efter att vara en pålitlig partner för våra kunder när det gäller utrustning och teknik för äventyr i naturen.";
    const paragraphTwo = document.createElement("p");
    paragraphTwo.innerHTML =
      "Vi fokuserar mest på att erbjuda produkter som inte bara uppfyller, utan överträffar sina kunders förväntningar när det gäller kvalitet och funktionalitet. Vårt sortiment inkluderar väl genomtänkta produkter, som powerbanks och vattentäta hörlurar, som är utformade för att möta de specifika behoven hos dem som älskar att spendera tid i naturen.";
    story.appendChild(paragraphOne);
    story.appendChild(paragraphTwo);
  } else {
    const paragraph = document.createElement("p");
    paragraph.innerHTML =
      "TrailBlaze är kollektionen för dig som inte backar för utmaningar. Med...";
    story.appendChild(paragraph);
  }
}

var x = window.matchMedia("(min-width: 450px)");
myFunction(x); // Call listener function at run time
