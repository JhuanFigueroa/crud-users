import React from 'react';
import axios from 'axios';

import AppContext from '../context/AppContext';

function Alert(props){
    const baseURL = "https://crudbackend-production-5f61.up.railway.app/api/users/delete/";

    const {addMessage}=React.useContext(AppContext);

    const deleteUser=async ()=>{
        const res= await axios.delete(baseURL+props.id);
        console.log(res);
        
        console.log('eliminado '+props.user);
        props.setOpenModal(false);
        props.setMostrar(true);
        addMessage('Usuario Eliminado!');
    }

    const cancelar=()=>{
        props.setOpenModal(false);
        console.log('cancelando');
    }

    return(
        <div>
            <p>¿Seguro de eliminar a {props.user}?</p>
            <button
            onClick={deleteUser}
            >Si</button>
            <button
            onClick={cancelar}>No</button>
        </div>
    );

}

export {Alert};