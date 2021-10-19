/*          step 1         */

//button 1
document.getElementById("h2Size").addEventListener("click", () => {
  const heading = document.querySelectorAll("h2");

  heading.forEach((element) => {
    element.style.fontSize = "xx-large";
  });
});

//button 2
document.getElementById("parFontStyle").addEventListener("click", () => {
  const paragraph = document.querySelectorAll("p");

  paragraph.forEach((element) => {
    element.style.fontStyle = "italic";
  });
});

//button 3
document.getElementById("paraHighlight").addEventListener("click", () => {
  const paragraph = document.querySelectorAll("p");

  paragraph.forEach((element) => {
    element.style.backgroundColor = "yellow";
  });
});

//button 4
document.getElementById("hideImage").addEventListener("click", () => {
  const image = document.querySelector("img");
  image.style.display = "none";
});

//button 5
document.getElementById("alternate").addEventListener("click", () => {
  const images = document.querySelectorAll("img");

  imagesSrc = images[0].src;

  images[0].src = images[1].src;
  images[1].src = imagesSrc;
});

/*          step 2         */
const image1 = document.getElementById("img1");
image1.addEventListener("mouseover", () => {
  image1.src = "image/jsLogo3.png";
});
image1.addEventListener("mouseout", () => {
  image1.src = "image/jsLogo.png";
});

const image2 = document.getElementById("img2");
image2.addEventListener("mouseover", () => {
  image2.src = "image/jsLogo3.png";
});
image2.addEventListener("mouseout", () => {
  image2.src = "image/jsLogo2.png";
});

/*          step 3         */
document.getElementById("img1").addEventListener("contextmenu", () => {
  alert("image  alert");
});

document.getElementById("img2").addEventListener("contextmenu", () => {
  alert("image  alert");
});

/*          step 4         */
document.querySelector("input").addEventListener("change", () => {
  alert("input  alert");
});

/*          step 5         */
window.onload = function () {
  alert("page has loaded");
};

/*          step 6         */
const paragraph = document.querySelectorAll("p");
paragraph.forEach((ele) => {
  ele.addEventListener("mouseover", () => {
    ele.style.backgroundColor = "red";
  });

  ele.addEventListener("mouseout", () => {
    ele.style.backgroundColor = "";
  });
});
