import Nav from './Nav'

export default function Header() {
  return (
    <header
      className="
        bg-white
        shadow-md
        fixed
        w-full
        flex
        justify-between
        text-xs
        md:text-base
      "
    >
      <h1 className="p-4">Joe Sak &bull; Web Applications Generalist</h1>

      <Nav />
    </header>
  )
}
