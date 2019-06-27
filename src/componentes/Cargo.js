import React,{Component} from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export default class Cargo extends Component {
    constructor(props) {
        super(props);
   this.state={
        idDatoPersonal:this.props.idDato,
        Nucleo:'',
        CodigoNucleo:'',
        Localizacion:'',
        Dependencia:'',
        DenominacionCargo:'',
        CargoActual:'',
        CargoActualUdo: '',
        idCargoOpsu:'',
        FechaDesdeOtra: '',
        FechaHastaOtra: '',
        NombreOtraInstitucion: '',
        mensaje:''
           
        };

        this.toggle = this.toggle.bind(this);
    }

        toggle() {
            const agre= this.validacion();
             if(agre){
                 this.setState({
                    mensaje:''
                     
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
            if(this.state.idDatoPersonal === '' || this.state.Nucleo=== ''|| this.state.CodigoNucleo=== '' || this.state.Localizacion ==='' || this.state.Dependencia === ''|| this.state.DenominacionCargo === '' || this.state.CargoActual ==='' || this.state.idCargoOpsu==='' || this.state.CargoActualUdo==='' ){
                this.setState({
                    mensaje: 'Todos los campos son Necesarios',
                    
                })
              return false;
            }
            
           
            return true;
          }


           async handleSubmit (e){
                e.preventDefault();
                
                const datos = { 
                    idDatoPersonal: this.state.idDatoPersonal,
                    Nucleo: this.state.Nucleo,
                    CodigoNucleo: this.state.CodigoNucleo,
                    Localizacion: this.state.Localizacion,
                    Dependencia: this.state.Dependencia,
                    DenominacionCargo: this.state.DenominacionCargo,
                    CargoActualUdo: this.state.CargoActualUdo,
                    idCargoOpsu: this.state.idCargoOpsu,
                    FechaDesdeOtra: this.state.FechaDesdeOtra,
                    FechaHastaOtra: this.state.FechaHastaOtra,
                    NombreOtraInstitucion: this.state.NombreOtraInstitucion
                   
                }
                if(this.state.mensaje === 'Todos los campos son Necesarios'){
                    return
                }
                else{
                    this.metodo(datos) ;
                }
                
               

               
        }

        componentDidMount(){
            axios.get(`/cargoopsu`)
                .then( res=>{
                   
                   const code= res.data[0].idCargoOpsu;
                   
                    this.setState({ 
                        idCargoOpsu: code
                    })
                    
                })
        }
        

        async metodo(datos){
           const respuesta = await axios({
               method: 'POST',
               url: '/cargo',
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
                <h2 className="card-title text-center mb-5">Ingrese los datos del Cargo del Empleado
                </h2>
                {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
                <form onSubmit={this.handleSubmit.bind(this)}>
                <fieldset>
            <legend 
            className="text-center"> Cargo
            </legend>
            <div className="card mt-3 py-2 card border-dark ">
            <div className="card-body">
                <div className="form-group row">

                <div className="form-group col-3">
                <label className="TipoGenerico">Nucleo</label>
                <select className="form-control  "
                name="Nucleo"
                id="Nucleo"
                onChange={event => this.valueToState(event.target)}>
                    <option>Seleccione Nucleo</option>
                    <option>Anzoategui</option>
                    <option>Monagas</option>
                    <option>Nueva Esparta</option>
                    <option>Bolivar</option>
                    
                    
                </select>
                </div>

                <div className="form-group col-4 ">
                <label className="Apellido">Codigo Nucleo
                </label>
                
                <input type="text"
                className="form-control"
                    id="CodigoNucleo" 
                    name="CodigoNucleo"
                    aria-describedby="apellidoHelp" 
                    placeholder="Ingrese codigo "
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>
                
                <div className="form-group col-4 ">
                <label className="Apellido">Localizacion
                </label>
                
                <input type="text"
                className="form-control"
                    id="Localizacion" 
                    name="Localizacion"
                    aria-describedby="apellidoHelp" 
                    placeholder="Ingrese Localizacion "
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>

                <div className="form-group col-4 ">
                <label className="Apellido">Dependencia
                </label>
                
                <input type="text"
                className="form-control"
                    id="Dependencia" 
                    name="Dependencia"
                    aria-describedby="apellidoHelp" 
                    placeholder="Ingrese Dependencia "
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>
                
                </div>
                <div className="form-group row ">
                <div className="form-group col-4 ">
                <label className="Apellido">Denominacion Cargo
                </label>
                
                <input type="text"
                className="form-control"
                    id="DenominacionCargo" 
                    name="DenominacionCargo"
                    aria-describedby="apellidoHelp" 
                    placeholder="Ingrese Denominacion "
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>

                <div className="form-group col-4 ">
                <label className="Apellido">Cargo Actual
                </label>
                
                <input type="text"
                className="form-control"
                    id="CargoActual" 
                    name="CargoActual"
                    aria-describedby="apellidoHelp" 
                    placeholder="Ingrese cargo actual "
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>

                <div className="form-group col-4 ">
                <label className="Apellido">Cargo Actual UDO
                </label>
                
                <input type="text"
                className="form-control"
                    id="CargoActualUdo" 
                    name="CargoActualUdo"
                    aria-describedby="apellidoHelp" 
                    placeholder="Ingrese Cargo Udo "
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>

                <div className="form-group col-3">
                <label className="TipoGenerico">CargoOpsu</label>
                <select className="form-control  "
                name="idCargoOpsu"
                id="idCargoOpsu"
                value={this.state.idCargoOpsu}
                onChange={event => this.valueToState(event.target)}>
                    <option>Seleccione Nucleo</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    
                    
                </select>
                </div>
                
                </div>
                
                
                <div className="form-group row card border-dark ">
                
                <div className="form-group row p-3 ">
                <div className="form-group col-4 ">
                <label className="Apellido">Fecha Incio Otra Institucion
                </label>
                
                <input type="date"
                className="form-control"
                    id="FechaDesdeOtra" 
                    name="FechaDesdeOtra"
                    onChange={event => this.valueToState(event.target)}
                   />
                
                </div>

                <div className="form-group col-4 ">
                <label className="Apellido">Fecha Fin Otra Institucion
                </label>
                
                <input type="date"
                className="form-control"
                    id="FechaHastaOtra" 
                    name="FechaHastaOtra"
                    onChange={event => this.valueToState(event.target)} 
                   />
                
                </div>

                <div className="form-group col-4 ">
                <label className="Apellido">Nombre de Otra Instutucion
                </label>
                
                <input type="text"
                className="form-control"
                    id="NombreOtraInstitucion" 
                    name="NombreOtraInstitucion"
                    aria-describedby="apellidoHelp" 
                    placeholder="Ingrese Cargo Udo "
                    onChange={event => this.valueToState(event.target)}/>
                    
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