import React,{Component} from 'react';
import axios from 'axios';

export default class PerfilCargo extends Component   {
    
    state={ 
            
            username:this.props.username,
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
            Discapacidad:'',
            FechaJubilacion:'',
            FechaVigencia:'',
            FechaIngresoInicial:'',
            idUsuario:'',
            Created:''
           
        
        };

        valueToState = ({ name, value, checked, type }) => {
            this.setState(() => {
              return { [name]: type === "checkbox" ? checked : value };
            });
          };


            
          async    componentWillMount  ( nextProps, nextState){
               
            const res2= await axios.get (`/datospersonal/buscar/${this.state.username}`)
            const bremu=res2.data.data[0].idDatoPersonal;
                const res= await axios.get (`/cargo/${bremu}`)
                // const btcargo=res.data.data[0].idDatoPersonal;
                console.log(res)
                const tipocargo= await axios.get(`/detalles/${bremu}`)

                    console.log(res.data.data[0])
                    console.log(tipocargo)

                    const date= await new Date( tipocargo.data.data[0].FechaJubilacion);
                    const fecha1= date.getDate() +'/'+(date.getMonth())+'/'+(date.getFullYear());
                    const date2= await new Date( tipocargo.data.data[0].FechaIngresoInicial);
                    const fecha2= date2.getDate() +'/'+(date2.getMonth())+'/'+(date2.getFullYear());
                    const date3= await new Date( tipocargo.data.data[0].FechaVigencia);
                    const fecha3= date3.getDate() +'/'+(date3.getMonth())+'/'+(date3.getFullYear());
                    const date4= await new Date( res.data.data[0].FechaDesdeOtra);
                    const fecha4= date4.getDate() +'/'+(date4.getMonth())+'/'+(date4.getFullYear());
                    const date5= await new Date( res.data.data[0].FechaHastaOtra);
                    const fecha5= date5.getDate() +'/'+(date5.getMonth())+'/'+(date5.getFullYear());
                    const date6= await new Date( tipocargo.data.data[0].Created);
                    const fecha6= date6.getDate() +'/'+(date6.getMonth())+'/'+(date6.getFullYear());
                    
                   
                    
                    this.setState({ 
                        Nucleo: res.data.data[0].Nucleo,
                        CodigoNucleo: res.data.data[0].CodigoNucleo,
                        Localizacion: res.data.data[0].Localizacion,
                        Dependencia: res.data.data[0].Dependencia,
                        DenominacionCargo: res.data.data[0].DenominacionCargo,
                        CargoActual: res.data.data[0].CargoActual,
                        CargoActualUdo: res.data.data[0].CargoActualUdo,
                        idCargoOpsu: res.data.data[0].idCargoOpsu,
                        FechaDesdeOtra: fecha4,
                        FechaHastaOtra: fecha5,
                        NombreOtraInstitucion: res.data.data[0].NombreOtraInstitucion,
                        
                        FechaJubilacion: fecha1,
                        FechaIngresoInicial: fecha2,
                        FechaVigencia: fecha3,
                        Discapacidad: tipocargo.data.data[0].Discapacidad,
                        idUsuario: tipocargo.data.data[0].idUsuario,
                        Created: fecha6
                        
                        

                        
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
            <div>
         <div className="form-group card border-dark  ">
   
            <div className="card mt-3  ">
            <div className="card-body ">
                
                {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
                <form >
                
            <fieldset>
            <legend 
            className="text-center"> Cargo
            </legend>
            <div className="card mt-3 py-2 card border-dark ">
            <div className="card-body">
                <div className="form-group row">

                <div className="form-group col-3">
                <label className="TipoGenerico">Nucleo</label>
                <input className="form-control  "
                name="Nucleo"
                id="Nucleo"
                value={this.state.Nucleo}
                onChange={event => this.valueToState(event.target)}/>
                    
                </div>

                <div className="form-group col-4 ">
                <label className="Apellido">Codigo Nucleo
                </label>
                
                <input type="text"
                className="form-control"
                    id="CodigoNucleo" 
                    name="CodigoNucleo"
                    value={this.state.CodigoNucleo}
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>
                
                <div className="form-group col-4 ">
                <label className="Apellido">Localizacion
                </label>
                
                <input type="text"
                className="form-control"
                    id="Localizacion" 
                    name="Localizacion"
                    value={this.state.Localizacion}
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>

                <div className="form-group col-4 ">
                <label className="Apellido">Dependencia
                </label>
                
                <input type="text"
                className="form-control"
                    id="Dependencia" 
                    name="Dependencia"
                    value={this.state.Dependencia}
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
                    value={this.state.DenominacionCargo}
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>

                <div className="form-group col-4 ">
                <label className="Apellido">Cargo Actual
                </label>
                
                <input type="text"
                className="form-control"
                    id="CargoActual" 
                    name="CargoActual"
                    value={this.state.CargoActual}
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>

                <div className="form-group col-4 ">
                <label className="Apellido">Cargo Actual UDO
                </label>
                
                <input type="text"
                className="form-control"
                    id="CargoActualUdo" 
                    name="CargoActualUdo"
                    value={this.state.CargoActualUdo}
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>

                <div className="form-group col-3">
                <label className="TipoGenerico">CargoOpsu</label>
                <input className="form-control  "
                name="idCargoOpsu"
                id="idCargoOpsu"
                value={this.state.idCargoOpsu}
                onChange={event => this.valueToState(event.target)}/>
                    
                </div>
                
                </div>
                
                
                <div className="form-group row card border-dark ">
                
                <div className="form-group row p-3 ">
                <div className="form-group col-4 ">
                <label className="Apellido">Fecha Incio Otra Institucion
                </label>
                
                <input type="text"
                className="form-control"
                    id="FechaDesdeOtra" 
                    name="FechaDesdeOtra"
                    value={this.state.FechaDesdeOtra}
                    onChange={event => this.valueToState(event.target)}
                   />
                
                </div>

                <div className="form-group col-4 ">
                <label className="Apellido">Fecha Fin Otra Institucion
                </label>
                
                <input type="text"
                className="form-control"
                    id="FechaHastaOtra" 
                    name="FechaHastaOtra"
                    value={this.state.FechaHastaOtra}
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
                    value={this.state.NombreOtraInstitucion}
                    onChange={event => this.valueToState(event.target)}/>
                    
                </div>
                
                </div>
                
                
                
                </div>
                </div>
                </div>

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
                    value={this.state.Discapacidad}
                    onChange={event => this.valueToState(event.target)}/>
                </div>

                <div className="form-group col-5">
                <label className="TituloPreGrado-TSU">FechaJubilacion</label>
                <input type="text"
                className="form-control "
                name="FechaJubilacion"
                    id="FechaJubilacion"                     
                    value={this.state.FechaJubilacion}
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>
                
                
                
                </div>
                <div className="form-group row ">
                <div className="form-group col-5">
                <label className="UniversidadPreGrado-TSU">Fecha Ingreso Inicial</label>
                <input type="text"
                className="form-control "
                name="FechaIngresoInicial"
                    id="FechaIngresoInicial"                     
                    value={this.state.FechaIngresoInicial}
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>

                <div className="form-group col-5">
                <label className="UniversidadPreGrado-TSU">Fecha Vigencia</label>
                <input type="text"
                className="form-control "
                name="FechaVigencia"
                    id="FechaVigencia"                     
                    value={this.state.FechaVigencia}
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>
                
                <div className="form-group col-5">
                <label className="UniversidadPreGrado-TSU">Created</label>
                <input type="text"
                className="form-control "
                name="Created"
                    id="Created"                     
                    value={this.state.Created}
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
