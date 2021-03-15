export default {
  init() {
    const LIGHT = 'light'
    const DARK = 'dark'

    const DARK_MODE = `${DARK}-mode`
    const LIGHT_MODE = `${LIGHT}-mode`

    const LOCAL_STORAGE_KEY = 'prefersColorScheme'

    const htmlEl = document.querySelector('html')

    const toggleDarkMode = () => {
      if (htmlEl.classList.contains(DARK_MODE)) {
        disableDarkMode()
      } else {
        enableDarkMode()
      }
    }

    const disableDarkMode = () => {
      htmlEl.classList.remove(DARK_MODE)
      htmlEl.classList.add(LIGHT_MODE)
      localStorage.setItem(LOCAL_STORAGE_KEY, LIGHT)
    }

    const enableDarkMode = () => {
      htmlEl.classList.add(DARK_MODE)
      htmlEl.classList.remove(LIGHT_MODE)
      localStorage.setItem(LOCAL_STORAGE_KEY, DARK)
    }

    const prefersDarkMode = () => {
      if (matchMedia('(prefers-color-scheme: dark)').matches) {
        return localStorage.getItem(LOCAL_STORAGE_KEY) != LIGHT
      } else {
        return localStorage.getItem(LOCAL_STORAGE_KEY) === DARK
      }
    }

    document
      .getElementById('dark-mode-toggle')
      .addEventListener('click', toggleDarkMode)

    if (prefersDarkMode()) {
      htmlEl.classList.add(DARK_MODE)
    } else {
      htmlEl.classList.add(LIGHT_MODE)
    }
  }
}
