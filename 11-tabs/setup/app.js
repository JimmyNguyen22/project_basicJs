const tabBtn = document.querySelectorAll(".tab-btn");
const content = document.querySelectorAll(".content");
const about = document.querySelector(".about");

about.addEventListener("click", (e) => {
  const id = e.target.value;
  if (id) {
    // remove active from other buttons
    tabBtn.forEach((btn) => {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    // hide other articles
    content.forEach((article) => {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
