import React from 'react'
import { Link } from 'react-router-dom';


function Header() {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/login">Login</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/register">Register</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" href="/features">Features</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" href="/features/addFeatures">AddFeatures</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/features/updateFeatures/:id"  >UpdateFeatures</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    )
}

export default Header