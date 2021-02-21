(() => {
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#greeting h1').innerText = `${getGreeting()}.`
  })

  const getGreeting = () => {
    if (getOddNumberAtRandom()) {
      return timeGreeting()
    } else {
      return dayGreeting()
    }
  }

  const timeGreeting = () => {
    const hour = new Date().getHours()

    if (hour > 4 && hour < 12) {
      return "Good morning"
    } else if (hour > 12 && hour < 17) {
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
