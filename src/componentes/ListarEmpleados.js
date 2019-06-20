import React,{Component} from 'react';
import axios from 'axios';


class ListarEmpleados extends Component {

state = {
    users:[],
    datos:[],
    Cedula:''


    }

componentDidMount() {
    axios.get('/users/buscar/Empleado')
    .then( res=>{
        console.log(res)
        this.setState({users: res.data.data,
        Cedula:res.data.data[0].username})
    })

    axios.get('/datospersonal')
    .then( res=>{
        console.log(res)
        this.setState({datos: res.data})
    })
  }

  
     

     
 

  render(){
                  
            return(
                <div><h2 className="card-title text-center mb-5">Sistema de Administracion de Personal
           </h2>
               
                <div>
        
                <h1 >PRUEBA</h1>
                     <ul>   
                        {this.state.datos.map( dato => 
                            <li key={dato.idDatoPersonal}>{dato.Nombre } - {dato.Apellido} - {dato.Cedula}</li>)}
                        </ul>
                </div> 
                </div>
            );
        }
        
               
        
}


export default ListarEmpleados;
