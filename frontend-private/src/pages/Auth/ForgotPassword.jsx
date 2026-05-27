import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify'; // Asegúrate de tener react-toastify instalado
import api from '../../api/api'; // Importamos la configuración de API

const ForgotPassword = () => {
    const { register, handleSubmit, formState: { errors } } = useForm(); // Inicializamos react-hook-form
    const history = useHistory(); // Hook para manejar la navegación

    // Función para manejar el envío del formulario
    const onSubmit = async (data) => {
        try {
            // Llamada a la API para enviar el correo de recuperación
            await api.post('/auth/forgot-password', { email: data.email });
            toast.success('Se ha enviado un enlace de recuperación a tu correo.'); // Notificación de éxito
            history.push('/login'); // Redirigir al usuario a la página de login
        } catch (error) {
            // Manejo de errores
            toast.error('Error al enviar el enlace de recuperación.'); // Notificación de error
        }
    };

    return (
        <div className="forgot-password-container">
            <h2>Recuperar Contraseña</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="email">Correo Electrónico</label>
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
                    {errors.email && <span className="error">{errors.email.message}</span>} {/* Mensaje de error */}
                </div>
                <button type="submit">Enviar Enlace de Recuperación</button>
            </form>
        </div>
    );
};

export default ForgotPassword;