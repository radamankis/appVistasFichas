import React,{Component} from 'react';
import axios from 'axios';

export default class NuevoUsuario extends Component {


  state = {

    username:'',
    
    password:'',
    
    token:''
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

 async handleSingIn(){
    try{

      await axios({
        method: 'POST',
        url: '/login',
        data: {
          username: this.state.username,
          password: this.state.password
        }
      }).then( res =>{
        console.log(res.data);
      })
      
      // localStorage.setItem('isAuthenticated', true);
      // localStorage.setItem('token', response);
      // localStorage.setItem('idUsuario', response.data[0].idUsuario)
    }
    catch(err){
      this.setState({
        servicio: err
      })
    }
  }

  validacion(){
    if(this.state.username ==='' || this.state.password==='' ){
      this.setState({
        message: 'Todo los campos son necesarios'
      })
      return false;
    }
    return true;
  }

    render() {
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
    onChange={this.onChange.bind(this)}/>
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
  onChange={this.onChange.bind(this)}/>
</div>
</div>





        <button  type="submit" className="btn btn-success btn-lg btn-block">Ingresar</button>
        
      


</fieldset>
</form>
</div>
</div>





            </div>                
        </div>
        );
    }
}