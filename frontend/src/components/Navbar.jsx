import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <header className="container m-auto py-8">
                <nav className="flex justify-end">
                    <Link to="/" className="text-lg pe-10 text-primary-color font-medium">Lista de usuarios</Link>
                    <Link to="/create-user" className="text-lg text-primary-color font-medium">Crear Usuario</Link>
                </nav>
            </header>
        </>
    );
};

export default Navbar;