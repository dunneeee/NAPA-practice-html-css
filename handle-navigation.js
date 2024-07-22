const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.classList.add("cursor-pointer");
  card.addEventListener("click", () => {
    if (card.classList.contains("card--blog")) {
      window.location.href = "./blog-post.html";
    } else {
      window.location.href = "./funded-grant-detail.html";
    }
  });
});

const avatars = document.querySelectorAll(".avatar");

avatars.forEach((avatar) => {
  avatar.classList.add("cursor-pointer");
  avatar.addEventListener("click", (e) => {
    e.stopPropagation();
    window.location.href = "./grantee.html";
  });
});

// Close navigation

const closeNav = document.querySelector(".js--close-icon");
const openNav = document.querySelector(".js--open-icon");
const nav = document.querySelector(".js--nav");

closeNav.addEventListener("click", () => {
  nav.classList.toggle("topbar--active");
});

openNav.addEventListener("click", () => {
  nav.classList.toggle("topbar--active");
});
