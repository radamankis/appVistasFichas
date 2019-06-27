import React,{Component} from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class PosGrado extends Component {
    constructor(props) {
        super(props);
   this.state={
        idDatoPersonal:this.props.idDato,
        TituloPostgrado:'',
        UniversidadPostgrado:'',
        NivelPostgrado:''
            
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
            if(this.state.idDatoPersonal === '' || this.state.TituloPostgrado=== ''|| this.state.UniversidadPostgrado=== '' || this.state.NivelPostgrado ==='' ){
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
                    TituloPostgrado: this.state.TituloPostgrado,
                    UniversidadPostgrado:this.state.UniversidadPostgrado,
                    NivelPostgrado: this.state.NivelPostgrado,
                    
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
               url: '/postgrado',
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
            className="text-center">Posgrado
            </legend>
            <div className="card mt-3 py-2 card border-dark mb-3">
            <div className="card-body">
                <div className="form-group row">

                <div className="form-group col-3">
                <label className="GradoInstitucion"> Nivel Postgrado</label>
                <select className="form-control  "
                name="NivelPostgrado"
                id="NivelPostgrado"
                onChange={event => this.valueToState(event.target)}>
                    <option>Seleccione Grado</option>
                    <option>Especializacion</option>
                    <option>Doctorado</option>
                    <option>Maestria</option>
                    <option>Post-Doctorado</option>
                    
                </select>
                </div>

                <div className="form-group col-5">
                <label className="TituloPreGrado-TSU">Universidad Postgrado de PosGrado</label>
                <input type="text"
                className="form-control "
                name="UniversidadPostgrado"
                    id="UniversidadPostgrado"                     
                    placeholder="Ingrese Universidad Postgrado "
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>
                
                
                
                </div>
                <div className="form-group row ">
                <div className="form-group col-5">
                <label className="UniversidadPreGrado-TSU">Titulo Postgrado</label>
                <input type="text"
                className="form-control "
                name="TituloPostgrado"
                    id="TituloPostgrado"                     
                    placeholder="Ingrese Titulo Postgrado "
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