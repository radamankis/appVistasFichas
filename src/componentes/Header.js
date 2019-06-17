import React from 'react'
import {Link} from 'react-router-dom'

const Header = ()=>  (  
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to="/login" className="navbar-brand">
                    Sistema de Administracion de Personal
                </Link>

                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to='/empleado'
                        className="nav-link">
                            Agregar Empleados
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to='/nuevo-usuario'
                        className="nav-link">
                            Agregar Usuario
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to='/listar-empleados'
                        className="nav-link">
                            Listar Empleados
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to='/listar-usuarios'
                        className="nav-link">
                            Listar Usuarios
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to='/perfil'
                        className="nav-link">
                            Perfil
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );



export default Header;