//using selectors inside the element
const question = document.querySelectorAll(".question");

question.forEach(function (item) {
    
  const btn = item.querySelector(".question-btn");

  btn.addEventListener("click", function () {
      question.forEach(function (index) {
        console.log(index);
      if (index !== item) {
        index.classList.remove("show-text");
      }
    });
    item.classList.toggle("show-text");
  });
});
