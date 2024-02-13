console.log("hello")



let bar = document.querySelector(".bar1");
let flood = document.querySelector(".flood");
let flood1 = document.querySelector(".flood1");

const toggleFunction = () => {
  const mediaQuerySmall = window.matchMedia("(max-width: 361px)");
  const mediaQueryMedium = window.matchMedia("(min-width: 362px) and (max-width: 500px)");

  if (mediaQuerySmall.matches) {
    flood.style.display = "none";
    flood1.style.display = flood1.style.display === "none" ? "block" : "none";
  } else if (mediaQueryMedium.matches) {
    flood.style.display = "none";
    flood1.style.display = flood1.style.display === "none" ? "block" : "none";
  } else {
    flood1.style.display = "none";
    flood.style.display = flood.style.display === "none" ? "block" : "none";
  }
};

bar.addEventListener("click", toggleFunction);

toggleFunction();


const removeChildElement = () => {
    const mediaQuery = window.matchMedia("(min-width: 362px) and (max-width: 500px)");
  
    if (mediaQuery.matches) {
      // Check if the child element exists before removing it
      const gazaInvasionElement = document.querySelector(".flood1 p[style='color: #b53b35;']");
      if (gazaInvasionElement) {
        gazaInvasionElement.remove();
      }
    }
  };
  
  bar.addEventListener("click", removeChildElement);
  
  removeChildElement();