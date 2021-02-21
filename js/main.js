(() => {
  document.addEventListener('DOMContentLoaded', () => {
    initJS()
    initHomeGreeting()
  })

  const initJS = () => {
    document.querySelector('.no-js').classList.remove('no-js')
  }

  const initHomeGreeting = () => {
    const homeGreetingEl = document.querySelector('#home #greeting h1')

    if (homeGreetingEl)
      homeGreetingEl.innerText = getGreeting()
  }

  const getGreeting = () => {
    let greeting

    if (getOddNumberAtRandom()) {
      greeting = timeGreeting()
    } else {
      greeting = dayGreeting()
    }

    return `${greeting}.`
  }

  const timeGreeting = () => {
    const hour = new Date().getHours()

    if (hour > 4 && hour < 12) {
      return "Good morning"
    } else if (hour >= 12 && hour <= 17) {
      return "Good afternoon"
    } else if (hour > 17 && hour < 22) {
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

    const greeting = weekday === MONDAY ? 'Welcome back to' : 'Happy'

    return `${greeting} ${weekday}`
  }

  const getOddNumberAtRandom = () => Math.floor(Math.random() * 100) % 2
})()
