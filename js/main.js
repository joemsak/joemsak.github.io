(() => {
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('greeting').innerText = getGreeting()
  })

  const getGreeting = () => {
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ]

    const today = new Date()

    const day = today.getDay()

    const weekday = weekdays[day]

    const greeting = day === 1 ? 'Welcome back to' : 'Happy'

    return `${greeting} ${weekday} from me, Joe Sak,`
  }
})()
