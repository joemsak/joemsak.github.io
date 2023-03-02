import { weekDayName } from "./utils";

export default function Greeting() {
  return (
    <header class="max-w-[450px] mx-auto">
      <h1 className="text-center font-bold">
        <span className="text-5xl md:text-6xl">Joe Sak</span>
      </h1>

      <div className="mt-4 max-w-[300px] mx-auto lg:mt-16 px-4">
        <figure>
          <img
            className="mx-auto rounded-full"
            src="/wife.jpg"
            alt="
              My wife and me reaching across two balconies in an extremely
              narrow, colorful alleyway, shot from below
            "
          />

          <figcaption className="text-xs text-gray-500 mt-4 text-center">
            With my wife Cristina
            <br className="hidden md:block lg:hidden" />
            &nbsp;at El Callejon del Beso
            <br />
            Guanajuato, Mexico
          </figcaption>
        </figure>
      </div>

      <h2 className="mt-2 text-4xl font-bold text-center">
        Hi there!
        <br />
        Happy {weekDayName()}.
      </h2>
    </header>
  );
}
