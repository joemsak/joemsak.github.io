import NavLink from './NavLink'

function Nav() {
  return (
    <nav className="flex">
      <NavLink>Home</NavLink>
      <NavLink>Technical Skills</NavLink>
      <NavLink>Resume</NavLink>
      <NavLink href="//github.com/joemsak">Github</NavLink>
      <NavLink mailTo="joe.sak@hey.com">Email me</NavLink>
    </nav>
  )
}

export default Nav
