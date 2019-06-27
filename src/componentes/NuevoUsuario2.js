import React,{Component} from 'react';
import axios from 'axios';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export default class NuevoUsuario2 extends Component {
  constructor(props) {
    super(props);
this.state={

    username:'',
    password:'',
    role:'',
    message:'',
    
  };
  this.toggle = this.toggle.bind(this);
}

  onChange(e){
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  
 

  toggle() {
    const agre= this.validacion();
     if(agre){
         this.setState({
          message: 'Usuario Creado'
         })
     }
      this.setState(prevState => ({
        modal: !prevState.modal
       
      }));
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

    if(this.state.message=== 'Todo los campos son necesarios'){
      return
    }
   this.metodo(datos) ;
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
         this.setState({
           message: res.data.msg
         })
         console.log(res.data.msg);
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
    
    <option value="Empleado">Empleado</option>
    
  </select>
</div>



<div className="modal-footer">
        <button onClick={this.toggle}  type="submit" className="btn btn-primary btn-block">Crear</button>
        
      </div>


</fieldset>
</form>

{/* <p>{JSON.stringify(this.state)}</p> */}

<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
              {this.state.message}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>OK</Button>{' '}
            
          </ModalFooter>
        </Modal>
            </div>                
        </div>

        </div>
        );
    }
}