import React,{Component} from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class TipoPersonal extends Component {
    constructor(props) {
        super(props);
   this.state={
        idDatoPersonal: this.props.idDato,
        ComisionServicioDesde:'',
        ComisionServicioHasta:'',
        PermisoNRDesde:'',
        PermisoNRHasta:'',
        CodigoCargo:'',
        Nucleo:'',
        Prog:'',
        ACC:'',
        SubACC:'',
        Tarea:'',
        Detalle:''
           
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
            if(this.state.idDatoPersonal === '' || this.state.CodigoCargo=== ''|| this.state.Nucleo=== '' || this.state.Prog ===''||  this.state.ACC ===''|| this.state.Nucleo ===''|| this.state.SubACC ==='' || this.state.Tarea ==='' || this.state.Detalle ==='' ){
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


            handleSubmit (e){
                e.preventDefault();
                const datos = { 
                    idDatoPersonal:this.state.idDatoPersonal,
                    ComisionServicioDesde: this.state.ComisionServicioDesde,
                    ComisionServicioHasta:this.state.ComisionServicioHasta,
                    PermisoNRDesde: this.state.PermisoNRDesde,
                    PermisoNRHasta:this.state.PermisoNRHasta,
                    CodigoCargo: this.state.CodigoCargo,
                    Nucleo: this.state.Nucleo,
                    Prog: this.state.Prog,
                    ACC: this.state.ACC,
                    SubACC: this.state.SubACC,
                    Tarea: this.state.Tarea,
                    Detalle: this.state.Detalle,
                   
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
               url: '/tipopersonal',
               data: datos
           }) 
            .then(res =>{
                this.setState({
                    mensaje: res.data.msg
                })
                console.log(res.data);
    
                
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
                <h2 className="card-title text-center mb-5">Ingrese los datos del nuevo Empleado
                </h2>
                {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
                <form onSubmit={this.handleSubmit.bind(this)}>
                <fieldset>
            <legend 
            className="text-center">Tipo de Persnal
            </legend>
            <div className="card mt-3 py-2 card border-dark ">
            <div className="card-body">
                <div className="form-group row">

                <div className="form-group col-5">
                <label className="TituloPreGrado-TSU">Comision de Servicio Desde</label>
                <input type="date"
                className="form-control "
                name="ComisionServicioDesde"
                    id="ComisionServicioDesde"                     
                    
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>

                <div className="form-group col-5">
                <label className="TituloPreGrado-TSU">Comision de Servicio Hasta</label>
                <input type="date"
                className="form-control "
                name="ComisionServicioHasta"
                    id="ComisionServicioHasta"                     
                    
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>
                
                <div className="form-group col-5">
                <label className="TituloPreGrado-TSU">Permiso NR Desde</label>
                <input type="date"
                className="form-control "
                name="PermisoNRDesde"
                    id="PermisoNRDesde"                     
                    
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>

                <div className="form-group col-5">
                <label className="TituloPreGrado-TSU">Permiso NR Hasta</label>
                <input type="date"
                className="form-control "
                name="PermisoNRHasta"
                    id="PermisoNRHasta"                     
                    
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>
                
                </div>
                <div className="form-group row ">
                <div className="form-group col-3">
                <label className="SueldoTabla">Nucleo
                </label>
                <input type="text"
                className="form-control "
                name="Nucleo"
                id="Nucleo" 
                placeholder="ejem: 01 "
                onChange={event => this.valueToState(event.target)}/>
                </div>

                <div className="form-group col-3">
                <label className="SueldoTabla">Codigo de Cargo
                </label>
                <input type="text"
                className="form-control "
                name="CodigoCargo"
                id="codigoCargo" 
                placeholder="ejem: 01 "
                onChange={event => this.valueToState(event.target)}/>
                </div>

                <div className="form-group col-3">
                <label className="SueldoTabla">Prog
                </label>
                <input type="text"
                className="form-control "
                name="Prog"
                id="prog" 
                placeholder="ingrese Prog "
                onChange={event => this.valueToState(event.target)}/>
                </div>
                
                <div className="form-group col-3">
                <label className="SueldoTabla">ACC
                </label>
                <input type="text"
                className="form-control "
                name="ACC"
                id="ACC" 
                placeholder="ACC "
                onChange={event => this.valueToState(event.target)}/>
                </div>
                <div className="form-group col-3">
                <label className="SueldoTabla">SubACC
                </label>
                <input type="text"
                className="form-control "
                name="SubACC"
                id="SubACC" 
                placeholder="SubACC "
                onChange={event => this.valueToState(event.target)}/>
                </div>

                <div className="form-group col-3">
                <label className="SueldoTabla">Tarea
                </label>
                <input type="text"
                className="form-control "
                name="Tarea"
                id="Tarea" 
                placeholder="ejem: asistente "
                onChange={event => this.valueToState(event.target)}/>
                </div>
                </div>
                
                
                <div className="form-group row card border-dark ">
                
                <div className="form-group row p-3 ">
                    <div className="form-group col-8">
                <label className="CondicionLaboral">Detalle</label>
                
      <textarea className="form-control" id="Detalle" name="Detalle" rows="6" onChange={event => this.valueToState(event.target)}></textarea>
               
                
                </div>
                
                </div>
                
                
                
                </div>
                </div>
                </div>
                
                
                </fieldset>

                <div className="modal-footer">
        <button onClick={this.toggle} type="submit" className="btn btn-primary btn-block">Crear</button>
        
      </div>
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
                </div>
</div>
        )
    }
}