import React,{Component} from 'react';
import axios from 'axios';

export default class Perfil extends Component   {
    
    state={ 
            busqueda: this.props.username,
            
            idUsuario:'',
            username:'',
            role:''
            
        };

        valueToState = ({ name, value, checked, type }) => {
            this.setState(() => {
              return { [name]: type === "checkbox" ? checked : value };
            });
          };


            
          async    componentWillMount  ( nextProps, nextState){
               console.log(this.state.busqueda)
                
                const res= await axios.get (`/user/${this.state.busqueda}`)
                
                    console.log(res.data.data)
                   
                    
                    this.setState({ 
                       username: res.data.data.username,
                        idUsuario: res.data.data.idUsuario,
                        role: res.data.data.role
                        
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
            <div><h2 className="card-title text-center mb-5">Sistema de Administracion de Personal
           </h2>
         <div className="form-group card border-dark  ">
   
            <div className="card mt-3  ">
            <div className="card-body ">
                <h2 className="card-title text-center mb-5">Datos del  Usuario
                </h2>
                {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
                <form >
                
            <fieldset>
            <legend 
            className="text-center">Datos de credenciales del Usuario
            </legend>
            <div className="card mt-3 py-2 card border-dark mb-3">
            <div className="card-body">
                <div className="form-group row">

                    <div className="form-group col-4">
                    <label className="id">ID
                    </label>
                    <input type="text"
                    className="form-control "
                        name="idUsuario"
                        id="idUsuario" 
                        aria-describedby="nombreHelp" 
                        
                        value={this.state.idUsuario}
                        onChange={event => this.valueToState(event.target)}/>
                    
                    </div>

                    <div className="form-group col-4 ">
                    <label className="username">Username
                    </label>
                    
                    <input type="text"
                    className="form-control"
                        id="username"
                        name="username" 
                        aria-describedby="username" 
                        
                        value={this.state.username}
                        onChange={event => this.valueToState(event.target)}/>
                    
                    </div>
                
                    <div className="form-group col-3 mr-5 ">
                    <label className="role">Role
                    </label>
                    <input type="text"
                    className="form-control "
                        id="role"
                        name="role" 
                        aria-describedby="role" 
                        
                        value={this.state.role}
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
