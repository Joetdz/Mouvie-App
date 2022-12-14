import React from 'react';
import { NavLink } from 'react-router-dom';

const Hearder = () => {
    return (
        <div className="header">
            <h1>React Mouvies</h1>
            <nav>

                <ul>
                    <NavLink to="/" className={(nav) => nav.isActive ? "nav-active" : ""} >
                        <li>Acueil</li>
                    </NavLink>

                    <NavLink to="/coup-de-coeur" className={(nav) => nav.isActive ? "nav-active" : ""}>
                        <li>Coup de coeurs</li>
                    </NavLink>
                </ul>

            </nav>

        </div>
    );
};

export default Hearder;