// toogle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// toogle class active untuk shopping cart
const cartForm = document.querySelector(".shopping-cart");

document.querySelector("#shopping-cart-button").onclick = (e) => {
  cartForm.classList.toggle("active");
  e.preventDefault();
};

// klik di luar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!sc.contains(e.target) && !cartForm.contains(e.target)) {
    cartForm.classList.remove("active");
  }
});

// // Modal Box
// const itemDetailButton1 = document.querySelector(".item-detail-button-1");
// const itemDetailButton2 = document.querySelector(".item-detail-button-2");
// const itemDetailButton3 = document.querySelector(".item-detail-button-3");
// const itemDetailModal1 = document.querySelector("#item-detail-modal-1");
// const itemDetailModal2 = document.querySelector("#item-detail-modal-2");
// const itemDetailModal3 = document.querySelector("#item-detail-modal-3");

// itemDetailButton1.onclick = (e) => {
//   itemDetailModal1.style.display = "flex";
//   e.preventDefault();
// };
// itemDetailButton2.onclick = (e) => {
//   itemDetailModal2.style.display = "flex";
//   e.preventDefault();
// };
// itemDetailButton3.onclick = (e) => {
//   itemDetailModal3.style.display = "flex";
//   e.preventDefault();
// };

// // klik tombol close modal
// const closeIcon1 = document.querySelector("#close-icon-1");
// const closeIcon2 = document.querySelector("#close-icon-2");
// const closeIcon3 = document.querySelector("#close-icon-3");

// closeIcon1.onclick = (e) => {
//   itemDetailModal1.style.display = "none";
//   e.preventDefault();
// };
// closeIcon2.onclick = (e) => {
//   itemDetailModal2.style.display = "none";
//   e.preventDefault();
// };
// closeIcon3.onclick = (e) => {
//   itemDetailModal3.style.display = "none";
//   e.preventDefault();
// };

// // klik diluar modal
// window.onclick = (e) => {
//   if (e.target === itemDetailModal1) {
//     itemDetailModal1.style.display = "none";
//   }
//   if (e.target === itemDetailModal2) {
//     itemDetailModal2.style.display = "none";
//   }
//   if (e.target === itemDetailModal3) {
//     itemDetailModal3.style.display = "none";
//   }
// };

// Modal Box
const itemDetailButtons = document.querySelectorAll(".item-detail-button");
const itemDetailModals = document.querySelectorAll("#item-detail-modal");

itemDetailButtons.forEach((btn, index) => {
  btn.onclick = (e) => {
    itemDetailModals[index].style.display = "flex";
    e.preventDefault();
  };
});

// Klik tombol close modal
const closeIcons = document.querySelectorAll(".close-icon");

closeIcons.forEach((icon, index) => {
  icon.onclick = (e) => {
    itemDetailModals[index].style.display = "none";
    e.preventDefault();
  };
});

// Klik di luar modal
window.onclick = (e) => {
  itemDetailModals.forEach((modal) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
};
