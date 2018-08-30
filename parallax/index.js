let first = document.querySelector('.first')
let second = document.querySelector('.second')
let speed = 0

document.addEventListener('wheel', (e) => {
  e.preventDefault()

  // 向下滚 图片左移动
  if (e.deltaY > 0) {
    speed >= 300 ? speed = 300 : speed += 25
    first.style.transform = `translateX(-${speed}%)`;

    if (speed % 100 >= 50) second.style.transform = `translateX(-${speed-20}%)`
    if (speed % 100 === 0) second.style.transform = `translateX(-${speed}%)`
  }

  // 向上滚 
  if (e.deltaY < 0) {
    speed < 0 ? speed = 0 : speed -= 25
    first.style.transform = `translateX(-${speed}%)`;
    
    if (speed % 100 >= 50) second.style.transform = `translateX(-${speed-20}%)`
    if (speed % 100 === 0) second.style.transform = `translateX(-${speed}%)`
  }
})