import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Yoga Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Blog details</Link>
            </div>
        </nav>
    );
};

export default Navbar;
