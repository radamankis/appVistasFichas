import React,{Component} from 'react';
import axios from 'axios';

export default class Perfil extends Component   {
    
    state={ 
            username: this.props.username,
            buscar:'',
            Nombre:'',
            Apellido:'',
            Cedula:'',
            Sexo:'',
            EstadoCivil:'',
            Nacionalidad:'',
            NHijos:'',
            FechaNacimiento:''
        };

        valueToState = ({ name, value, checked, type }) => {
            this.setState(() => {
              return { [name]: type === "checkbox" ? checked : value };
            });
          };


            
          async    componentWillMount  ( nextProps, nextState){
               
                
                const res= await axios.get (`/datospersonal/buscar/${this.state.username}`)
                
                    console.log(res.data.data[0])
                   const date= await new Date( res.data.data[0].FechaNacimiento);
                    const fecha= date.getDate() +'/'+(date.getMonth())+'/'+(date.getFullYear());
                    
                    this.setState({ 
                        Nombre: res.data.data[0].Nombre,
                        Apellido: res.data.data[0].Apellido,
                        Cedula: res.data.data[0].Cedula,
                        Sexo: res.data.data[0].Sexo,
                        FechaNacimiento: fecha ,
                        EstadoCivil: res.data.data[0].EstadoCivil,
                        Nacionalidad: res.data.data[0].Nacionalidad,
                        NHijos: res.data.data[0].NHijos
                    })
                
                  
               
              }  ;

              

            
        
              // console.log(this.metodo(datos)) ;

               
               
        

        // async metodo(datos){
        //    const respuesta = await axios({
        //        method: 'POST',
        //        url: '/datospersonal',
        //        data: datos
        //    }) 
        //     .then(res =>{
        //         console.log(res);
        //         console.log(res.data);
        //     })

        //     return respuesta;
        // }

    render() {
        return (
            <div><h2 className="card-title text-center mb-5">Sistema de Administracion de Personal
           </h2>
         <div className="form-group card border-dark  ">
   
            <div className="card mt-3  ">
            <div className="card-body ">
                <h2 className="card-title text-center mb-5">Datos del  Empleado
                </h2>
                {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
                <form >
                
            <fieldset>
            <legend 
            className="text-center">Datos Personales del Empleado
            </legend>
            <div className="card mt-3 py-2 card border-dark mb-3">
            <div className="card-body">
                <div className="form-group row">

                <div className="form-group col-4">
                <label className="Nombre">Nombre
                </label>
                <input type="text"
                className="form-control "
                    name="Nombre"
                    id="Nombre" 
                    aria-describedby="nombreHelp" 
                    placeholder="Ingrese Nombre "
                    value={this.state.Nombre}
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>

                <div className="form-group col-4 ">
                <label className="Apellido">Apellido
                </label>
                
                <input type="text"
                className="form-control"
                    id="Apellido"
                    name="Apellido" 
                    aria-describedby="apellidoHelp" 
                    placeholder="Ingrese Apellido "
                    value={this.state.Apellido}
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>
                
                
                
                </div>
                <div className="form-group row ">
                <div className="form-group col-3 mr-5 ">
                <label className="Cedula">Cedula
                </label>
                <input type="text"
                className="form-control "
                    id="Cedula"
                    name="Cedula" 
                    aria-describedby="cedulaHelp" 
                    placeholder="Ingrese Cedula "
                    value={this.state.Cedula}
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>

                
                </div>

                
                
                
                
                <div className="form-group row ">
                
                

                <div className="form-group col-3">
                <label className="fechaDeNacimiento">Fecha De Nacimiento</label>
                <input type="text" 
                className="form-control " 
                name="FechaNacimiento" 
                value={ this.state.FechaNacimiento}
                onChange={event => this.valueToState(event.target)}/>
                </div>

                
                </div>
                </div>
                </div>
                
                
                <div className="card mt-3 py-2 card border-dark mb-3">
                <div className="card-body">
                <div className="form-group row ">
                

                <div className="form-group col-4">
                <div className="form-group ">
                <label htmlFor="Sexo">Sexo</label>
                <div className="form-group ">
                <input type='radio' name="Sexo" value='masculino'
                                
                checked={this.state.Sexo === 'masculino'}
                onChange={event => this.valueToState(event.target)}/> Masculino
                
                <input type='radio' name="Sexo" value='femenino'
                checked={this.state.Sexo === 'femenino' }
                onChange={event => this.valueToState(event.target)}/> Femenino


                </div>
                </div>  
                    
                    
                
                </div>

                <div className="form-group col-3">
                <label className="Nacionalidad">Nacionalidad
                </label>
                <input type="text"
                className="form-control "
                    id="Nacionalidad"
                    name="Nacionalidad" 
                    aria-describedby="nacionalidadHelp" 
                    placeholder="Ingrese Nacionalidad "
                    value={this.state.Nacionalidad}
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>

                <div className="form-group col-3">
                <label className="EstadoCivil">Estado Civil</label>
                <select className="form-control  "
                id="EstadoCivil"
                name="EstadoCivil"
                value={this.state.EstadoCivil}
                onChange={event => this.valueToState(event.target)}>
                    <option>Soltero</option>
                    <option>Casado</option>
                    <option>Viudo</option>
                    <option>Divorciado</option>
                    
                </select>
                </div>

                <div className="form-group col-3">
                <label className="nHijos">Numero de Hijos
                </label>
                <input type="int"
                className="form-control "
                id="NHijos"
                name="NHijos" 
                aria-describedby="nacionalidadHelp" 
                placeholder="ingreso un numero ejem: 3 "
                value={this.state.NHijos}
                onChange={event => this.valueToState(event.target)}/>
                </div>
                </div>
                </div>
                </div>
                
                
                </fieldset>

                
       
        
      
                </form>
                </div>
                </div>
                </div>
            </div>
        )
    }
}
