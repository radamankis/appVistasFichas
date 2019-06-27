import React,{Component} from 'react';
import axios from 'axios';

export default class PerfilFormacion extends Component   {
    
    state={ 
            
            username:this.props.username,
        GradoInstitucion:'',
        TituloPregrado:'',
        UniversidadPre:'',
        TituloPostgrado:'',
        UniversidadPostgrado:'',
        NivelPostgrado:''
        
        };

        valueToState = ({ name, value, checked, type }) => {
            this.setState(() => {
              return { [name]: type === "checkbox" ? checked : value };
            });
          };


            
          async    componentWillMount  ( nextProps, nextState){
               
            const res2= await axios.get (`/datospersonal/buscar/${this.state.username}`)
            const bremu=res2.data.data[0].idDatoPersonal;
                const res= await axios.get (`/formacion/${bremu}`)
                
                const postgrado= await axios.get(`/postgrado/${bremu}`)

                    console.log(res.data.data[0])
                    
                   
                    
                    this.setState({ 
                        GradoInstitucion: res.data.data[0].GradoInstitucion,
                        TituloPregrado: res.data.data[0].TituloPregrado,
                        UniversidadPre: res.data.data[0].UniversidadPre,
                        TituloPostgrado: postgrado.data.data[0].TituloPostgrado,
                        UniversidadPostgrado: postgrado.data.data[0].UniversidadPostgrado,
                        NivelPostgrado: postgrado.data.data[0].NivelPostgrado
                        
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
            className="text-center">Formacion Academica
            </legend>
            <div className="card mt-3 py-2 card border-dark mb-3">
            <div className="card-body">
                <div className="form-group row">

                <div className="form-group col-4">
                <label className="Nombre">GradoInstitucion
                </label>
                <input type="text"
                className="form-control "
                    name="GradoInstitucion"
                    id="GradoInstitucion" 
                    
                    
                    value={this.state.GradoInstitucion}
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>

                <div className="form-group col-4 ">
                <label className="Apellido">Titulo Pregrado
                </label>
                
                <input type="text"
                className="form-control"
                    id="TituloPregrado"
                    name="TituloPregrado" 
                    
                    value={this.state.TituloPregrado}
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>
                
                
                
                </div>
                <div className="form-group row ">
                <div className="form-group col-3 mr-5 ">
                <label className="Cedula">Universidad Pre
                </label>
                <input type="text"
                className="form-control "
                    id="UniversidadPre"
                    name="UniversidadPre" 
                    
                   
                    value={this.state.UniversidadPre}
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>

                <div className="form-group col-3">
                <label className="fechaDeNacimiento">Titulo Postgrado</label>
                <input type="text" 
                className="form-control " 
                name="TituloPostgrado" 
                value={ this.state.TituloPostgrado}
                onChange={event => this.valueToState(event.target)}/>
                </div>
                <div className="form-group col-4">
                <label className="Nacionalidad">Universidad Postgrado
                </label>
                <input type="text"
                className="form-control "
                    id="UniversidadPostgrado"
                    name="UniversidadPostgrado" 
                    
                    value={this.state.UniversidadPostgrado}
                    onChange={event => this.valueToState(event.target)}/>
                
                </div>  
                </div>
                <div className="form-group col-3">
                <label className="Nacionalidad">Nivel Postgrado
                </label>
                <input type="text"
                className="form-control "
                    id="NivelPostgrado"
                    name="NivelPostgrado" 
                    
                    value={this.state.NivelPostgrado}
                    onChange={event => this.valueToState(event.target)}/>
                
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
