function NavLink(props) {
  const getHref = () => {
    if (props.mailTo)
      return `mailto:${props.mailTo}`

    return props.href || '#'
  }

  const getTarget = () => {
    return props.target || '_top'
  }

  return (
    <a
      href={getHref()}
      target={getTarget()}
      className="p-4 text-gray-500 hover:text-gray-900"
    >
      {props.children}
    </a>
  )
}

export default NavLink
