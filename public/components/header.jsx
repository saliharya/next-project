export default function Header() {
    return (
        <header className="header-main">
        <div className="container">
            <div className="header-second">
                <div className="header-third">
                    <a href="#home" className="text-logo">ArGumilang</a>
                </div>
                <div className="nav-main">
                    <nav id="nav-menu"
                        className="nav-second">
                        <ul className="ul-nav">
                            <li className="group">
                                <a href="#home"
                                    className="group-in-nav">Home</a>
                            </li>
                            <li className="group">
                                <a href="#about"
                                    className="group-in-nav">About</a>
                            </li>
                            <li className="group">
                                <a href="#education"
                                    className="group-in-nav">Education</a>
                            </li>
                            <li className="group">
                                <a href="#certificates"
                                    className="group-in-nav">Certificate</a>
                            </li>
                            <li className="group">
                                <a href="#contact"
                                    className="group-in-nav">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
      </header>
    )
}