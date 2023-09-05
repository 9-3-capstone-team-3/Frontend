import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav className="header">
            <Link className="singin-link" to="/singin">
                Sign In / Create An Account
            </Link>
        </nav>
    )
}