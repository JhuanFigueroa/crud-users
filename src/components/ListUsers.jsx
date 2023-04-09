import React from "react";
import axios from "axios";
import { Alert } from "./Alert";
import { Message } from "./Message";
import "../css/ListUsers.css";
import { Link } from "react-router-dom";

import AppContext from "../context/AppContext";

function ListUsers(props) {
  const baseURL = "https://crudbackend-production-5f61.up.railway.app/api/users";

  const{state}=React.useContext(AppContext);
 
  const message=state.message;

  const [user, setUser] = React.useState("");
  const [id, setId] = React.useState("");
  const [users, setUsers] = React.useState([]);
  const [openModal, setOpenModal] = React.useState(false);
  const [mostrar, setMostrar] = React.useState(false);

  const getUsers = async () => {
    const res = await axios.get(baseURL);
    let usersList = res.data;
    console.log(usersList);
    setUsers(usersList);
    
  };

  if ({ mostrar }) {
    getUsers();
    
  }

  /*const deleteUser=async (id)=>{
        const res= await axios.delete(baseURL+'/delete/'+id);
        console.log(res);
        getUsers();
    }*/

  const mostrarAlerta = (user, id) => {
    setOpenModal(true);
    setId(id);
    setUser(user);
  };
  
  React.useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="contenedor">
      <h2>Lista de usuarios</h2>

    {!!message &&(
        <Message message={message}/>
    )}
      
      {users.map((user) => (
        <li className="userName" key={user.id}>
          {user.name} {user.last_name}
          <section className="botones">
            <Link to={`/edit/${user.id}`}>E</Link>
            <button
              type="button"
              onClick={() =>
                mostrarAlerta(user.name + " " + user.last_name, user.id)
              }
            >
              D
            </button>
          </section>
        </li>
      ))}

      {!!openModal && (
        <Alert
          id={id}
          user={user}
          setOpenModal={setOpenModal}
          setMostrar={setMostrar}
        ></Alert>
      )}
    </div>
  );
}

export { ListUsers };
