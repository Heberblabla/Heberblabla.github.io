document.addEventListener("DOMContentLoaded", function () {
    var chocolateBox = document.querySelector(".chocolate-box");
    var tittle = document.querySelector(".tittle");
    var topRight = document.getElementById("top-right");
    var white = document.getElementById("white");
    var bottomRight = document.getElementById("bottom-right");
    var truffle = document.getElementById("truffle");
    var topLeft = document.getElementById("top-left");
    var truffle2 = document.getElementById("truffle2");
    var bottomLeft = document.getElementById("bottom-left");
    var milk = document.getElementById("milk");
  
    chocolateBox.addEventListener("mouseenter", function () {
      tittle.style.display = "none";
    });
  
    chocolateBox.addEventListener("mouseleave", function () {
      tittle.style.display = "block";
    });
  
    topRight.addEventListener("mouseenter", function () {
      white.style.display = "block";
    });
  
    topRight.addEventListener("mouseout", function () {
      white.style.display = "none";
    });
  
    bottomRight.addEventListener("mouseenter", function () {
      truffle.style.display = "block";
    });
  
    bottomRight.addEventListener("mouseout", function () {
      truffle.style.display = "none";
    });
  
    topLeft.addEventListener("mouseenter", function () {
      truffle2.style.display = "block";
    });
  
    topLeft.addEventListener("mouseout", function () {
      truffle2.style.display = "none";
    });
  
    bottomLeft.addEventListener("mouseenter", function () {
      milk.style.display = "block";
    });
  
    bottomLeft.addEventListener("mouseout", function () {
      milk.style.display = "none";
    });
  });
  