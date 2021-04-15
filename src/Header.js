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
      <h1 className="p-4 pr-0">
        Joe Sak
        <span className="hidden sm:inline">&nbsp;&bull;&nbsp;</span>
        <br className="block sm:hidden" />
        Technology Generalist
      </h1>

      <Nav />
    </header>
  )
}
