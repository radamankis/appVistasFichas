import React from 'react';
import US from './us'

const tabla= ({users})=>(
        <div className="row">
            {users.map( user =>(
                    <US  
                    key={user.idUsuario}
                    user={user}/>
            )

            )}
        </div>
    );


export default tabla;