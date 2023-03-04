import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);
    const AbrirCerrarDropdown = () => {
        setDropdown(!dropdown);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Imebu outra</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/Caracteristicas-HV">
                                Caract. HV
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Dropdown isOpen={dropdown} toggle={AbrirCerrarDropdown}>
                                <DropdownToggle caret color="text-secondary" >
                                    Opciones
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>
                                        <Link
                                            className="dropdown-item"
                                            to="/">
                                            Cerrar ses.
                                        </Link>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

