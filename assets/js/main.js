document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".btn").addEventListener("click", () => {
    // console.log("coucou");
    document.querySelector("body").classList.add("subscribe");
    // bonjour();
  });
});

const bonjour = () => {
  alert("Bonjour");
};
