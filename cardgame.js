const btn = document.getElementById("start-btn");
let startTime;

document.addEventListener("DOMContentLoaded", () => {
  const imgs = document.querySelectorAll("img");

  imgs.forEach((img) => {
    const originalSrc = img.getAttribute("data-original");
    img.src = originalSrc;
  });

  setTimeout(() => {
    imgs.forEach((img) => {
      img.src = "/image/commonping.png";
    });
  }, 2000);
});

const imgs = document.querySelectorAll("img");

let selectImg1 = "";

let selectImg2 = "";

let resetImg1;

let resetImg2;

let count = 0;

let finishCount = 0;

imgs.forEach((img) => {
  img.addEventListener("click", () => {
    const originalSrc = img.getAttribute("data-original");

    const success = img.getAttribute("data-success");
    if (success == "1") {
      return;
    }

    img.src = originalSrc;
    img.classList.add("flipped");

    if (selectImg1 == "") {
      selectImg1 = img;
    } else {
      selectImg2 = img;

      const originalSrc1 = selectImg1.getAttribute("data-original");
      const originalSrc2 = selectImg2.getAttribute("data-original");

      if (originalSrc1 == originalSrc2) {
        selectImg1.setAttribute("data-success", "1");
        selectImg2.setAttribute("data-success", "1");
        finishCount += 1;
        if (finishCount == 8) {
          alert("모든 카드를 맞혔습니다!");
        }
      } else {
        resetImg1 = selectImg1;
        resetImg2 = selectImg2;
        count += 1;

        setTimeout(() => {
          resetImg1.src = "/image/commonping.png";
          resetImg2.src = "/image/commonping.png";
          resetImg1.classList.remove("flipped");
          resetImg2.classList.remove("flipped");
        }, 1000);
      }
      selectImg1 = "";
      selectImg2 = "";
    }
  });
});
