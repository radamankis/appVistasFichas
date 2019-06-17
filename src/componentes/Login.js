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
            <div >
            <div  >
                <h2 className="card-title text-center mb-5">Bienvenido
                </h2>
                
                <div className='row-3'>
                <div className="form-group col-lg-8"></div>
                    <div className="form-group col-6  mb-3 py-2 m-auto  ">
                <form className="card border-dark mb-3 p-3 modal-content form">
<fieldset>
<legend 
 className="text-center">Login
</legend>
<div className=" ">
<div className="form-group">
  <label htmlFor="nombre ">Usuario
  </label>
  <input type="nombre"
   className="form-control   "
    id="nombre" 
    aria-describedby="nombreHelp" 
    placeholder="Ingrese Usuario"
    value={this.state.nombre}
    onChange={this.onChange.bind(this)}/>
  <small id="nombrelHelp" 
  className="form-text text-muted m-auto">Nombre de usuario.
  </small>
</div>

<div className="form-group">
  <label className="Password">Password</label>
  <input type="password" 
  className="form-control " 
  id="Password" 
  placeholder="Password"
  value={this.state.Password}
  onChange={this.onChange.bind(this)}/>
</div>
</div>





        <button onClick={this.save.bind(this)} type="button" class="btn btn-success btn-lg btn-block">Ingresar</button>
        
      


</fieldset>
</form>
</div>
</div>





            </div>                
        </div>
        );
    }
}