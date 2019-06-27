import React,{Component} from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export default class Remuneraciones extends Component {
    constructor(props) {
        super(props);
   this.state={
        idDatoPersonal: this.props.idDato,
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
        AporteCajaAhorro:'',
        mensaje:''

            
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        const agre= this.validacion();
         if(agre){
             this.setState({
                mensaje:'',
                 formu: true
             })
         }
          this.setState(prevState => ({
            modal: !prevState.modal
           
          }));
        }

        validacion(){
            if(this.state.idDatoPersonal === '' || this.state.SueldoTabla=== ''|| this.state.BonoJefatura=== '' || this.state.PrimaFamiliar ==='' || this.state.BonoLacteo === ''|| this.state.PrimaGradoAcademico === '' || this.state.PrimaProfecionalizacion ==='' || this.state.PrimaChoferSupervisor==='' || this.state.PrimaApoyo==='' || this.state.PrimaHijoDiscapacidad==='' || this.state.PasoAutomatico==='' || this.state.AporteCajaAhorro===''){
                this.setState({
                    mensaje: 'Todos los campos son Necesarios',
                    
                })
              return false;
            }
            
           
            return true;
          }

        valueToState = ({ name, value, checked, type }) => {
            this.setState(() => {
              return { [name]: type === "checkbox" ? checked : value };
            });
          };


           async handleSubmit (e){
                e.preventDefault();
                
        //    await axios.get(`/datospersonal/buscar/${busca}`)
        //     .then( res=>{
                
               
        //         this.setState({ 
        //            idDatoPersonal: res.data.data[0].idDatoPersonal
        //         })
        //     })
                const datos = { 
                    idDatoPersonal: this.state.idDatoPersonal,
                    SueldoTabla: this.state.SueldoTabla,
                    BonoJefatura: this.state.BonoJefatura,
                    PrimaFamiliar: this.state.PrimaFamiliar,
                    BonoLacteo: this.state.BonoLacteo,
                    PrimaGradoAcademico: this.state.PrimaGradoAcademico,
                    PrimaProfecionalizacion: this.state.PrimaProfecionalizacion,
                    PrimaHijoDiscapacidad: this.state.PrimaHijoDiscapacidad,
                    PrimaApoyo: this.state.PrimaApoyo,
                    PrimaChoferSupervisor: this.state.PrimaChoferSupervisor,
                    PasoAutomatico: this.state.PasoAutomatico,
                    AporteCajaAhorro: this.state.AporteCajaAhorro
                    
                }
                if(this.state.mensaje === 'Todos los campos son Necesarios'){
                    return
                }
                else{
                    this.metodo(datos) ;
                }
              

               
        }

        async metodo(datos){
            
           const respuesta = await axios({
               method: 'POST',
               url: "/remuneracion",
               data: datos
           }) 
            .then(res =>{
                this.setState({
                    mensaje: res.data.msg
                })
                console.log(res.data.msg);
            })

            return respuesta;
        }

        

    render() {
        
        
        return (
            <div><h2 className="card-title text-center mb-5">Sistema de Administracion de Personal
           </h2>
         <div className="form-group card border-dark  ">
   
            <div className="card mt-3  ">
            <div className="card-body ">
                <h2 className="card-title text-center mb-5">Ingrese los datos de las Remuneraciones
                </h2>
                {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
                
                <form onSubmit={this.handleSubmit.bind(this)}>
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
                placeholder="ejem: 256.23 "
                onChange={event => this.valueToState(event.target)}/>
                </div>

                <div className="form-group col-3">
                <label className="BonoJefatura ">Bono de Jefatura</label>
                <input type="double"
                className="form-control "
                name="BonoJefatura"
                    id="bonoJefatura"                     
                    placeholder="ejemplo 450.5"
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>

                <div className="form-group col-3">
                <label className="PrimaFamiliar">Prima Familiar</label>
                <input type="double"
                className="form-control "
                name="PrimaFamiliar"
                    id="primaFamiliar"                     
                    placeholder="ejemplo 450.5"
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>

                <div className="form-group col-3">
                <label className="BonoLacteo ">Bono Lácteo</label>
                <input type="double"
                className="form-control "
                name="BonoLacteo"
                    id="bonoLacteo"                     
                    placeholder="ejemplo 450.5"
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>

                <div className="form-group col-4">
                <label className="PrimaGradoAcDocente ">Prima Grado Academico Docente</label>
                <input type="double"
                className="form-control "
                name="PrimaGradoAcademico"
                    id="primaGradoAcDocente"                     
                    placeholder="ejemplo 450.5"
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>

                <div className="form-group col-3">
                <label className="PrimaPofecionalizacion ">Prima Profecionalizacion</label>
                <input type="double"
                className="form-control "
                name="PrimaProfecionalizacion"
                    id="primaProfecionalizacion"                     
                    placeholder="ejemplo 450.5"
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>

                <div className="form-group col-3">
                <label className="PrimaHijo">Prima Hijo con Discapacidad</label>
                <input type="double"
                className="form-control "
                name="PrimaHijoDiscapacidad"
                    id="primaHijo"                     
                    placeholder="ejemplo 450.5"
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>

                <div className="form-group col-4">
                <label className="PrimaApoyo ">Prima Apoyo Act.Doc. Y de Investigacion</label>
                <input type="double"
                className="form-control "
                name="PrimaApoyo"
                    id="primaApoyo"                     
                    placeholder="ejemplo 450.5"
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>

                <div className="form-group col-3">
                <label className="PrimaChoferes ">Prima Choferes y Supervisores</label>
                <input type="double"
                className="form-control "
                name="PrimaChoferSupervisor"
                    id="primaChoferes"                     
                    placeholder="ejemplo 450.5"
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>

                <div className="form-group col-3">
                <label className="PasoAutomatico ">Paso Automático</label>
                <input type="double"
                className="form-control "
                name="PasoAutomatico"
                    id="pasoAutomatico"                     
                    placeholder="ejemplo 450.5"
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>

                <div className="form-group col-3">
                <label className="AporteCaja">Aporte Caja de Ahorro</label>
                <input type="double"
                className="form-control "
                name="AporteCajaAhorro"
                    id="aporteCaja"                     
                    placeholder="ejemplo 450.5"
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>
                </div>
                
                
                </div>
                
                </div>
                
                
                
                
               
                
               
                </fieldset>

                <div className="modal-footer">
        <button onClick={this.toggle} type="submit" className="btn btn-primary btn-block">Agregar</button>
        
      </div>
                </form>
                
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
                </div>
                
                </div>
</div>
        )
    }
}