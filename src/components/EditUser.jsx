import React from 'react';
import axios from 'axios';

import '../css/UserForm.css'

import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import AppContext from '../context/AppContext';

function EditUser(){

    const {addMessage}=React.useContext(AppContext);

    let navigate=useNavigate();

    const {id}=useParams();

    const baseURL='http://127.0.0.1:8000/api/users';
    
    const [name,setName]=React.useState('');
    const [last_name,setLastName]=React.useState('');
    const [email,setEmail]=React.useState('');
    const [phone,setPhone]=React.useState('');

    const getUser= async ()=>{
        const res= await axios.get(baseURL+'/detail/'+id);
        console.log(res.data);
        setName(res.data.name);
        setLastName(res.data.last_name);
        setEmail(res.data.email);
        setPhone(res.data.phone);
    }

    React.useEffect(() => {
        getUser();
      }, []);

    const actualizarUsuario= async(e)=>{
        e.preventDefault();
       const res= await axios.put(baseURL+'/update/'+id,{
        name:name,
        last_name:last_name,
        email:email,
        phone:phone
       }
       );      

       addMessage('Usuario editado');
       navigate(`/`);
    }

    const onChangeName=(e)=>{
        setName(e.target.value);
    }
    const onLastNameChange=(e)=>{
        setLastName(e.target.value);
    }

    const onEmailChange=(e)=>{
        setEmail(e.target.value);
    }

    const onPhoneChange=(e)=>{
        setPhone(e.target.value);
    }

    return(

        <div className="contenedor">
            <form className='form-crear' onSubmit={actualizarUsuario}>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" 
            onChange={onChangeName} value={name} />

            <label htmlFor="last_name">Last Name:</label>
            <input type="text" name="last_name" 
            onChange={onLastNameChange} value={last_name}/>

            <label htmlFor="email">Email:</label>
            <input type="email" name="email" 
            onChange={onEmailChange} value={email} />

            <label htmlFor="phone">Phone:</label>
            <input type="text" name="phone"
            onChange={onPhoneChange} value={phone}/>

            <button type='submit'>Actualizar</button>
        </form>
        </div>
        

    );
}

export {EditUser};