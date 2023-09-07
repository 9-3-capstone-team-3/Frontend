import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav className="header">
            <Link className="signin-link" to="/signin">
                Sign In / Create An Account
            </Link>
        </nav>
    )
}