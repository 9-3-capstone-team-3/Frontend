import "../Panels/PanelsStyling.css"


export default function LeftPanelPlaceholder() {
    return (
        <div className="left-panel-content">
            <h2>Quick Links</h2>
            <ul>
                <li><a href="#!">Dashboard</a></li>
                <li><a href="#!">Profile</a></li>
                <li><a href="#!">Settings</a></li>
                <li><a href="#!">Logout</a></li>
            </ul>
        </div>
    );
}