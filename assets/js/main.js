document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".subscribe").addEventListener("click", () => {
    document.querySelector(".modal").classList.toggle("hidden");
  });
});

const switchModal = () => {
  document.querySelector(".modal").classList.toggle("hidden");
};
