export function Header() {
    return (
        <header className="home-header flex space-between align-center">
            <div className="left flex align-center">
                <h1 className="logo">myteam</h1>
                <nav>
                    <a>home</a>
                    <a>about</a>
                </nav>
            </div>
            <button className="contact-btn">contact us</button>
        </header>
    )
}