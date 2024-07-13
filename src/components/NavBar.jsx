import { Link, NavLink } from "react-router-dom";


function NavBar() {
    return (
    <nav>
        {/* <Link to="/add-customers">Add Customers</Link>
        <Link to="customers">Customers</Link> */}
        <NavLink to="/" activeClassName="active">Home</NavLink>
        <NavLink to="/Browse-Characters" activeClassName="active">Browse-Characters</NavLink>
        <NavLink to="/Character-Details" activeClassName="active">Character-Details</NavLink>
        <NavLink to="/Comics" activeClassName="active">Comics</NavLink>
    </nav>
    )
}

export default NavBar;