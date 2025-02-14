import React,{Component} from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export default class Formacion extends Component {
    constructor(props) {
        super(props);
   this.state={
        idDatoPersonal:this.props.idDato,
        GradoInstitucion:'',
        TituloPregrado:'',
        UniversidadPre:'',
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
            if(this.state.idDatoPersonal === '' || this.state.GradoInstitucion=== ''|| this.state.TituloPregrado=== '' || this.state.UniversidadPre ==='' ){
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
                    GradoInstitucion: this.state.GradoInstitucion,
                    TituloPregrado:this.state.TituloPregrado,
                    UniversidadPre: this.state.UniversidadPre,
                    
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
               url: '/formacion',
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
            className="text-center">Formación Academica
            </legend>
            <div className="card mt-3 py-2 card border-dark mb-3">
            <div className="card-body">
                <div className="form-group row">

                <div className="form-group col-3">
                <label className="GradoInstitucion">Grado de Institución</label>
                <select className="form-control  "
                name="GradoInstitucion"
                id="GradoInstitucion"
                onChange={event => this.valueToState(event.target)}>
                    <option>Seleccione Grado</option>
                    <option>Media</option>
                    <option>T.S.U</option>
                    <option>Pregrado</option>
                    <option>Post-Grado</option>
                    
                </select>
                </div>

                <div className="form-group col-5">
                <label className="TituloPreGrado-TSU">Titulo de PreGrado</label>
                <input type="text"
                className="form-control "
                name="TituloPregrado"
                    id="TituloPregrado"                     
                    placeholder="Ingrese un Titulo de pregrado-TSU "
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>
                
                
                
                </div>
                <div className="form-group row ">
                <div className="form-group col-5">
                <label className="UniversidadPreGrado-TSU">Nombre de la Universidad</label>
                <input type="text"
                className="form-control "
                name="UniversidadPre"
                    id="UniversidadPre"                     
                    placeholder="Ingrese Nombre de la Universidad-TSU "
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