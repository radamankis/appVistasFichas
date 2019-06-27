import React,{Component} from 'react';
import axios from 'axios';
import Remuneraciones from './Remuneraciones';
import Cargo from './Cargo';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Formacion from './Formacion';
import PosGrado from './Postgado';
import TipoCargo from './TipoCargo';
import Detalles from './Detalles';
import TipoPersonal from './TipoPersonal';


    
  


export default class DatosPersonal extends Component {
    constructor(props) {
        super(props);
   this.state={
            tipo:localStorage.getItem('role'),
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
            btn3: false,
            btn4: false,
            btn5: false,
            btn6: false,
            btn7: false,
            btn8: false,
            btn9: false,
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
                  
                   formu: true
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
            
                console.log()
            this.setState({
                mensaje: respuesta.data.msg,
                
            })
            if(this.state.mensaje === 'Datos Creado'){
                this.setState({
                    btn2: true,
                    id:respuesta.data.data.insertId
                })
            }
            return respuesta;
        }

        remuneracion(e){
            this.setState({
                btn: true,
                id:this.state.id
            })
        }

        cargo(e){
            this.setState({
                btn3: true,
                id:this.state.id
            })
        }
        formacion(e){
            this.setState({
                btn4: true,
                id:this.state.id
            })
        }
        posgrado(e){
            this.setState({
                btn5: true,
                id:this.state.id
            })
        }
        tipocargo(e){
            this.setState({
                btn6: true,
                id:this.state.id
            })
        }
        detalles(e){
            this.setState({
                btn7: true,
                id:this.state.id
            })
        }
        tipopersonal(e){
            this.setState({
                btn8: true,
                id:this.state.id
            })
        }
        finalizar(e){
            this.setState({
                btn9: true,
                
            })
            
            
        }


        

    render() {
        const agregar= this.state.btn2;
        const rem =this.state.btn;
        const cargo=this.state.btn3;
        const formacion=this.state.btn4;
        const posgrado=this.state.btn5;
        const tipocargo=this.state.btn6;
        const detalles= this.state.btn7;
        const tipopersonal= this.state.btn8;
        
        const finalizar= this.state.btn9;
       
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
                {agregar ? <button type="btn" className="btn btn-primary btn-block" onClick={this.cargo.bind(this)}  >Agregar Cargo</button> : ''}
                {agregar ? <button type="btn" className="btn btn-primary btn-block" onClick={this.formacion.bind(this)}  >Agregar Fromacion Academica</button> : ''}
                {agregar ? <button type="btn" className="btn btn-primary btn-block" onClick={this.posgrado.bind(this)}  >Agregar Posgrado</button> : ''}
                {agregar ? <button type="btn" className="btn btn-primary btn-block" onClick={this.tipocargo.bind(this)}  >Agregar Tipo de Cargo</button> : ''}
                {agregar ? <button type="btn" className="btn btn-primary btn-block" onClick={this.detalles.bind(this)}  >Agregar Detalles</button> : ''}
                {agregar ? <button type="btn" className="btn btn-primary btn-block" onClick={this.tipopersonal.bind(this)}  >Agregar Tipo de Personal</button> : ''}
                {rem && cargo && formacion && posgrado && tipocargo && tipopersonal && detalles ? <button type="btn" className="btn btn-primary btn-block" onClick={this.finalizar.bind(this)}  >Crear Usuario</button> : ''}
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
                { cargo ? <Cargo idDato= {this.state.id}/> : ''}
                { formacion ? <Formacion idDato= {this.state.id}/> : ''}
                { posgrado ? <PosGrado idDato= {this.state.id}/> : ''}
                { tipocargo ? <TipoCargo idDato= {this.state.id}/> : ''}
                { detalles ? <Detalles idDato= {this.state.id}/> : ''}
                { tipopersonal ? <TipoPersonal idDato= {this.state.id}/> : ''}
                { finalizar && this.state.tipo=== 'ADMIN'? window.location.href= 'http://localhost:3000/nuevo-usuario':'' }
                { finalizar && this.state.tipo=== 'USER'? window.location.href= 'http://localhost:3000/nuevo-usuario2':'' }
                </div>
               
        )
    }
}