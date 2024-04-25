const Header = () => {
    return(
     <header className="topNav">
        <nav className="navbar navbar-expand-md navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="a">
                    <img className="nav_logo"></img>
                </a>

            <div className="navbar">
                <form className="d-flex" role="search">
                    <select>
                        <option>English</option>
                        <option>Albanian</option>
                    </select>
                    <button className="btn btn-danger">Signin</button>
                </form>
            </div>
            </div>
        </nav>
     </header>
    )
}

export default Header;