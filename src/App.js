import "./App.css";

import { ListUsers } from "./components/ListUsers";
import { UserForm } from "./components/UserForm";
import { Navigation } from "./components/Navigation";
import { EditUser } from "./components/EditUser";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import useMessage from "./hooks/useMessage";
import AppContext from "./context/AppContext";

function App() {
  const message=useMessage();
  return (
    <AppContext.Provider value={message}>
    <Router>
      <Navigation />
      <Routes>
      <Route exact path="/" element={<ListUsers />} />
        <Route exact path="/:registrado" element={<ListUsers />} />
        <Route exact path="/create" element={<UserForm />} />
        <Route exact path="/edit/:id" element={<EditUser />} />
      </Routes>
      
    </Router>
    </AppContext.Provider>
  );
}

export default App;
