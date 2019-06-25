import React,{Component} from 'react';
import axios from 'axios';
import Remuneraciones from './Remuneraciones';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


    
  
import Msj from './Msj';

export default class DatosPersonal extends Component {
    constructor(props) {
        super(props);
   this.state={
            Nombre:'',
            Apellido:'',
            Cedula:'',
            Sexo:'',
            EstadoCivil:'',
            Nacionalidad:'',
            NHijos:'',
            FechaNacimiento:'',
            btn: false,
            btn2: false,
            id:'',
            formu: false,
            mensaje:'',
            modal: false
            
        };

        this.toggle = this.toggle.bind(this);
    }
        toggle() {
          const agre= this.validacion();
           if(agre){
               this.setState({
                   btn2: true
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

          validacion(){
            if(this.state.Nombre === '' || this.state.Apellido=== ''|| this.state.Cedula=== '' || this.state.Sexo ==='' || this.state.EstadoCivil === ''|| this.state.NHijos === '' || this.state.Nacionalidad ==='' || this.state.FechaNacimiento===''){
                this.setState({
                    mensaje: 'Todos los campos son Necesarios',
                    
                })
              return false;
            }
            console.log(this.state.formu)
           this.setState({
                mensaje: 'Empleado Agregado',
                formu: true
            });
            return true;
          }
           async handleSubmit  (e){
                e.preventDefault();
               
                  if (!this.validacion()){
                       return 
                   }
                
                
                const datos = { 
                    Nombre: this.state.Nombre,
                    Apellido:this.state.Apellido,
                    Cedula: this.state.Cedula,
                    Sexo:this.state.Sexo,
                    EstadoCivil: this.state.EstadoCivil,
                    Nacionalidad: this.state.Nacionalidad,
                    NHijos: this.state.NHijos,
                    FechaNacimiento: this.state.FechaNacimiento
                }
            await  this.metodo(datos) ;
                    
               
        }


        async metodo(datos){
           const respuesta = await axios({
               method: 'POST',
               url: '/datospersonal',
               data: datos
           }) 
            .then(res =>{
                
                this.setState({
                    id:res.data.data.insertId
                }) 
                console.log(this.state.id)
            })

            return respuesta;
        }

        remuneracion(e){
            this.setState({
                btn: true,
                id:this.state.id
            })
        }

    render() {
        const agregar= this.state.btn2;
        const rem =this.state.btn;
        const formulario= this.state.formu;
       
        return (
            
           <div><h2 className="card-title text-center mb-5">Sistema de Administracion de Personal
           </h2> 
         <div className="form-group card border-dark  ">
             
            <div className="card mt-3  ">
                
            <div className="card-body ">
                <h2 className="card-title text-center mb-5">Ingrese los datos del nuevo Empleado
                </h2>
                {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
                <form onSubmit={this.handleSubmit.bind(this)}>
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
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>

                
                </div>

                
                
                
                
                <div className="form-group row ">
                
                

                <div className="form-group col-3">
                <label className="fechaDeNacimiento">Fecha De Nacimiento</label>
                <input type="date" 
                className="form-control " 
                name="FechaNacimiento" 
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
                checked={this.state.sexo }
                onChange={event => this.valueToState(event.target)}/> Masculino
                
                <input type='radio' name="Sexo" value='femenino'
                checked={this.state.sexo  }
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
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>

                <div className="form-group col-3">
                <label className="EstadoCivil">Estado Civil</label>
                <select className="form-control  "
                id="EstadoCivil"
                name="EstadoCivil"
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
                onChange={event => this.valueToState(event.target)}/>
                </div>
                </div>
                </div>
                
                </div>
                
                 
                </fieldset>

                <div className="modal-footer">
        <button onClick={this.toggle} type="submit" className="btn btn-primary btn-block"   >Crear</button>
                
      </div>
                </form>
                {agregar ? <button type="btn" className="btn btn-primary btn-block" onClick={this.remuneracion.bind(this)}  >Agregar Remuneraciones</button> : ''}
                </div>

                </div> 
              
               <div>
        
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
              {this.state.mensaje}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>OK</Button>
            
          </ModalFooter>
        </Modal>
      </div>
                </div>
               
                { rem ? <Remuneraciones idDato= {this.state.id}/> : ''}
                </div>
               
        )
    }
}