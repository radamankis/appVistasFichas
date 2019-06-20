import React,{Component, Fragment} from 'react';
import axios from 'axios';
import Tabla from './tabla'


class ListarUsuarios extends Component {

state = {
    users:[]

    }

componentDidMount() {
    axios.get('/users/buscar/USER')
    .then( res=>{
        console.log(res)
        this.setState({users: res.data.data})
    })
  }

  
     

     
 

  render(){
                  
            return(
               
                <Fragment>
                    
                       <h1>Sistema de Administracion de Personal</h1> 
                
                    <div className='container'>
                    <Tabla users={this.state.users}/>
                    </div>
                     {/* <ul>  
                        <div className=" row"> <div><p>User</p></div><div><p>User</p></div></div>
                        {this.state.users.map( user => 
                            <li key={user.idUsuario}>{user.username } - {user.role}</li>)}
                        </ul> */}
               
                </Fragment>
            );
        }
        
               
        
}


export default ListarUsuarios;
