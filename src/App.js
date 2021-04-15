import Header from './Header'
import Greeting from './Greeting'

export default function App() {
  return (
    <>
      <Header />

      <main className="pt-16 text-gray-700">
        <Greeting />
      </main>
    </>
  );
}
