import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav style={{ backgroundColor: '#282c34', display: 'flex', justifyContent: 'space-around', padding: '10px' }}>
            <Link to="/" style={{ marginRight:'1rem' }}>Home</Link>
            <Link to="/about" style={{ marginRight:'1rem' }}>About</Link>
            <Link to="services" style={{ marginRight:'1rem' }}>Services</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
}

