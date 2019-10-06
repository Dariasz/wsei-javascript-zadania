document.addEventListener('DOMContentLoaded', function () {
  const el = document.getElementsByClassName('title')[0]

  function getDataAnimation(el) {
    const dataAnimation = el.getAttribute('data-animation')
    return dataAnimation
  }

  getDataAnimation(el)

  //#1
  const homeElement1 = document.getElementById('home')
  const homeElement2 = document.querySelector('[id=\'home\']')

  const liElement = document.querySelectorAll('li[data-direction]')
  const blockElement = document.getElementsByClassName('block')[0]

  //#2
  const elementsInNav = document.querySelectorAll('nav li')
  const paragraphsInDiv = document.querySelectorAll('div p')
  const divsInArticle = document.querySelectorAll('article div')

  //#3
  const firstArticle = document.querySelectorAll('article.first')
  document.querySelectorAll('article.first h1').length
})
