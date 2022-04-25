let buttons = document.querySelectorAll('.rating__buttons--button')
let submitBtn = document.querySelector('.rating-state__submit')
let firstWindow = document.querySelector('.rating-state')
let secondWindow = document.querySelector('.thank-state')
let resultRating = document.querySelector('#rating')
let rating = '0';

let choosenRating = (e) => {
  buttons.forEach(el => {
    el.style = 'none'
  })
  let choosenBtn = e.target

  choosenBtn.style.backgroundColor = 'hsl(25, 97%, 53%)';
  choosenBtn.style.color = 'hsl(0, 0%, 100%)';

  rating = choosenBtn.textContent
}

let submitRating = () => {
  if (rating === '0') {
    return
  }
  firstWindow.style.display = 'none'
  secondWindow.style.display = 'block'
  resultRating.textContent = rating
}
 
buttons.forEach(el => el.addEventListener('click', choosenRating));
submitBtn.addEventListener('click', submitRating)