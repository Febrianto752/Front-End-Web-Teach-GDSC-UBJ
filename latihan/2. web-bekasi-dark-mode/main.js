const switchModeElem = document.getElementsByClassName("switch-mode")[0];

switchModeElem.addEventListener("click", function (event) {
  const bodyElem = document.body;
  bodyElem.classList.toggle("dark-mode");
  console.log(document.body.classList.contains("dark-mode"));
  const cardsElem = document.getElementsByClassName("card");

  if (bodyElem.classList.contains("dark-mode")) {
    cardStyleToDarkMode(cardsElem);
    setSunIcon(switchModeElem);
  } else {
    cardStyleToLightMode(cardsElem);
    setMoonIcon(switchModeElem);
  }
});

const cardStyleToDarkMode = (cards) => {
  for (card of cards) {
    card.style.backgroundColor = "rgb(43, 43, 43)";
    card.style.boxShadow = "0 2px 8px 1px rgba(255, 255, 255, .8)";

    // change all style color of p element on card element to white
    card.querySelectorAll("p").forEach((pElem) => {
      pElem.style.color = "white";
    });

    if (card.querySelector("table")) {
      // change style of table element and figcaption element
      card.querySelector("table").style.color = "white";
      card.querySelector("figcaption").style.color = "white";
    }
  }
};

const cardStyleToLightMode = (cards) => {
  for (card of cards) {
    card.style.backgroundColor = "white";
    card.style.boxShadow = "0 4px 8px 1px rgba(0, 0, 0, .2)";

    card.querySelectorAll("p").forEach((pElem) => {
      pElem.style.color = "black";
    });

    if (card.querySelector("table")) {
      // change style of table element and figcaption element
      card.querySelector("table").style.color = "black";
      card.querySelector("figcaption").style.color = "black";
    }
  }
};

const setSunIcon = (switchModeElem) => {
  switchModeElem.firstElementChild.src = "./imgs/sun.png";
};

const setMoonIcon = (switchModeElem) => {
  switchModeElem.firstElementChild.src = "./imgs/moon.png";
};
