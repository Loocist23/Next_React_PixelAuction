import React, { useState } from 'react';
import '../styles/NavBar.css';

const NavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li><a href="/" className="navbar-link">Accueil</a></li>
                <li><a href="/produits" className="navbar-link">Produits</a></li>
                <li><a href="/panier" className="navbar-link">Panier</a></li>
            </ul>
            <div className="user-info">
                <span>Nom de la personne connectée</span>
                <button onClick={handleDropdownToggle}>Options</button>
                {isDropdownOpen && (
                    <ul className="dropdown-menu">
                        <li><a href="/profil">Profil</a></li>
                        <li><a href="/parametres">Paramètres</a></li>
                        <li><a href="/deconnexion">Déconnexion</a></li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default NavBar;