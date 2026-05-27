import React from 'react';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../hooks/useAuth';
import Toast from '../Toast'; // Componente para mostrar notificaciones
import api from '../../api/api'; // Importamos la configuración de API

const RegisterClient = () => {
    // Usamos el contexto de autenticación
    const { user } = useContext(AuthContext);
    
    // Inicializamos el formulario con react-hook-form
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Función para manejar el envío del formulario
    const onSubmit = async (data) => {
        try {
            // Realizamos la llamada a la API para registrar un nuevo cliente
            const response = await api.post('/clients', data, {
                headers: {
                    Authorization: `Bearer ${user.token}` // Enviamos el token de autenticación
                }
            });
            // Mostramos una notificación de éxito
            Toast({ message: 'Cliente registrado exitosamente', type: 'success' });
        } catch (error) {
            // Mostramos una notificación de error
            Toast({ message: error.response.data.message || 'Error al registrar el cliente', type: 'error' });
        }
    };

    return (
        <div className="register-client">
            <h2>Registrar Cliente</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Nombre:</label>
                    <input 
                        type="text" 
                        id="name" 
                        {...register('name', { required: 'El nombre es obligatorio' })} 
                    />
                    {errors.name && <span>{errors.name.message}</span>}
                </div>
                <div>
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input 
                        type="email" 
                        id="email" 
                        {...register('email', { 
                            required: 'El correo es obligatorio', 
                            pattern: { 
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
                                message: 'Formato de correo inválido' 
                            } 
                        })} 
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
                <div>
                    <label htmlFor="phone">Teléfono:</label>
                    <input 
                        type="text" 
                        id="phone" 
                        {...register('phone', { required: 'El teléfono es obligatorio' })} 
                    />
                    {errors.phone && <span>{errors.phone.message}</span>}
                </div>
                <button type="submit">Registrar Cliente</button>
            </form>
        </div>
    );
};

export default RegisterClient;