export default {
  init() {
    const homeGreetingEl = document.querySelector('#surprise')

    if (homeGreetingEl)
      homeGreetingEl.innerText = this.getGreeting()
  },

  getGreeting() {
    const randomNum = Math.floor(Math.random() * 100) % 2

    return randomNum === 0 ?
      `${this.timeGreeting()}.` :
      `${this.dayGreeting()}.`
  },

  timeGreeting() {
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
  },

  dayGreeting() {
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
}
