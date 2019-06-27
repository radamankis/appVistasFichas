import React from 'react';
import EM from './EM'

const tabla2= ({users})=>(
        <div className="row">
            {users.map( user =>(
                    <EM  
                    key={user.idUsuario}
                    user={user}/>
            )

            )}
        </div>
    );


export default tabla2;