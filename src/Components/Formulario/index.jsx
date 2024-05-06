import React, { useState } from 'react';
import "./style.css"


const Formulario = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        email: '',
        grade: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Aquí puedes añadir la función para enviar los datos a una base de datos o a algún servicio
    };

    return (
        <div>
            <h2>Formulario de Estudiante</h2>

            <div className="border-b border-gray-900/10 pb-12">
            </div>

            <form className="space-y-12" onSubmit={handleSubmit}>




                <div className="form border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Formulario de Estudiante</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">Agrege sus datos para tener su informacion .</p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Nombre</label>
                            <div className="mt-2">
                                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Apellido</label>
                            <div className="mt-2">
                                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                            </div>
                        </div>


                        <div className="sm:col-span-3">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Edad</label>
                            <div className="mt-2">
                                <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} required className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />

                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Correo</label>
                            <div className="mt-2">
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />

                            </div>
                        </div>
                        <div className="sm:col-span-0.5">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Nota del Curso</label>
                            <div className="mt-2">
                                <input type="number" id="grade" name="grade" min="0" max="5" step="0.1" value={formData.grade} onChange={handleChange} required className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />

                            </div>
                        </div>

                       

                        <button className='boton' type="submit">Guardar</button>


                    </div>
                </div>

            </form>
            
            
        </div>
        

    );
};

export default Formulario;