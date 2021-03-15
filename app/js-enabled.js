export default {
  init() {
    const NO_JS = 'no-js'
    const selector = `.${NO_JS}`

    document.querySelectorAll(selector)
      .forEach(el => el.classList.remove(NO_JS))
  }
}
