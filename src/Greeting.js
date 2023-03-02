import { weekDayName } from "./utils";

export default function Greeting() {
  return (
    <header>
      <h1 className="text-center font-bold">
        <span className="text-5xl md:text-6xl">Joe Sak</span>
      </h1>

      <div className="mt-4 lg:mt-16 px-4">
        <figure>
          <img
            className="w-2/5 md:w-4/5 rounded-full mx-auto"
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

        <div className="text-center md:w-2/5 lg:w-1/5">
          <p className="mt-2 font-normal">Hi there! Happy {weekDayName()}.</p>
        </div>
      </div>
    </header>
  );
}
