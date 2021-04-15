import NavLink from './NavLink'

function Nav() {
  return (
    <nav className="flex">
      <div className="flex">
        <NavLink>Home</NavLink>
        <NavLink>Technical Skills</NavLink>
        <NavLink href="/joseph-sak.pdf" target="_blank">Resume</NavLink>
        <NavLink href="//github.com/joemsak">Github</NavLink>
        <NavLink mailTo="joe.sak@hey.com">Email me</NavLink>
      </div>
    </nav>
  )
}

export default Nav
