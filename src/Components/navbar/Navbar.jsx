import "./navbar.css"

export default function Navbar({ menuOpen, setMenuOpen }) {
    return (
        <div className="navbar">
            <div className="navbar-wrapper">
                <div className="nav-info">
                    <h1>Genius.</h1>
                    <div className="itemContainer">
                        <i class="icon fa-solid fa-user"></i>
                        <span>+01552600743</span>
                        <div className="itemContainer">
                            <i class="icon fa-solid fa-envelope"></i>
                            <span>khaledelgamely@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div className={"toggle " + (menuOpen && "active")} onClick={() => setMenuOpen(!menuOpen)}>
                    <div className="btn">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
