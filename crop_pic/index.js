let cropBox = document.querySelector('#cropBox')
let mask = document.querySelector('#mask')
let previewImg = document.querySelector('#previewBox > img')

let cropBoxData = {
  x: cropBox.getBoundingClientRect().x,
  y: cropBox.getBoundingClientRect().y,
  width: cropBox.getBoundingClientRect().width, // 400
  height: cropBox.getBoundingClientRect().height, // 621
}

cropBox.addEventListener('mouseenter', (e) => {
  mask.style.display = 'block'
})

cropBox.addEventListener('mouseleave', (e) => {
  mask.style.display = 'none'
})

cropBox.addEventListener('mousemove', (e) => {
  let x = e.pageX - cropBoxData.x
  let y = e.pageY - cropBoxData.y
  // console.log(x, y);
  if (x < 50) {
    x = 50
  } else if (x + 50 > 400) {
    x = 350
  }
  if (y < 50) {
    y = 50
  } else if (y + 50 > 621) {
    y = 580
  }


  mask.style.left = `${x - 50}px`
  mask.style.top = `${y - 50}px`


  previewImg.style.left = `-${x - 50}px`
  previewImg.style.top = `-${y - 50}px`

})