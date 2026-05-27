import React from 'react';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../hooks/useAuth'; // Importamos el contexto de autenticación
import axios from 'axios'; // Importamos Axios para las llamadas a la API
import Toast from '../Toast'; // Importamos el componente de Toast para notificaciones

const RegisterEmployee = () => {
    const { register, handleSubmit, formState: { errors } } = useForm(); // Inicializamos react-hook-form
    const { user } = useContext(AuthContext); // Obtenemos el usuario del contexto de autenticación
    const [toast, setToast] = React.useState({ message: '', type: '' }); // Estado para las notificaciones

    // Función para manejar el envío del formulario
    const onSubmit = async (data) => {
        try {
            // Realizamos la llamada a la API para registrar un nuevo empleado
            const response = await axios.post('/api/employees', data, {
                headers: {
                    Authorization: `Bearer ${user.token}` // Enviamos el token de autenticación
                }
            });
            // Si la respuesta es exitosa, mostramos un mensaje de éxito
            setToast({ message: 'Empleado registrado exitosamente', type: 'success' });
        } catch (error) {
            // Si hay un error, mostramos un mensaje de error
            setToast({ message: error.response.data.message || 'Error al registrar el empleado', type: 'error' });
        }
    };

    return (
        <div className="register-employee">
            <h2>Registrar Empleado</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input
                        id="name"
                        {...register('name', { required: 'El nombre es obligatorio' })} // Validación de campo requerido
                    />
                    {errors.name && <span>{errors.name.message}</span>} {/* Mensaje de error */}
                </div>
                <div>
                    <label htmlFor="email">Correo Electrónico</label>
                    <input
                        id="email"
                        type="email"
                        {...register('email', { 
                            required: 'El correo es obligatorio', 
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: 'Formato de correo inválido'
                            }
                        })} // Validación de formato de correo
                    />
                    {errors.email && <span>{errors.email.message}</span>} {/* Mensaje de error */}
                </div>
                <div>
                    <label htmlFor="position">Cargo</label>
                    <input
                        id="position"
                        {...register('position', { required: 'El cargo es obligatorio' })} // Validación de campo requerido
                    />
                    {errors.position && <span>{errors.position.message}</span>} {/* Mensaje de error */}
                </div>
                <button type="submit">Registrar</button>
            </form>
            {toast.message && <Toast message={toast.message} type={toast.type} />} {/* Componente de Toast para notificaciones */}
        </div>
    );
};

export default RegisterEmployee;