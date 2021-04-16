import { enter, leave } from 'el-transition'

export default function ReadingSelection() {
  const toggleReading = () =>{
    const container = document.getElementById('modal-container')
    const overlay = document.getElementById('modal-overlay')
    const modal = document.getElementById('modal')

    if (container.classList.contains('hidden')) {
      container.classList.remove('hidden')

      enter(overlay).then(() => enter(modal))
    } else {
      leave(modal).then(() => {
        leave(overlay).then(() => container.classList.add('hidden'))
      })
    }
  }

  return (
    <div className="text-center w-full md:w-3/5 m-auto px-4 pb-4">
      <p className="mt-4 italic text-sm">
        <button
          type="button"
          className="
            cursor-pointer
            bg-none
            border-none
            text-blue-400
            hover:text-blue-900
          "
          onClick={toggleReading}
        >
          Read a selection from the Tao te Ching
        </button>
      </p>


      <div
        id="modal-container"
        className="
          hidden
          fixed
          z-10
          inset-0
          overflow-y-auto
        "
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          className="
            flex
            items-end
            justify-center
            min-h-screen
            pt-4
            px-4
            pb-20
            text-center
            sm:block
            sm:p-0
          "
        >
          <div
            id="modal-overlay"
            className="
              fixed
              inset-0
              bg-gray-500
              bg-opacity-75
              transition-opacity
            "
            data-transtion-enter="ease-out duration-300"
            data-transition-enter-start="opacity-0"
            data-transition-enter-end="opacity-100"
            data-transition-leave="ease-in duration-200"
            data-transition-leave-start="opacity-100"
            data-transition-leave-end="opacity-0"
            aria-hidden="true"
            onClick={toggleReading}
          ></div>

          <span
            className="
              hidden
              sm:inline-block
              sm:align-middle
              sm:h-screen
            "
            aria-hidden="true"
          >&#8203;</span>

          <div
            id="modal"
            className="
              inline-block
              align-bottom
              bg-white
              rounded-lg
              px-4
              pt-5
              pb-4
              text-left
              overflow-hidden
              shadow-xl
              transform
              transition-all
              sm:my-8
              sm:align-middle
              sm:max-w-sm
              sm:w-full
              sm:p-6
            "
            data-transtion-enter="ease-out duration-300"
            data-transition-enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            data-transition-enter-end="opacity-100 translate-y-0 sm:scale-100"
            data-transition-leave="ease-in duration-200"
            data-transition-leave-start="opacity-100 translate-y-0 sm:scale-100"
            data-transition-leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
              <button
                type="button"
                className="
                  bg-white
                  rounded-md
                  text-gray-400
                  hover:text-gray-500
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-indigo-500
                "
                onClick={toggleReading}
              >
                <span className="sr-only">Close</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-3 sm:mt-5">
              <h1
                id="modal-title"
                className="font-bold text-2xl"
              >
                Soul Food
              </h1>

              <h2 className="font-bold text-base">by Lao Tzu</h2>

              <h3 className="italic text-xs">translation by Ursula Le Guin</h3>

              <article className="mt-2">
                <p>
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
          </div>
        </div>
      </div>
    </div>
  )
}
