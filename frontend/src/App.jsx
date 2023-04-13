import CreateUser from './components/CreateUser';
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UsersList from './components/UsersList';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<UsersList />}/>
          <Route path="/create-user" element={<CreateUser />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App
