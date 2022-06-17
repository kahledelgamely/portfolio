import "./sidebar.css"

export default function Sidebar({ menuOpen, setMenuOpen }) {
    return (
        <div className={'sidebar ' + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#intro">Intro</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#slider">Slider</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#testimonial">Testimonial</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}
