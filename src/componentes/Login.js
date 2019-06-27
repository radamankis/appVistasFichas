import React,{Component} from 'react';

import axios from 'axios';
import {Redirect} from 'react-router-dom' ;
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



export default class Login extends Component {

  constructor(props) {
    super(props);
  this.state = {

    username:'',
    
    password:'',
    
    token: '',
    mensaje:'',
    Empleado:false,
    ADMIN: false,
    USER: false
  }
  this.toggle = this.toggle.bind(this);
  }
  toggle() {
    const agre= this.validacion();
    if(agre){
      this.setState({
         mensaje:''
          
      })
  }
      this.setState(prevState => ({
        modal: !prevState.modal
       
      }));
    }

    valueToState = ({ name, value, checked, type }) => {
      this.setState(() => {
        return { [name]: type === "checkbox" ? checked : value };
      });
    };
  
  

    

 async handleSingIn(e){
  e.preventDefault();
    
        const datos =  {username: this.state.username,
                        password: this.state.password
                      };

                      if(this.state.mensaje === 'Todos los campos son Necesarios'){
                        return
                    }
                    else{
                        this.metodo(datos) ;
                    }
       
     
      
    
      }
      async metodo(datos){
        const res =  await axios({
          method: 'POST',
          url: '/login',
          data: datos
          
        })
        console.log(res.data.data)
         const {ok , token,data, err}=res.data;
        
        if(!ok){
          this.setState({
            logueado: false,
            mensaje: err.mensage
          })
        } else{
          this.setState({
            logueado: true,
            mensaje: "Logueado Correctamente"
          })
          localStorage.setItem('token', token);
          localStorage.setItem('idUsuario', res.data.data.idUsuario);
           localStorage.setItem('username', res.data.data.username);
           localStorage.setItem('role', res.data.data.role);
          
           if(res.data.data.role === 'Empleado' ){
              this.setState({
                Empleado: true
              })
           }
           if(res.data.data.role === 'USER' ){
            this.setState({
              USER: true
            })
         }
         if(res.data.data.role === 'ADMIN' ){
          this.setState({
            ADMIN: true
          })
       }
        }
      }
    
  
  validacion(){
    if(this.state.username ==='' || this.state.password==='' ){
      this.setState({
        mensaje: 'Todo los campos son necesarios'
      })
      return false;
    }
    return true;
  }

    render() {
      const vista= this.state.Empleado;
      const vista2= this.state.USER;
      const vista3= this.state.ADMIN;
        return (
            <div >
            <div  >
                <h2 className="card-title text-center mb-5">Bienvenido
                </h2>
                
                <div className='row-3'>
                <div className="form-group col-lg-8"></div>
                    <div className="form-group col-6  mb-3 py-2 m-auto  ">
                <form className="card border-dark mb-3 p-3 modal-content form" onSubmit={this.handleSingIn.bind(this)}>
<fieldset>
<legend 
 className="text-center">Login
</legend>
<div className=" ">
<div className="form-group">
  <label htmlFor="nombre ">Usuario
  </label>
  <input type="text"
   className="form-control   "
   name="username"
    id="username" 
    aria-describedby="nombreHelp" 
    placeholder="Ingrese Usuario"
    value={this.state.username}
    onChange={event => this.valueToState(event.target)}/>
  <small id="nombrelHelp" 
  className="form-text text-muted m-auto">Nombre de usuario.
  </small>
</div>

<div className="form-group">
  <label className="Password">Password</label>
  <input type="password" 
  className="form-control " 
  id="password" 
  name="password"
  placeholder="Password"
  value={this.state.password}
  onChange={event => this.valueToState(event.target)}/>
</div>
</div>





        <button onClick={this.toggle} type="submit" className="btn btn-success btn-lg btn-block">Ingresar</button>
        
      


</fieldset>
</form>
</div>
</div>
<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
              {this.state.mensaje}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>OK</Button>
            
          </ModalFooter>
        </Modal>

         { vista ? window.location.href= 'http://localhost:3000/perfil2':'' }  
         { vista2 ? window.location.href= 'http://localhost:3000/datospersonal':'' } 
         { vista3 ? window.location.href= 'http://localhost:3000/datospersonal':'' } 


            </div>                
        </div>
        );
    }
}