// toggle
const navbarNav = document.querySelector(".navbar-nav");

//ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// // toggle class active untuk search form
// const searchFrom = document.querySelector(".search-form");
// const searchBox = document.querySelector("#search-box");

// // toggle class active untuk shipping cart
// const shoppingCart = document.querySelector(".shopping-cart");
// document.querySelector("#shopping-cart-button").onclick = (e) => {
//   shoppingCart.classList.toggle("active");
//   e.preventDefault();
// };

// document.querySelector("#search-button").onclick = (e) => {
//   searchFrom.classList.toggle("active");
//   searchBox.focus();
//   e.preventDefault();
// };

//klik di luar elemn
const hm = document.querySelector("#hamburger-menu");
// const sb = document.querySelector("#search-button");
// const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchFrom.contains(e.target)) {
    searchFrom.classList.remove("active");
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// modal box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

//klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};

const scriptURL =
  "https://script.google.com/macros/s/AKfycbyUWnx66fXEc5Cv0Brr6A4Rn7ewauvXlRCeZbGHigVhcIv-9VQ22zUu_x2p4RF9jgAL/exec";

const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => alert("Terima kasih! Pesan Anda berhasil dikirim."))
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});

window.onload = function() {
  const scrollContainer = document.querySelector('.scroll-content');
  const firstElementWidth = scrollContainer.firstElementChild.clientWidth;

  // Clone items to ensure smooth infinite scroll
  for (let i = 0; i < scrollContainer.children.length / 2; i++) {
      scrollContainer.appendChild(scrollContainer.children[i].cloneNode(true));
  }

  scrollContainer.style.animationDuration = `${scrollContainer.children.length * firstElementWidth / 80}s`;
};


