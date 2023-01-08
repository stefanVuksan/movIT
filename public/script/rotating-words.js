window.textRotate = (selector, el = null) => {
  // https://www.cssscript.com/rotating-text-in-sequence-with-javascript-and-css3/
  var words = (el || document).getElementsByClassName(selector)
  if (!words || words.length === 0) return
  var wordArray = []
  var currentWord = 0
  words[currentWord].style.opacity = 1

  for (var i = 0; i < words.length; i++) {
    splitLetters(words[i])
  }

  function changeWord() {
    var cw = wordArray[currentWord]
    var nw =
      currentWord === words.length - 1
        ? wordArray[0]
        : wordArray[currentWord + 1]
    for (let i = 0; i < cw.length; i++) animateLetterOut(cw, i)

    for (let i = 0; i < nw.length; i++) {
      nw[i].className = 'letter behind'
      nw[0].parentElement.style.opacity = 1
      animateLetterIn(nw, i)
    }

    currentWord = currentWord == wordArray.length - 1 ? 0 : currentWord + 1
  }

  function animateLetterOut(cw, i) {
    setTimeout(function () {
      cw[i].className = 'letter out'
    }, i * 80)
  }
  function animateLetterIn(nw, i) {
    setTimeout(function () {
      nw[i].className = 'letter in'
    }, 340 + i * 80)
  }

  function splitLetters(word) {
    var content = word.innerHTML
    word.innerHTML = ''
    var letters = []

    for (var i = 0; i < content.length; i++) {
      var letter = document.createElement('span')
      letter.className = 'letter'
      letter.innerHTML = content.charAt(i)
      word.appendChild(letter)
      letters.push(letter)
    }

    wordArray.push(letters)
  }

  setInterval(() => changeWord(), 3000)

  changeWord()
}
;(() => {
  const init = () =>
    setTimeout(
      () =>
        document
          .querySelectorAll('div[data-text-rotating]')
          .forEach((el) => window.textRotate('word', el)),
      200,
    )
  document.readyState !== 'loading' ? init() : document.addEventListener('DOMContentLoaded', () => init())
})()
