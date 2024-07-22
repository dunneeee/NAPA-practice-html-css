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
