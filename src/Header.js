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
        <span className="hidden md:inline">&nbsp;&bull;&nbsp;</span>
        <br className="block md:hidden" />
        Certified Relationship Coach
      </h1>

      <Nav />
    </header>
  )
}
