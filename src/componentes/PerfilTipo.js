import React,{Component} from 'react';
import axios from 'axios';

export default class PerfilTipo extends Component   {
    
    state={ 
            
            username:this.props.username,
            Generico:'',
            Especifico:'',
            DedicacionLaboral:'',
            ActividadLaboral:'',
            Categoria:'',
            CondicionLaboral:'',
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

        valueToState = ({ name, value, checked, type }) => {
            this.setState(() => {
              return { [name]: type === "checkbox" ? checked : value };
            });
          };


            
          async    componentWillMount  ( nextProps, nextState){
               
            const res2= await axios.get (`/datospersonal/buscar/${this.state.username}`)
            const bremu=res2.data.data[0].idDatoPersonal;
                const res= await axios.get (`/tipocargo/${bremu}`)
                // const btcargo=res.data.data[0].idDatoPersonal;
                console.log(res)
                const tipocargo= await axios.get(`/tipopersonal/${bremu}`)

                    console.log(res.data.data[0])
                    console.log(tipocargo)

                    const date= await new Date( tipocargo.data.data[0].ComisionServicioDesde);
                    const fecha1= date.getDate() +'/'+(date.getMonth())+'/'+(date.getFullYear());
                    const date2= await new Date( tipocargo.data.data[0].ComisionServicioHasta);
                    const fecha2= date2.getDate() +'/'+(date2.getMonth())+'/'+(date2.getFullYear());
                    const date3= await new Date( tipocargo.data.data[0].PermisoNRDesde);
                    const fecha3= date3.getDate() +'/'+(date3.getMonth())+'/'+(date3.getFullYear());
                    const date4= await new Date( tipocargo.data.data[0].PermisoNRHasta);
                    const fecha4= date4.getDate() +'/'+(date4.getMonth())+'/'+(date4.getFullYear());
                   
                    
                    this.setState({ 
                        Generico: res.data.data[0].Generico,
                        Especifico: res.data.data[0].Especifico,
                        DedicacionLaboral: res.data.data[0].DedicacionLaboral,
                        ActividadLaboral: res.data.data[0].ActividadLaboral,
                        Categoria: res.data.data[0].Categoria,
                        CondicionLaboral: res.data.data[0].CondicionLaboral,
                        ComisionServicioDesde: fecha1,
                        ComisionServicioHasta: fecha2,
                        PermisoNRDesde: fecha3,
                        PermisoNRHasta: fecha4,
                        CodigoCargo: tipocargo.data.data[0].CodigoCargo,
                        Nucleo: tipocargo.data.data[0].Nucleo,
                        Prog: tipocargo.data.data[0].Prog,
                        ACC: tipocargo.data.data[0].ACC,
                        SubACC: tipocargo.data.data[0].SubACC,
                        Tarea: tipocargo.data.data[0].Tarea,
                        Detalle: tipocargo.data.data[0].Detalle
                        

                        
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
            className="text-center">Tipo de Cargo
            </legend>
            <div className="card mt-3 py-2 card border-dark ">
            <div className="card-body">
                <div className="form-group row">

                <div className="form-group col-3">
                <label className="TipoGenerico">Tipo de Generico</label>
                <input className="form-control  "
                type="text"
                name="Generico"
                id="Generico"
                value={this.state.Generico}

                onChange={event => this.valueToState(event.target)}/>
                    
                    
                    
                
                </div>

                <div className="form-group col-3">
                <label className="TipoEspecifico">Tipo de Especifico</label>
                <input className="form-control  "
                name="Especifico"
                id="Especifico"
                value={this.state.Especifico}

                onChange={event => this.valueToState(event.target)}/>
                   
                </div>
                
                <div className="form-group col-3">
                <label className="TipoDedicacion">Dedicaicon Laboral</label>
                <input className="form-control  "
                name="DedicacionLaboral"
                id="DedicacionLaboral"
                value={this.state.DedicacionLaboral}

                onChange={event => this.valueToState(event.target)}/>
                    
                    
                    
                    
                
                </div>

                <div className="form-group col-3">
                <label className="TipoDedicacion">Actividad Laboral</label>
                <input className="form-control  "
                name="ActividadLaboral"
                id="ActividadLaboral"
                value={this.state.ActividadLaboral}

                onChange={event => this.valueToState(event.target)}/>
                    
                </div>
                
                </div>
                <div className="form-group row ">
                <div className="form-group col-3">
                <label className="ActividadLaboral">Categoria</label>
                <input className="form-control  "
                name="Categoria"
                id="Categoria"
                value={this.state.Categoria}

                onChange={event => this.valueToState(event.target)}/>
                   
                </div>
                
                </div>
                
                
                <div className="form-group row card border-dark ">
                
                <div className="form-group row p-3 ">
                    <div className="form-group col-3">
                <label className="CondicionLaboral">Condicion Laboral</label>
                <input className="form-control  "
                name="CondicionLaboral"
                id="CondicionLaboral"
                value={this.state.CondicionLaboral}

                onChange={event => this.valueToState(event.target)}/>
                    
                
                </div>
                
                </div>
                
                
                
                </div>
                </div>
                </div>

                <legend 
            className="text-center">Tipo de Persnal
            </legend>
            <div className="card mt-3 py-2 card border-dark ">
            <div className="card-body">
                <div className="form-group row">

                <div className="form-group col-5">
                <label className="TituloPreGrado-TSU">Comision de Servicio Desde</label>
                <input type="text"
                className="form-control "
                name="ComisionServicioDesde"
                    id="ComisionServicioDesde"
                    value={this.state.ComisionServicioDesde}
                     
                    
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>

                <div className="form-group col-5">
                <label className="TituloPreGrado-TSU">Comision de Servicio Hasta</label>
                <input type="text"
                className="form-control "
                name="ComisionServicioHasta"
                    id="ComisionServicioHasta"  
                    value={this.state.ComisionServicioHasta}
                   
                    
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>
                
                <div className="form-group col-5">
                <label className="TituloPreGrado-TSU">Permiso NR Desde</label>
                <input type="text"
                className="form-control "
                name="PermisoNRDesde"
                    id="PermisoNRDesde" 
                    value={this.state.PermisoNRDesde}
                    
                    
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>

                <div className="form-group col-5">
                <label className="TituloPreGrado-TSU">Permiso NR Hasta</label>
                <input type="text"
                className="form-control "
                name="PermisoNRHasta"
                    id="PermisoNRHasta"  
                    value={this.state.PermisoNRHasta}
                  
                    
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
                value={this.state.Nucleo}

                onChange={event => this.valueToState(event.target)}/>
                </div>

                <div className="form-group col-3">
                <label className="SueldoTabla">Codigo de Cargo
                </label>
                <input type="text"
                className="form-control "
                name="CodigoCargo"
                id="codigoCargo" 
                value={this.state.CodigoCargo}

                onChange={event => this.valueToState(event.target)}/>
                </div>

                <div className="form-group col-3">
                <label className="SueldoTabla">Prog
                </label>
                <input type="text"
                className="form-control "
                name="Prog"
                id="prog" 
                value={this.state.Prog}

                onChange={event => this.valueToState(event.target)}/>
                </div>
                
                <div className="form-group col-3">
                <label className="SueldoTabla">ACC
                </label>
                <input type="text"
                className="form-control "
                name="ACC"
                id="ACC" 
                value={this.state.ACC}

                onChange={event => this.valueToState(event.target)}/>
                </div>
                <div className="form-group col-3">
                <label className="SueldoTabla">SubACC
                </label>
                <input type="text"
                className="form-control "
                name="SubACC"
                id="SubACC" 
                value={this.state.SubACC}

                onChange={event => this.valueToState(event.target)}/>
                </div>

                <div className="form-group col-3">
                <label className="SueldoTabla">Tarea
                </label>
                <input type="text"
                className="form-control "
                name="Tarea"
                id="Tarea" 
                value={this.state.Tarea}

                onChange={event => this.valueToState(event.target)}/>
                </div>
                </div>
                
                
                <div className="form-group row card border-dark ">
                
                <div className="form-group row p-3 ">
                    <div className="form-group col-8">
                <label className="CondicionLaboral">Detalle</label>
                
      <textarea className="form-control" 
      id="Detalle" 
      name="Detalle"
       rows="6" 
       value={this.state.Detalle}

      onChange={event => this.valueToState(event.target)}></textarea>
               
                
                </div>
                
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
