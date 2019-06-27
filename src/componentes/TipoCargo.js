import React,{Component} from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class TipoCargo extends Component {
    constructor(props) {
        super(props);
   this.state={
        idDatoPersonal:this.props.idDato,
        Generico:'',
        Especifico:'',
        DedicacionLaboral:'',
        ActividadLaboral:'',
        Categoria:'',
        CondicionLaboral:'',
           
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
            if(this.state.idDatoPersonal === '' || this.state.Generico=== ''|| this.state.Especifico=== '' || this.state.CondicionLaboral ===''||  this.state.DedicacionLaboral ===''|| this.state.Categoria ===''|| this.state.ActividadLaboral ==='' ){
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
                    Generico: this.state.Generico,
                    Especifico:this.state.Especifico,
                    DedicacionLaboral: this.state.DedicacionLaboral,
                    ActividadLaboral:this.state.ActividadLaboral,
                    Categoria: this.state.Categoria,
                    CondicionLaboral: this.state.CondicionLaboral,
                   
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
               url: '/tipocargo',
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
            className="text-center">Tipo de Cargo
            </legend>
            <div className="card mt-3 py-2 card border-dark ">
            <div className="card-body">
                <div className="form-group row">

                <div className="form-group col-3">
                <label className="TipoGenerico">Tipo de Generico</label>
                <select className="form-control  "
                name="Generico"
                id="Generico"
                onChange={event => this.valueToState(event.target)}>
                    <option>Seleccione tipo</option>
                    <option>Docente</option>
                    <option>Administrativo</option>
                    <option>Obrero</option>
                    
                    
                </select>
                </div>

                <div className="form-group col-3">
                <label className="TipoEspecifico">Tipo de Especifico</label>
                <select className="form-control  "
                name="Especifico"
                id="Especifico"
                onChange={event => this.valueToState(event.target)}>
                    <option>Seleccione tipo</option>
                    <option>Sin Especifico</option>
                    <option>Apoyo</option>
                    <option>T.S.U</option>
                    <option>Aux.Docente</option>
                    <option>Profesional</option>
                    
                    
                </select>
                </div>
                
                <div className="form-group col-3">
                <label className="TipoDedicacion">Dedicaicon Laboral</label>
                <select className="form-control  "
                name="DedicacionLaboral"
                id="DedicacionLaboral"
                onChange={event => this.valueToState(event.target)}>
                    <option>Seleccione tipo</option>
                    <option>T.Exclusivo</option>
                    <option>T.Completo</option>
                    <option>Medio Tiempo</option>
                    <option>T.Parcial</option>
                    
                    
                    
                </select>
                </div>

                <div className="form-group col-3">
                <label className="TipoDedicacion">Actividad Laboral</label>
                <select className="form-control  "
                name="ActividadLaboral"
                id="ActividadLaboral"
                onChange={event => this.valueToState(event.target)}>
                    <option>Seleccione tipo</option>
                    <option>Directivo </option>
                    <option>Directivo Gremio </option>
                    <option>Comis.Org.Parauniversitario </option>
                    <option>Comis.Org.Público  </option>
                    <option>Técnico  </option>
                    <option>Profesional  </option>
                    <option>Obrero </option>
                    
                    
                    
                </select>
                </div>
                
                </div>
                <div className="form-group row ">
                <div className="form-group col-3">
                <label className="ActividadLaboral">Categoria</label>
                <select className="form-control  "
                name="Categoria"
                id="Categoria"
                onChange={event => this.valueToState(event.target)}>
                    <option>Seleccione tipo</option>
                    <option>Docente-Instructor</option>
                    <option>Docente-Asistente</option>
                    <option>Docente-Agregado</option>
                    <option>Docente-Asociado</option>
                    <option>Docente-Titular</option>
                    <option>Administrativo-Nivel-1</option>
                    <option>Administrativo-Nivel-2</option>
                    <option>Administrativo-Nivel-3</option>
                    <option>Administrativo-Nivel-4</option>
                    <option>Administrativo-Nivel-5</option>
                    <option>Administrativo-Nivel-6</option>
                    <option>Administrativo-Nivel-7</option>
                    <option>Administrativo-Nivel-8</option>
                    <option>Administrativo-Nivel-9</option>
                    <option>Administrativo-Nivel-10</option>
                    <option>Administrativo-Nivel-11</option>
                    <option>Administrativo-Nivel-12</option>
                    <option>Administrativo-Nivel-13</option>
                    <option>Administrativo-Nivel-14</option>
                    <option>Administrativo-Nivel-15</option>
                    <option>Obrero-Nivel-1</option>
                    <option>Obrero-Nivel-2</option>
                    <option>Obrero-Nivel-3</option>
                    <option>Obrero-Nivel-4</option>
                    <option>Obrero-Nivel-5</option>
                    <option>Obrero-Nivel-6</option>
                    <option>Obrero-Nivel-7</option>


                    
                    
                    
                    
                </select>
                </div>
                
                </div>
                
                
                <div className="form-group row card border-dark ">
                
                <div className="form-group row p-3 ">
                    <div className="form-group col-3">
                <label className="CondicionLaboral">Condicion Laboral</label>
                <select className="form-control  "
                name="CondicionLaboral"
                id="CondicionLaboral"
                onChange={event => this.valueToState(event.target)}>
                    <option>Seleccione tipo</option>
                    <option>Ordinario o Fijo</option>
                    <option>Contratado</option>
                    <option>Jubilado</option>
                    <option>Pensionado por Incapacidad</option>
                    <option>Pensionado por Sobreviviente</option>
                    <option>Becario</option>
                    <option>Sabático</option>
                    <option>Contratado Sin Código de Cargo</option>
                    <option>Comision de Servicio</option>
                    <option>Permiso no Rem</option>
                      
                </select>
                
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