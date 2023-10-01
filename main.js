//Buttom right

let clickRight = document.getElementById("right");
let myBullets = document.querySelectorAll(".landing .bullets li");
let backGround = document.getElementById("landing");
let clickLeft = document.getElementById("left");

clickRight.addEventListener("click", () => {
  for (let i = 0; i < myBullets.length; i++) {
    if (myBullets[i] === myBullets[2] && myBullets[i].className === "active") {
      myBullets[i].removeAttribute("class");
      myBullets[0].setAttribute("class", "active");
      backGround.style.cssText = "background-image: url(Image/landing-1.jpg);";
    } else if (myBullets[i].className === "active") {
      myBullets[i].removeAttribute("class");
      myBullets[++i].setAttribute("class", "active");
      if (myBullets[i] === myBullets[1]) {
        backGround.style.cssText =
          "background-image: url(Image/landing-2.jpg);";
      } else {
        backGround.style.cssText =
          "background-image: url(Image/landing-3.jpg);";
      }
    }
  }
});

//Buttom Left

clickLeft.addEventListener("click", () => {
  for (let i = myBullets.length - 1; i >= 0; i--) {
    if (myBullets[i] === myBullets[0] && myBullets[i].className === "active") {
      myBullets[i].removeAttribute("class");
      myBullets[myBullets.length - 1].setAttribute("class", "active");
      backGround.style.cssText = "background-image: url(Image/landing-3.jpg);";
    } else if (myBullets[i].className === "active") {
      myBullets[i].removeAttribute("class");
      myBullets[--i].setAttribute("class", "active");
      if (myBullets[i] === myBullets[1]) {
        backGround.style.cssText =
          "background-image: url(Image/landing-2.jpg);";
      } else {
        backGround.style.cssText =
          "background-image: url(Image/landing-1.jpg);";
      }
    }
  }
});

// Click Direct on Bullets

for (let i = 0; i < myBullets.length; i++) {
  myBullets[i].addEventListener("click", () => {
    for (let j = 0; j < myBullets.length; j++) {
      myBullets[j].removeAttribute("class");
    }
    myBullets[i].setAttribute("class", "active");
    if (myBullets[i] === myBullets[0]) {
      backGround.style.cssText = "background-image: url(Image/landing-1.jpg);";
    } else if (myBullets[i] === myBullets[1]) {
      backGround.style.cssText = "background-image: url(Image/landing-2.jpg);";
    } else {
      backGround.style.cssText = "background-image: url(Image/landing-3.jpg);";
    }
  });
}
