import React, { Component } from 'react'
import { BrowserRouter as Router , Route , Switch} from 'react-router-dom'


 import Header from './componentes/Header';
 import NuevoUsuario from './componentes/NuevoUsuario';
 import Empleado from './componentes/Empleado';
 import Login from './componentes/Login';
//import Usuario from './componentes/Usuario';
//import FormularioUsuario from './FormularioUsuario';

 class App extends Component {


  render() {
    return (
      <Router>
        <Header/>
        <main className="container mt-5">
       <Switch>
       <Route exact path="/login" component={Login}/>
          <Route exact path="/nuevo-usuario" component={NuevoUsuario}/>
          <Route exact path="/empleado" component={Empleado}/>
       </Switch> 
       </main>     
      </Router>
    )
  }
}


export default App;
