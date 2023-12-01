let rulebtn = document.querySelector(".btn-rule");
    let rulebook = document.querySelector(".rule-book");
    rulebtn.addEventListener("click", () => {
      rulebook.style.display = "block";
    })
    let cross = document.querySelector(".cross");
    cross.addEventListener("click", () => {
      rulebook.style.display = "none";
    })