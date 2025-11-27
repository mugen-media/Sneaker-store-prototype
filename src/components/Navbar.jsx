
import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <nav>
            <div>
                <img src="" alt="" />
            </div>
            <ul className="bg-white-800 text-black p-4 flex space-x-4 align-center justify-center">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/men">Men</Link></li>
                <li><Link to="/women">Women</Link></li>
                <li><Link to="/brands">Brands</Link></li>
            </ul>
        </nav>
    );
}
