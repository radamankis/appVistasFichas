import React,{Component} from 'react';
import axios from 'axios';
import Tabla2 from './tabla2'


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
        
                
                <div className='container'>
                    <Tabla2 users={this.state.users}/>
                    </div>
                </div> 
                </div>
            );
        }
        
               
        
}


export default ListarEmpleados;
