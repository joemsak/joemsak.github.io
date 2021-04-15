import NavLink from './NavLink'

export default function Nav() {
  return (
    <nav className="flex">
      <div className="flex">
        <NavLink href="/joseph-sak.pdf" target="_blank">Resume</NavLink>
        <NavLink href="//github.com/joemsak">Github</NavLink>
        <NavLink mailTo="joe.sak@hey.com">Email</NavLink>
      </div>
    </nav>
  )
}
