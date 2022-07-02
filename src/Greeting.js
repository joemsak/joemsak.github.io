import { weekDayName } from './utils'

export default function Greeting() {
  return (
    <header className="w-1/2 mx-auto flex gap-8">
      <figure>
        <img
          className="rounded-full m-auto"
          src="/image.jpg"
          alt="
            My wife and me reaching across two balconies in an extremely
            narrow, colorful alleyway, shot from below
          "
          width="400"
          height="400"
        />

        <figcaption className="text-xs text-gray-500 mt-4 text-center">
          With my wife Cristina at El Callejon del Beso
          <br />
          Guanajuato, Mexico
        </figcaption>
      </figure>

      <div>
        <h1 className="text-base md:text-3xl lg:text-6xl font-bold">
          Joe Sak, Certified Relationship Coach
        </h1>

        <h2 className="mt-2 text-lg md:text-xl font-bold">
          I help people transform their relationships with others and themselves.&nbsp;
          <span className="font-normal">Hi there! Happy {weekDayName()}.</span>
        </h2>
      </div>

    </header>
  )
}
