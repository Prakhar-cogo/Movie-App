function Navbar() {    
    return (
        <>
            <nav className="navbar fixed-top bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">Movies Desk</a>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2"    type="text" id="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success">
                            Search
                        </button>
                    </form>
                </div>
            </nav>
        </>
    );
}
export default Navbar;