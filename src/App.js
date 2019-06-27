import React, { Component } from 'react'
import { BrowserRouter as Router , Route , Switch, Redirect} from 'react-router-dom'
import axios from 'axios'

 import Header from './componentes/Header';
 import NuevoUsuario from './componentes/NuevoUsuario';
//  import Empleado from './componentes/Empleado';
 import Login from './componentes/Login';
 import DatosPersonal from './componentes/DatosPersonal';
 import Formacion from './componentes/Formacion';
 import Postgrado from './componentes/Postgado';
 import Remuneraciones from './componentes/Remuneraciones';
 import Cargo from './componentes/Cargo';
import TipoCargo from './componentes/TipoCargo';
import ListarUsuarios from './componentes/ListarUsuarios';

 import ListarEmpleados from './componentes/ListarEmpleados';
import Perfil from './componentes/Perfil';
import Perfil2 from './componentes/Perfil2';
import Principal from './componentes/Principal';
import NuevoUsuario2 from './componentes/NuevoUsuario2';

//import FormularioUsuario from './FormularioUsuario';

const isAuthenticated =()=> true;

const MyRoute = ( props)=>(
  isAuthenticated()
  ? <Route {...props}/> : <Redirect to ="/login"/>
)

const Logout = ()=>{
  localStorage.clear();
  window.location.href= 'http://localhost:3000/login'
  
}


 class App extends Component {
 
  state= {
     Cedula:[],
     estado: localStorage.getItem('role')
    }

    componentDidMount(){ 
      axios.get(`/users`)
         .then( res=>{
           this.setState({
             Cedula:res
           })

         })
        }

  render() {
    return (
      <Router>
        <Header estado={this.state.estado}/>
        <main className="container mt-5">
       <Switch>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/logout" component={Logout}/>
      
       <Route exact path="/" component={Principal}/>
          <Route exact path="/nuevo-usuario" component={NuevoUsuario}/>
          <Route exact path="/nuevo-usuario2" component={NuevoUsuario2}/>
          <Route exact path="/datospersonal" component={DatosPersonal}/>
          <Route exact path="/formacion" component={Formacion}/>
          <Route exact path="/postgrado" component={Postgrado}/>
          <Route exact path="/remuneracion" component={Remuneraciones}/>
          <Route exact path="/cargo" component={Cargo}/>
          <Route exact path="/tipocargo" component={TipoCargo}/>
          <Route exact path="/users" component={ListarUsuarios }/>
          <Route exact path="/perfil2" component={Perfil2 }/>
          <Route exact path="/listarempleados" render={()=>
            <ListarEmpleados Cedula={this.state.Cedula} />
          }/>
          
          <MyRoute exact path="/perfil" component={Perfil}/>
          
       </Switch> 
       </main>     
      </Router>
    )
  }
}


export default App;
