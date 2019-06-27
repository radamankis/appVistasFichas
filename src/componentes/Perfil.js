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
            FechaNacimiento:'',
            SueldoTabla:'',
            BonoJefatura:'',
            PrimaFamiliar:'',
            BonoLacteo:'',
            PrimaGradoAcademico:'',
            PrimaProfecionalizacion:'',
            PrimaHijoDiscapacidad:'',
            PrimaApoyo:'',
            PrimaChoferSupervisor:'',
            PasoAutomatico:'',
            AporteCajaAhorro:''
        };

        valueToState = ({ name, value, checked, type }) => {
            this.setState(() => {
              return { [name]: type === "checkbox" ? checked : value };
            });
          };


            
          async    componentWillMount  ( nextProps, nextState){
               
                
                const res= await axios.get (`/datospersonal/buscar/${this.state.username}`)
                const bremu=res.data.data[0].idDatoPersonal;
                const remuneracion= await axios.get(`/remuneracion/${bremu}`)

                    console.log(res.data.data[0])
                    console.log(remuneracion.data.data[0].SueldoTabla)
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
                        NHijos: res.data.data[0].NHijos,
                        SueldoTabla: remuneracion.data.data[0].SueldoTabla,
                        BonoJefatura:remuneracion.data.data[0].BonoJefatura,
                        PrimaFamiliar:remuneracion.data.data[0].PrimaFamiliar,
                        BonoLacteo:remuneracion.data.data[0].BonoLacteo,
                        PrimaGradoAcademico:remuneracion.data.data[0].PrimaGradoAcademico,
                        PrimaProfecionalizacion:remuneracion.data.data[0].PrimaProfecionalizacion,
                        PrimaHijoDiscapacidad:remuneracion.data.data[0].PrimaHijoDiscapacidad,
                        PrimaApoyo:remuneracion.data.data[0].PrimaApoyo,
                        PrimaChoferSupervisor:remuneracion.data.data[0].PrimaChoferSupervisor,
                        PasoAutomatico:remuneracion.data.data[0].PasoAutomatico,
                        AporteCajaAhorro:remuneracion.data.data[0].AporteCajaAhorro
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
                <div className="form-group card border-dark  ">
   
            <div className="card mt-3  ">
            <div className="card-body ">
                
                {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
                
                <form >
                <fieldset>
            <legend 
            className="text-center">Remuneraciones
            </legend>
            <div className="card mt-3 py-2 card border-dark ">
            <div className="card-body">
                <div className="form-group row">
                
            
    
            <div className="form-group col-3">
                <label className="SueldoTabla">SueldoTabla
                </label>
                <input type="double"
                className="form-control "
                name="SueldoTabla"
                id="sueldoTabla" 
                value={this.state.SueldoTabla}
                onChange={event => this.valueToState(event.target)}/>
                </div>

                <div className="form-group col-3">
                <label className="BonoJefatura ">Bono de Jefatura</label>
                <input type="double"
                className="form-control "
                name="BonoJefatura"
                    id="bonoJefatura"                     
                    value={this.state.BonoJefatura}
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>

                <div className="form-group col-3">
                <label className="PrimaFamiliar">Prima Familiar</label>
                <input type="double"
                className="form-control "
                name="PrimaFamiliar"
                    id="primaFamiliar"                     
                    value={this.state.PrimaFamiliar}
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>

                <div className="form-group col-3">
                <label className="BonoLacteo ">Bono Lácteo</label>
                <input type="double"
                className="form-control "
                name="BonoLacteo"
                    id="bonoLacteo"                     
                    value={this.state.BonoLacteo}
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>

                <div className="form-group col-4">
                <label className="PrimaGradoAcDocente ">Prima Grado Academico</label>
                <input type="double"
                className="form-control "
                name="PrimaGradoAcademico"
                    id="PrimaGradoAcademico"                     
                    value={this.state.PrimaGradoAcademico}
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>

                <div className="form-group col-3">
                <label className="PrimaPofecionalizacion ">Prima Profecionalizacion</label>
                <input type="double"
                className="form-control "
                name="PrimaProfecionalizacion"
                    id="primaProfecionalizacion"                     
                    value={this.state.PrimaProfecionalizacion}
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>

                <div className="form-group col-3">
                <label className="PrimaHijo">Prima Hijo con Discapacidad</label>
                <input type="double"
                className="form-control "
                name="PrimaHijoDiscapacidad"
                    id="primaHijo"                     
                    value={this.state.PrimaHijoDiscapacidad}
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>

                <div className="form-group col-4">
                <label className="PrimaApoyo ">Prima Apoyo Act.Doc. Y de Investigacion</label>
                <input type="double"
                className="form-control "
                name="PrimaApoyo"
                    id="primaApoyo"                     
                    value={this.state.PrimaApoyo}
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>

                <div className="form-group col-3">
                <label className="PrimaChoferes ">Prima Choferes y Supervisores</label>
                <input type="double"
                className="form-control "
                name="PrimaChoferSupervisor"
                    id="primaChoferes"                     
                    value={this.state.PrimaChoferSupervisor}
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>

                <div className="form-group col-3">
                <label className="PasoAutomatico ">Paso Automático</label>
                <input type="double"
                className="form-control "
                name="PasoAutomatico"
                    id="pasoAutomatico"                     
                    value={this.state.PasoAutomatico}
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>

                <div className="form-group col-3">
                <label className="AporteCaja">Aporte Caja de Ahorro</label>
                <input type="double"
                className="form-control "
                name="AporteCajaAhorro"
                    id="aporteCaja"                     
                    value={this.state.AporteCajaAhorro}
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
