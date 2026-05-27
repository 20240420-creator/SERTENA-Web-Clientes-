import React from 'react';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../hooks/useAuth';
import Toast from '../Toast'; // Componente para mostrar notificaciones
import api from '../../api/api'; // Importamos la configuración de la API

const RegisterModel = () => {
    // Usamos el contexto de autenticación para manejar el estado del usuario
    const { user } = useContext(AuthContext);
    
    // Inicializamos el formulario con react-hook-form
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Función para manejar el envío del formulario
    const onSubmit = async (data) => {
        try {
            // Realizamos la llamada a la API para registrar un nuevo modelo
            const response = await api.post('/models', data);
            // Si la respuesta es exitosa, mostramos un mensaje de éxito
            Toast.show({ message: 'Modelo registrado exitosamente', type: 'success' });
        } catch (error) {
            // Si hay un error, mostramos un mensaje de error
            Toast.show({ message: 'Error al registrar el modelo', type: 'error' });
        }
    };

    return (
        <div className="register-model">
            <h2>Registrar Nuevo Modelo</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Nombre del Modelo</label>
                    <input
                        id="name"
                        type="text"
                        {...register('name', { required: 'Este campo es obligatorio' })}
                    />
                    {errors.name && <span>{errors.name.message}</span>}
                </div>
                <div>
                    <label htmlFor="brand">Marca</label>
                    <input
                        id="brand"
                        type="text"
                        {...register('brand', { required: 'Este campo es obligatorio' })}
                    />
                    {errors.brand && <span>{errors.brand.message}</span>}
                </div>
                <div>
                    <label htmlFor="year">Año</label>
                    <input
                        id="year"
                        type="number"
                        {...register('year', { required: 'Este campo es obligatorio', min: { value: 1886, message: 'El año debe ser mayor a 1886' } })}
                    />
                    {errors.year && <span>{errors.year.message}</span>}
                </div>
                <button type="submit">Registrar Modelo</button>
            </form>
        </div>
    );
};

export default RegisterModel;