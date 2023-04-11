import CreateUser from './components/CreateUser';
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom';
import UsersList from './components/UsersList';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<UsersList />}/>
        <Route path="/create-user" element={<CreateUser />}/>
      </Routes>
      <h1>Hola mundooo</h1>
    </>
  );
};

export default App
