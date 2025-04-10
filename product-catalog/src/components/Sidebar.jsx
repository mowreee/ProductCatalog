import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <h2>Menu</h2>
            <ul className="sidebar-list">
                <li>
                    <Link to="/home" className="sidebar-link" style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "0.8rem" }}>
                        <HomeIcon style={{ fontSize: "1.5rem" }} />
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/products" className="sidebar-link" style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "0.8rem" }}>
                        <ListIcon style={{ fontSize: "1.5rem" }} />
                        <span>Product List</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
