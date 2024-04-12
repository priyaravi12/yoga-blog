import { Link } from "react-router-dom/cjs/react-router-dom";

const NotFound = () => {
    return (
        <div className="notfound">
            <p>page not found</p>
            <Link to={"/"}>back to homepage</Link>
        </div>
    );
};

export default NotFound;
