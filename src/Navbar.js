const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Yoga Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a
                    href="/create"
                    style={{ backgroundColor: "#f1356d", padding: 10, borderRadius: 1 }}
                >
                    {" "}
                    Blog details
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
