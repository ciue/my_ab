let small = document.querySelector(".small");
let big = document.querySelector(".big");
let img = document.querySelector(".small>img");
let imgZoom = document.querySelector(".img-zoom");
let smallX = small.getBoundingClientRect().x; //左边界
let smallY = small.getBoundingClientRect().y; //上边界

small.addEventListener("mousemove", e => {
  let top = e.clientY - smallY - 90;
  let left = e.clientX - smallX - 90;

  if (top < 0) {
    top = 0;
  }

  if (top > 460 - 180) {
    top = 460 - 180;
  }

  if (left < 0) {
    left = 0;
  }
  if (left > 460 - 180) {
    left = 460 - 180;
  }

  imgZoom.style.top = `${top}px`;
  imgZoom.style.left = `${left}px`;

  big.style.backgroundPosition = `-${left*2.5}px -${top*2.5}px`;
});

small.addEventListener("mouseover", e => {
  imgZoom.style.display = "block";
  big.style.display = "block";
});

small.addEventListener("mouseleave", e => {
  imgZoom.style.display = "none";
  big.style.display = "none";
});

window.addEventListener("click", e => {
  let top = e.clientY - smallY - 90;
  let left = e.clientX - smallX - 90;

  top = e.clientY - smallY - 90;
  left = e.clientX - smallX - 90;

  console.log(left, top);
});
