let con = document.querySelectorAll(".con");
let computer = document.querySelectorAll(".computer");
let user = document.querySelector(".user");
let machine = document.querySelector(".machine");
let win = document.querySelector(".win");
let youwin = document.querySelector(".you-win");
let next = document.querySelector(".btn-next");
let play = document.querySelector(".play");
let tie = document.querySelector(".tie");
let tieup = document.querySelector(".tie-up");
let replay = document.querySelector(".replay");
console.log(computer);
let random = Math.floor(Math.random() * 3);
let line = document.querySelectorAll(".line");
let rulebtn = document.querySelector(".btn-rule");
let rulebook = document.querySelector(".rule-book");
let score = JSON.parse(localStorage.getItem("score"))
let score1 = JSON.parse(localStorage.getItem("score1"))
let scoreElem = document.getElementById("score");
if (score) {
    scoreElem.innerText = score;
}
let count = 0;
let scoreEle = document.getElementById("score1");
if (score1) {
    scoreEle.innerText = score1;
}
let count1 = 0;
con.forEach((element, index) => {
    element.addEventListener("click", () => {
        user.style.opacity = "1";
        line.forEach(item => {
            item.style.display = "none";
        });
        con.forEach(item => {
            item.style.display = "none";
        });
        element.style.display = "block";
        element.classList.add("show");
        setTimeout(() => {
            machine.style.opacity = "1";
            setTimeout(() => {
                computer[random].style.display = "block";
                computer[random].classList.add("right");
            }, 1000);
        }, 500);
        setTimeout(() => {
            if (random == index) {
                tie.style.display = "block";
                tieup.innerText = "TIE UP";
            }
            else if (index == 0 && random == 2 || index == 1 && random == 0 || index == 2 && random == 1) {
                win.style.display = "block";
                youwin.innerText = "YOU WIN";
                count1 = score1;
                count1++;
                scoreEle.innerText = count1;
                localStorage.setItem("score1", JSON.stringify(count1));
                next.style.display = "inline-block";
            } else {
                win.style.display = "block";
                youwin.innerText = "YOU LOOSE";
                count = score;
                count++;
                scoreElem.innerText = count;
                localStorage.setItem("score", JSON.stringify(count));
            }
        }, 1500);
    })
});

play.addEventListener("click", () => {
    window.location.reload();
})
replay.addEventListener("click",()=>{
    window.location.reload();
})
rulebtn.addEventListener("click", () => {
    rulebook.style.display = "block";
})
let cross=document.querySelector(".cross");
cross.addEventListener("click",()=>{
    rulebook.style.display = "none";
})
