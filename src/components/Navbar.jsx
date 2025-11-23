import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logoImg from '../assets/myimage.png';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleScrollTo = (e, id) => {
        e.preventDefault();
        if (location.pathname !== '/') {
            navigate('/');
            // wait for Home to mount
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 80);
        } else {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // Collapse navbar if open (Bootstrap)
        const bsCollapse = document.querySelector('.navbar-collapse.show');
        if (bsCollapse) {
            const btn = document.querySelector('.navbar-toggler');
            if (btn) btn.click();
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand d-flex align-items-center" href="/" onClick={(e) => handleScrollTo(e, 'home')}>
                    <img src={logoImg} alt="Abdu" style={{ height: 36, width: 36, objectFit: 'cover', borderRadius: 6, marginRight: 8 }} />
                    <span className="brand-gradient">Abdu's portifolio</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/#home" onClick={(e) => handleScrollTo(e, 'home')}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#portfolio" onClick={(e) => handleScrollTo(e, 'portfolio')}>Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#about" onClick={(e) => handleScrollTo(e, 'about')}>About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#services" onClick={(e) => handleScrollTo(e, 'services')}>Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#skills" onClick={(e) => handleScrollTo(e, 'skills')}>Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#contact" onClick={(e) => handleScrollTo(e, 'contact')}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
