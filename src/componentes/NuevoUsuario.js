import React,{Component} from 'react';
import axios from 'axios';
import Msj from './Msj'

export default class NuevoUsuario extends Component {


  state = {

    username:'',
    password:'',
    role:'',
    message:'',
    
  }

  onChange(e){
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  
  save(e){
    if (!this.validacion()){
      return;
    }

    this.setState({
      message: 'Usuario Creado'
    })

  }

  validacion(){
    if(this.state.nombre ==='' ||  this.state.password==='' || this.state.role==='' ){
      this.setState({
        message: 'Todo los campos son necesarios'
      })
      return false;
    }
    return true;
  }
  

  handleSubmit (e){
    e.preventDefault();
    const datos = { 
        username: this.state.username,
        password:this.state.password,
        role: this.state.role
        
    }

    
   console.log(this.metodo(datos)) ;
   this.setState({username:'',
   password:'',
   role:''

   })
  }

  async metodo(datos){
    const respuesta = await axios({
        method: 'POST',
        url: '/users',
        data: datos
    }) 
     .then(res =>{
         console.log(res);
         console.log(res.data);
     })

     return respuesta;
 }

 

 
    render() {
        return (
          <div><h2 className="card-title text-center mb-5">Sistema de Administracion de Personal
           </h2>
            <div className="card border-dark mb-3 py-2 modal-content">
            <div className="card-body "  >
                <h2 className="card-title text-center mb-5">Ingrese los datos del nuevo usuario
                </h2>
                <form onSubmit={this.handleSubmit.bind(this)} className="card border-dark mb-3 p-3 modal-content form">
<fieldset>
<legend 
 className="text-center">Datos de Usuario
</legend>
<div className="form-group">
  <label htmlFor="nombre">Nombre
  </label>
  <input type="text"
   className="form-control col-sm-6 "
    name="username"
    id="username" 
    aria-describedby="nombreHelp" 
    placeholder="Ingrese Nombre de Usuario"
    value={this.state.username}
    onChange={this.onChange.bind(this)}/>
  <small id="nombrelHelp" 
  className="form-text text-muted m-auto">Nombre de usuario.
  </small>
</div>

<div className="form-group">
  <label className="Password">Password</label>
  <input type="password" 
  className="form-control col-sm-4" 
  name="password"
  id="password" 
  placeholder="Password"
  value={this.state.password}
  onChange={this.onChange.bind(this)}/>
</div>
<div className="form-group">
  <label htmlFor="Select">Tipo de Usuario</label>
  <select className="form-control col-sm-5 "
  name="role"
   id="role"
   value={this.state.role}
   onChange={this.onChange.bind(this)}>
     <option value="">Seleccione un tipo de usuario</option>
    <option value="ADMIN">ADMIN</option>
    <option value="USER">USER</option>
    <option value="Empleado">Empleado</option>
    
  </select>
</div>



<div className="modal-footer">
        <button onClick={this.save.bind(this)}  type="submit" className="btn btn-primary btn-block">Crear</button>
        
      </div>


</fieldset>
</form>

{/* <p>{JSON.stringify(this.state)}</p> */}
<Msj  mensaje={this.state.message}/>

            </div>                
        </div>

        </div>
        );
    }
}