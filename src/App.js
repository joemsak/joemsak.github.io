import Header from './Header'

import { weekDayName } from './utils'

function App() {
  return (
    <>
      <Header />

      <main className="pt-16 text-gray-700">
        <h1 className="mt-4 m-auto w-auto text-6xl font-bold">
          Happy {weekDayName()}.
        </h1>
      </main>
    </>
  );
}

export default App;
