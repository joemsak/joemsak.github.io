import Header from './Header'
import Greeting from './Greeting'

export default function App() {
  return (
    <>
      <Header />

      <main className="py-16 text-gray-700">
        <Greeting />

        <div className="w-1/2 m-auto mt-4">
          <p className="italic text-sm">
            I'm still rebuilding my new site in React &amp; Tailwind.<br />
            In the meantime, please enjoy a selection from the Tao te Ching.
          </p>

          <article className="mt-4">
            <h1 className="font-bold text-2xl">Soul Food</h1>
            <h2 className="font-bold text-base">by Lao Tzu</h2>
            <h3 className="italic text-xs">translation by Ursula Le Guin</h3>

            <p className="mt-4">
              Everybody on earth knowing<br />
              that beauty is beautiful<br />
              makes ugliness.
            </p>

            <p className="mt-4">
              Everybody knowing<br />
              that goodness is good<br />
              makes wickedness.
            </p>

            <p className="mt-4">
              For being and nonbeing<br />
              arise together;<br />
              hard and easy<br />
              complete each other;<br />
              long and shortshape each other;<br />
              high and low<br />
              depend on each other;<br />
              note and voice<br />
              make the music together;<br />
              before and after<br />
              follow each other.
            </p>

            <p className="mt-4">
              That’s why the wise soul<br />
              does without doing,<br />
              teaches without talking.
            </p>

            <p className="mt-4">
              The things of this world<br />
              exist, they are;<br />
              you can’t refuse them.
            </p>

            <p className="mt-4">
              To bear and not to own;<br />
              to act and not lay claim;<br />
              to do the work and let it go:<br />
              for just letting it go<br />
              is what makes it stay.
            </p>
          </article>
        </div>

        <p class="mt-16 text-xs italic text-center">
          Open the&nbsp;
          <a
            className="text-blue-400 hover:text-blue-900"
            href="https://github.com/joemsak/joemsak.github.io"
          >
            source
          </a>
          &nbsp;of this website.
        </p>
      </main>
    </>
  );
}
