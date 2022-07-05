import About from './About'
import Greeting from './Greeting'
import Pitch from './Pitch'
import Booking from './Booking'

export default function App() {
  return (
    <main className="text-gray-700">
      <div className="mt-8">
        <Greeting />
      </div>

      <Pitch />

      <div className="mt-4">
        <About />
      </div>

      <Booking />
    </main>
  )
}
