import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Header() {
    return (
        <header>
            <img src={logo} className="logo"/>
            <h1>🏆 Rugby Six Nations Event Calendar 🏆</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/create">Create New</Link>
                <Link to="/update">Update</Link>
            </nav>
        </header>
    )
}