import "regenerator-runtime/runtime.js"

export default {
  init: () => {
    const poetryBtn = document.getElementById('read-poetry')

    if (!poetryBtn)
      return

    const modalOverlay = document.getElementById('modal-overlay')
    const poetryModal = document.getElementById('poetry-modal')

    const modalHeader = poetryModal.querySelector('.header')
    const modalTitle = modalHeader.querySelector('h1')
    const modalAuthor = modalHeader.querySelector('h2')
    const modalBody = poetryModal.querySelector('.body')

    modalOverlay.addEventListener('click', e => {
      poetryModal.classList.remove('show')
      modalOverlay.classList.remove('show')
      poetryModal.classList.add('hide')
    })

    poetryBtn.addEventListener('click', async e => {
      const poem = await fetch('https://poetrydb.org/random').then(resp => {
        return resp.json()
      }).then(json => json[0])

      modalTitle.innerHTML = poem.title
      modalAuthor.innerHTML = `by ${poem.author}`
      modalBody.innerHTML = ''

      poem.lines.forEach(line => {
        const para = document.createElement('p')
        para.innerHTML = line
        modalBody.append(para)
      })

      poetryModal.classList.remove('hide')
      poetryModal.classList.add('show')
      modalOverlay.classList.add('show')

      modalBody.style.paddingTop = `${modalHeader.offsetHeight}px`
    })
  }
}
