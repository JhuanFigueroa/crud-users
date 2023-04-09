import React from 'react';
import axios from 'axios';
import { useRef } from 'react';
import '../css/UserForm.css'
import { useNavigate } from 'react-router-dom';

import AppContext from '../context/AppContext';

function UserForm(){

    const {addMessage}=React.useContext(AppContext);

    let navigate = useNavigate();

    const baseURL='https://crudbackend-production-5f61.up.railway.app/api/users/create';

    const form=useRef(null);

    
    const agregarUsuario= async(e)=>{
        e.preventDefault();
      const data= new FormData(form.current);

       const res= await axios.post(baseURL,{
        name:data.get('name'),
        last_name:data.get('last_name'),
        email:data.get('email'),
        phone:data.get('phone')
       });
       
       addMessage('Usuario registrado!!');

       navigate(`/`);

    }

   
    return(

        <div className="contenedor">
            <form className='form-crear' onSubmit={agregarUsuario} ref={form}>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" 
             />

            <label htmlFor="last_name">Last Name:</label>
            <input type="text" name="last_name" 
            />

            <label htmlFor="email">Email:</label>
            <input type="email" name="email" 
             />

            <label htmlFor="phone">Phone:</label>
            <input type="text" name="phone"
            />

            <button type='submit'>Agregar</button>
        </form>
        </div>

    );
}

export {UserForm};