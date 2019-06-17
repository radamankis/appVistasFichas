import React,{Component} from 'react';

export default class NuevoUsuario extends Component {


  state = {

    nombre:'',
    email: '',
    Password:'',
    Select:'',
    message:''
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
    if(this.state.nombre ==='' || this.state.email==='' || this.state.Password==='' || this.state.Select==='' ){
      this.setState({
        message: 'Todo los campos son necesarios'
      })
      return false;
    }
    return true;
  }

    render() {
        return (
            <div className="card border-dark mb-3 py-2 modal-content">
            <div className="card-body "  >
                <h2 className="card-title text-center mb-5">Ingrese los datos del nuevo usuario
                </h2>
                <form className="card border-dark mb-3 p-3 modal-content form">
<fieldset>
<legend 
 className="text-center">Datos de Usuario
</legend>
<div className="form-group">
  <label htmlFor="nombre">Nombre
  </label>
  <input type="nombre"
   className="form-control col-sm-6 "
    id="nombre" 
    aria-describedby="nombreHelp" 
    placeholder="Ingrese Nombre de Usuario"
    value={this.state.nombre}
    onChange={this.onChange.bind(this)}/>
  <small id="nombrelHelp" 
  className="form-text text-muted m-auto">Nombre de usuario.
  </small>
</div>
<div className="form-group">
  <label className="Email">Email</label>
  <input type="email" 
  className="form-control col-sm-6"
   id="email" 
   aria-describedby="emailHelp"
    placeholder="Ingrese email"
    value={this.state.email}
    onChange={this.onChange.bind(this)}/>
  <small id="emailHelp" 
  className="form-text text-muted">Debe ingresar un email valido.
  </small>
</div>
<div className="form-group">
  <label className="Password1">Password</label>
  <input type="password" 
  className="form-control col-sm-4" 
  id="Password" 
  placeholder="Password"
  value={this.state.Password}
  onChange={this.onChange.bind(this)}/>
</div>
<div className="form-group">
  <label htmlFor="Select">Tipo de Usuario</label>
  <select className="form-control col-sm-5 "
   id="Select"
   value={this.state.Select}
   onChange={this.onChange.bind(this)}>
     <option value="">Seleccione un tipo de usuario</option>
    <option value="ADMIN">ADMIN</option>
    <option value="USER">USER</option>
    
  </select>
</div>



<div class="modal-footer">
        <button onClick={this.save.bind(this)} type="button" class="btn btn-primary btn-block">Crear</button>
        
      </div>


</fieldset>
</form>

<p>{JSON.stringify(this.state)}</p>
            </div>                
        </div>
        );
    }
}