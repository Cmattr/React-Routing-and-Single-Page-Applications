import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div>
            <h2>404 Not Found</h2>
            <p>This is not the page you're looking for.</p>
            <p>go home <Link to="/">Homepage</Link></p>
        </div>
    )
}
export default NotFound