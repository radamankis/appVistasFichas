
import React,{Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Perfil from './Perfil';
import PerfilFomacion from './PerfilFromacion'
import PerfilTipo from './PerfilTipo'
import PerfilCargo from './PerfilCargo'


export default class EM extends Component {
    constructor(props) {
        super(props);
            this.state={
            user: this.props.user,
            modal: false
            
        };

        this.toggle = this.toggle.bind(this);
    }
        toggle() {
          
            this.setState(prevState => ({
              modal: !prevState.modal
             
            }));
          }

    render() {
        return (
            <div className="col card body  ">
            
            <div className=" form-group">
                <h3>{this.state.user.username}</h3>
            </div>
            <div className=" form-group">
                <h3>{this.state.user.role}</h3>
            </div>
            <div className="card form-group">
            <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel} Ver</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} size= 'lg'>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
              
              {<Perfil username= {this.state.user.username}/>}
              {<PerfilFomacion username= {this.state.user.username}/>}
              {<PerfilTipo username= {this.state.user.username}/>}
              {<PerfilCargo username= {this.state.user.username}/>}
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



//         <div className="col card body ">
            
//             <div className=" form-group">
//                 <h3>{username}</h3>
//             </div>
//             <div className=" form-group">
//                 <h3>{role}</h3>
//             </div>
//             <div className="card form-group">
//             <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
//           <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
//           <ModalBody>
//               {this.state.mensaje}
//           </ModalBody>
//           <ModalFooter>
//             <Button color="primary" onClick={this.toggle}>OK</Button>
            
//           </ModalFooter>
//         </Modal>
//             </div>
//         </div>
//     )
// }

// export default US;