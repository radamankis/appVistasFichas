import React from 'react'
import {Link} from 'react-router-dom'

const Header = ()=>  (  
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            {/* <div><Link to="/login" className="navbar-brand">
                    Login
                </Link>
                </div> */}
            <div className="container">
                

                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to='/datospersonal'
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
                        <Link to='/cargo'
                        className="nav-link">
                            Cargo
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to='/formacion'
                        className="nav-link">
                            Formacion Academica
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to='/postgrado'
                        className="nav-link">
                            Postgrado
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to='/remuneracion'
                        className="nav-link">
                            Remuneracion
                        </Link>
                    </li>
                    
                    <li className="navbar-item">
                        <Link to='/tipocargo'
                        className="nav-link">
                            Tipo Cargo
                        </Link>
                    </li>
                    
                    
                    <li className="navbar-item">
                        <Link to='/users'
                        className="nav-link">
                            Listar Usuarios
                        </Link>
                    </li>

                    <li className="navbar-item">
                        <Link to='/listarempleados'
                        className="nav-link">
                            Listar Empleados
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to='/perfil'
                        className="nav-link">
                            Perfil
                        </Link>
                    </li>
                    {/* <div><Link to="/logout" className="navbar-brand">
                    Salir
                </Link>
                </div> */}
                </ul>
            </div>
        </nav>
        
    );



export default Header;