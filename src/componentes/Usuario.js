import React,{Component} from 'react';


class Usuario extends Component {

state = {
    users:[]

    };

componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }


  render(){
                  
            return(
               
                <div>
        
                <h1 >PRUEBA</h1>
                     <ul>   
                        {this.state.users.map( user => 
                            <li key={user.id}>{user.username}</li>)}
                        </ul>
                </div> 
            );
        }
        
               
        
}

export default Usuario;
