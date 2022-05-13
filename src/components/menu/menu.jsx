import './menu.scss'

export default function menu({menuOpen, setMenuOpen}) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
        <ul>
            <li>
                <a href="#intro" onClick={() => setMenuOpen(!menuOpen)}>Home</a>
            </li>
            <li>
                <a href="#portfolio" onClick={() => setMenuOpen(!menuOpen)}>Portfolio</a>
            </li>
            <li>
                <a href="#works" onClick={() => setMenuOpen(!menuOpen)}>Works</a>
            </li>
            <li>
                <a href="#languages" onClick={() => setMenuOpen(!menuOpen)}>Testimonial</a>
            </li>
            <li>
                <a href="#contact" onClick={() => setMenuOpen(!menuOpen)}>Contact</a>
            </li>
        </ul>
    </div>
  )
}
