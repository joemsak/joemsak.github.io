import { weekDayName } from './utils'

export default function Greeting() {
  return (
    <header className="mt-4 text-center">
      <h1 className="text-6xl font-bold">
        Happy {weekDayName()}.
      </h1>

      <h2 className="mt-4 text-2xl font-bold">
        I'm Joe Sak, Web Development Generalist
      </h2>

      <figure className="mt-4">
        <img
          className="rounded-full m-auto"
          src="/image.jpg"
          alt="
            My wife and me reaching across two balconies in an extremely
            narrow, colorful alleyway, shot from below
          "
          width="200"
          height="200"
        />

        <figcaption className="text-xs text-gray-500 mt-4">
          With my wife Cristina at El Callejon del Beso
          <br />
          Guanajuato, Mexico
        </figcaption>
      </figure>
    </header>
  )
}
