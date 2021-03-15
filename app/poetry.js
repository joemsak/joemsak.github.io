import "regenerator-runtime/runtime.js"

export default {
  init: () => {
    const poetryBtn = document.getElementById('read-poetry')

    if (!poetryBtn)
      return

    const body = document.querySelector('body')
    const poetryModal = document.getElementById('poetry-modal')
    const modalOverlay = document.getElementById('modal-overlay')

    modalOverlay.addEventListener('click', e => {
      body.classList.remove('modal-open')
      poetryModal.classList.remove('show')
      modalOverlay.classList.remove('show')
    })

    poetryBtn.addEventListener('click', async e => {
      const poem = await fetch('https://poetrydb.org/random').then(resp => {
        return resp.json()
      }).then(json => json[0])

      poetryModal.querySelector('h1').innerHTML = poem.title
      poetryModal.querySelector('h2').innerHTML = `by ${poem.author}`
      poetryModal.querySelector('.body').innerHTML = ''

      poem.lines.forEach(line => {
        const para = document.createElement('p')
        para.innerHTML = line
        poetryModal.querySelector('.body').append(para)
      })

      body.classList.add('modal-open')
      poetryModal.classList.add('show')
      modalOverlay.classList.add('show')
    })
  }
}
