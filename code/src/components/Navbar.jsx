import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav style={{display : "flex",
            gap:"20px",padding:"10px",
            background:"#eee"
        }}>
            <Link to="/" >Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/dashboard">Dashboard</Link>
        </nav>



    );
}
export default Navbar;