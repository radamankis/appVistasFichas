import React,{Component} from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export default class Detalles extends Component {
    constructor(props) {
        super(props);
   this.state={
        idDatoPersonal:this.props.idDato,
        Discapacidad:'',
        FechaJubilacion:'',
        FechaVigencia:'',
        FechaIngresoInicial:'',
        idUsuario:localStorage.getItem('idUsuario'),
        Created:'',
        Update:'',
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
            if(this.state.idDatoPersonal === '' || this.state.Discapacidad=== '' || this.state.FechaIngresoInicial ==='' || this.state.FechaVigencia ===''){
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
                    Discapacidad: this.state.Discapacidad,
                    FechaJubilacion:this.state.FechaJubilacion,
                    FechaIngresoInicial: this.state.FechaIngresoInicial,
                    FechaVigencia: this.state.FechaVigencia,
                    idUsuario:this.state.idUsuario
                    
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
               url: '/detalles',
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
            className="text-center">Detalles
            </legend>
            <div className="card mt-3 py-2 card border-dark mb-3">
            <div className="card-body">
                <div className="form-group row">

                <div className="form-group col-3">
                <label className="GradoInstitucion">Discapacidad</label>
                <input type="text"
                className="form-control "
                name="Discapacidad"
                    id="Discapacidad"                     
                    placeholder="Ingrese Discapacidad o coloque NO"
                    onChange={event => this.valueToState(event.target)}/>
                </div>

                <div className="form-group col-5">
                <label className="TituloPreGrado-TSU">FechaJubilacion</label>
                <input type="date"
                className="form-control "
                name="FechaJubilacion"
                    id="FechaJubilacion"                     
                    
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>
                
                
                
                </div>
                <div className="form-group row ">
                <div className="form-group col-5">
                <label className="UniversidadPreGrado-TSU">Fecha Ingreso Inicial</label>
                <input type="date"
                className="form-control "
                name="FechaIngresoInicial"
                    id="FechaIngresoInicial"                     
                    
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>

                <div className="form-group col-5">
                <label className="UniversidadPreGrado-TSU">Fecha Vigencia</label>
                <input type="date"
                className="form-control "
                name="FechaVigencia"
                    id="FechaVigencia"                     
                    
                    onChange={event => this.valueToState(event.target)}/>
                
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