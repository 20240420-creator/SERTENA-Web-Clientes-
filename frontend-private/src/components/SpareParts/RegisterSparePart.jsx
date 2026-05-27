import React from 'react';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../hooks/useAuth';
import api from '../../api/api'; // Importamos la configuración de Axios
import Toast from '../Toast'; // Importamos el componente de notificaciones

const RegisterSparePart = () => {
    // Usamos el contexto de autenticación para obtener el token
    const { token } = useContext(AuthContext);
    
    // Inicializamos el formulario con react-hook-form
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Función para manejar el envío del formulario
    const onSubmit = async (data) => {
        try {
            // Realizamos la llamada a la API para registrar la nueva pieza de repuesto
            const response = await api.post('/spare-parts', data, {
                headers: {
                    Authorization: `Bearer ${token}` // Enviamos el token de autenticación
                }
            });
            // Si la respuesta es exitosa, mostramos un mensaje de éxito
            Toast.show({ message: 'Pieza de repuesto registrada con éxito', type: 'success' });
        } catch (error) {
            // Si hay un error, mostramos un mensaje de error
            Toast.show({ message: 'Error al registrar la pieza de repuesto', type: 'error' });
        }
    };

    return (
        <div className="register-spare-part">
            <h2>Registrar Nueva Pieza de Repuesto</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        {...register('name', { required: 'Este campo es obligatorio' })}
                    />
                    {errors.name && <span>{errors.name.message}</span>}
                </div>
                <div>
                    <label htmlFor="description">Descripción:</label>
                    <textarea
                        id="description"
                        {...register('description', { required: 'Este campo es obligatorio' })}
                    />
                    {errors.description && <span>{errors.description.message}</span>}
                </div>
                <div>
                    <label htmlFor="price">Precio:</label>
                    <input
                        type="number"
                        id="price"
                        {...register('price', { required: 'Este campo es obligatorio', min: { value: 0, message: 'El precio debe ser mayor o igual a 0' } })}
                    />
                    {errors.price && <span>{errors.price.message}</span>}
                </div>
                <button type="submit">Registrar Pieza de Repuesto</button>
            </form>
        </div>
    );
};

export default RegisterSparePart;