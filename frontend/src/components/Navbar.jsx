import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <header className="bg-header py-8">
                <nav className="container mx-auto flex justify-end">
                    <Link to="/" className="text-lg pe-10 text-header-color font-medium">Lista de usuarios</Link>
                    <Link to="/create-user" className="text-lg text-header-color font-medium">Crear Usuario</Link>
                </nav>
            </header>
        </>
    );
};

export default Navbar;