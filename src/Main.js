import Greeting from './Greeting'
import Pitch from './Pitch'
import Booking from './Booking'

export default function Main() {
  return (
    <main className="pt-16 text-gray-700">
      <Greeting />
      <Pitch />
      <Booking />
    </main>
  )
}
