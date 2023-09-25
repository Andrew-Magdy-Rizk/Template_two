//Buttom right
let clickRight = document.getElementById("right");
clickRight.addEventListener("click", function () {
  let myBullets = Array.from(document.querySelectorAll(".landing .bullets li"));
  let backGround = document.getElementById("landing");
  for (let i = 0; i < myBullets.length; i++) {
    if (myBullets[i] === myBullets[2]) {
      if (myBullets[i].className === "active") {
        myBullets[i].removeAttribute("class");
        myBullets[0].setAttribute("class", "active");
        backGround.style.cssText = "background-image: url(Image/landing3.jpg);";
      }
    }

    if (myBullets[i].className === "active") {
      myBullets[i].removeAttribute("class");
      myBullets[++i].setAttribute("class", "active");
      if (myBullets[i] === myBullets[1]) {
        backGround.style.cssText = "background-image: url(Image/landing.jpg);";
      } else if (myBullets[i] === myBullets[2]) {
        backGround.style.cssText = "background-image: url(Image/landing4.jpg);";
      }
    }
  }
});
//Buttom Left
let clickLeft = document.getElementById("left");
clickLeft.addEventListener("click", function () {
  let myBullets = Array.from(document.querySelectorAll(".landing .bullets li"));
  let backGround = document.getElementById("landing");
  for (let i = myBullets.length - 1; i >= 0; i--) {
    if (myBullets[i] === myBullets[0]) {
      if (myBullets[i].className === "active") {
        myBullets[i].removeAttribute("class");
        myBullets[2].setAttribute("class", "active");
        backGround.style.cssText = "background-image: url(Image/landing4.jpg);";
      }
    }

    if (myBullets[i].className === "active") {
      myBullets[i].removeAttribute("class");
      myBullets[--i].setAttribute("class", "active");
      if (myBullets[i] === myBullets[1]) {
        backGround.style.cssText = "background-image: url(Image/landing.jpg);";
      } else if (myBullets[i] === myBullets[0]) {
        backGround.style.cssText = "background-image: url(Image/landing3.jpg);";
      }
    }
  }
});
