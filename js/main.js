(() => {
  document.addEventListener('DOMContentLoaded', () => {
    indicateJSEnabled()
    initHomeGreeting()
    initDarkLightMode()
    initStickyHeader()
  })

  const indicateJSEnabled = () => {
    const NO_JS = 'no-js'
    const selector = `.${NO_JS}`

    document.querySelectorAll(selector).forEach(el => el.classList.remove(NO_JS))
  }

  const initHomeGreeting = () => {
    const homeGreetingEl = document.querySelector('#surprise')

    if (homeGreetingEl)
      homeGreetingEl.innerText = getGreeting()
  }

  const getGreeting = () => {
    const randomNum = Math.floor(Math.random() * 100) % 2

    return randomNum === 0 ?
      `${timeGreeting()}.` :
      `${dayGreeting()}.`
  }

  const timeGreeting = () => {
    const hour = new Date().getHours()

    if (hour > 4 && hour < 12) {
      return "Good morning"
    } else if (hour >= 12 && hour < 17) {
      return "Good afternoon"
    } else if (hour >= 17 && hour < 22) {
      return "Good evening"
    } else {
      return "I hope you're getting enough sleep"
    }
  }

  const dayGreeting = () => {
    const MONDAY = "Monday"

    const weekdays = [
      "Sunday",
      MONDAY,
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ]

    const weekday = weekdays[new Date().getDay()]

    return `${weekday === MONDAY ? 'Welcome back to' : 'Happy'} ${weekday}`
  }

  const initDarkLightMode = () => {
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

    if (prefersDarkMode())
      htmlEl.classList.add(DARK_MODE)
  }

  const initStickyHeader = () => {
    const header = document.querySelector('header')
    const topBar = document.querySelector('#top-bar')
    const img = document.querySelector('img')

    const IMG_HEIGHT_AT_LOAD = img.getBoundingClientRect().top

    const IMG_DIM_SMALL = 50
    const IMG_DIM_LARGE = 200

    const ghostElement = document.createElement('div')
    ghostElement.style.height = `${topBar.offsetHeight}px`

    window.onscroll = e => {
      if (window.pageYOffset >= IMG_HEIGHT_AT_LOAD) {
        img.height = IMG_DIM_SMALL
        img.width = IMG_DIM_SMALL
        topBar.classList.add('fixedTop')
        header.appendChild(ghostElement)
      } else {
        img.height = IMG_DIM_LARGE
        img.width = IMG_DIM_LARGE
        topBar.classList.remove('fixedTop')
        ghostElement.remove()
      }
    }
  }
})()
