import { useState } from "react";

const CreateUser = () => {
    const user_model = {
        name: "",
        lastname: "",
        age: 18,
        phone: "",
        email: ""
    }
    const [user, setUser] = useState(user_model);

    const handle_data = (e) => {
        const { name, value } = e.target;
        setUser({...user, [name]: value})
    }

    const handle_submit = async (e) => {
        e.preventDefault();
        
        /*************** POST ***************/

        await fetch('http://localhost:4000/api/users', {
            method: 'POST',
            body: JSON.stringify({
                name: user.name,
                lastname: user.lastname,
                age: user.age,
                phone: user.phone,
                email: user.email,
            }),
            headers: {'Content-type': 'application/json'}
        });        
    }

    return (
        <>
            <div className="container mx-auto">
                <h2 className="text-center py-10">Crear Usuario</h2>
                <div className="w-2/4 mx-auto py-10 px-10 bg-form">
                    <form onSubmit={handle_submit}>
                        <div className="flex flex-col pt-10">
                            <label htmlFor="name">Nombre</label>
                            <input 
                                type="text" 
                                name="name" 
                                id="name" 
                                placeholder="Escriba su nombre"
                                value={user.name}
                                onChange={handle_data}
                                required
                            />
                        </div>
                        <div className="flex flex-col pt-10">
                            <label htmlFor="name">Apellido</label>
                            <input 
                                type="text" 
                                name="lastname" 
                                id="lastname" 
                                placeholder="Escriba su apellido"
                                value={user.lastname}
                                onChange={handle_data}
                                required
                            />
                        </div>
                        <div className="flex flex-col pt-10">
                            <label htmlFor="name">Edad</label>
                            <input 
                                type="number" 
                                name="age" 
                                id="age" 
                                placeholder="Escriba su edad"
                                value={user.age}
                                onChange={handle_data}
                                required
                            />
                        </div>
                        <div className="flex flex-col pt-10">
                            <label htmlFor="name">Telefono</label>
                            <input 
                                type="text" 
                                name="phone" 
                                id="phono" 
                                placeholder="Escriba su número de telefono"
                                value={user.phone}
                                onChange={handle_data}
                                required
                            />
                        </div>
                        <div className="flex flex-col pt-10">
                            <label htmlFor="name">Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                placeholder="Escriba su número de telefono"
                                value={user.email}
                                onChange={handle_data}
                                required
                            />
                        </div>
                        <button type="submit" className="mt-10 bg-header p-5">Crear Usuario</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CreateUser;