const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Set Initial State Of Menu
let showMenu = false;

const toggleMenu = () => {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    // Set Menu State
    showMenu = false;
  }
};
menuBtn.addEventListener("click", toggleMenu);

// Modal
const modalBtn = document.querySelectorAll(".modal-btn");

const toggleModal = btn => {
  let img = btn.target.currentSrc;
  let modal = document.getElementById(btn.target.dataset.target);
  let modalImg = modal.querySelector(".modal-content");
  let modalCaption = modal.querySelector(".modal-caption");

  modal.style.display = "block";
  modalImg.src = img;
  if (modalCaption !== null) {
    modalCaption.innerHTML = btn.target.alt;
  }

  // Get the <span> element that closes the modal
  var span = modal.querySelector(".modal-close");

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  };
};

modalBtn.forEach(ele => ele.addEventListener("click", toggleModal));
