(function () {
  var mainMenu = document.querySelector(".main-menu");
  var mainMenuToggler = mainMenu.querySelector(".main-menu__toggle");
  var mainMenuList = mainMenu.querySelector(".main-menu__list");

  mainMenuList.classList.add("main-menu__list--hidden");
  mainMenuToggler.classList.remove("main-menu__toggle--close");

  mainMenuToggler.addEventListener("click", function(e) {
    e.preventDefault();
    mainMenuList.classList.toggle("main-menu__list--hidden");
    mainMenuToggler.classList.toggle("main-menu__toggle--close");
  });

  objectFitImages(null, {watchMQ: true});
}());
