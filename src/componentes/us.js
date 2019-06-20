import React from 'react'


const US= ({user}) =>{
    
    const {idUsuario, username,role}= user;

    const url= `http://localhost:3000/perfil`
    return (
        <div className="col card body ">
            <div className=" form-group">
                <h3>{idUsuario}</h3>
            </div>
            <div className=" form-group">
                <h3>{username}</h3>
            </div>
            <div className=" form-group">
                <h3>{role}</h3>
            </div>
            <div className="card form-group">
                <a href= {url} target="_blank" className=" btn">ver</a>
            </div>
        </div>
    )
}

export default US;