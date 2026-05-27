import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../hooks/useAuth';
import { Toast } from '../../components/Toast';
import './Auth.css'; // Asegúrate de tener estilos para la página de autenticación

const Login = () => {
    // Desestructuramos el método de login del hook de autenticación
    const { login } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Función que maneja el envío del formulario
    const onSubmit = async (data) => {
        try {
            await login(data.email, data.password);
            // Aquí podrías redirigir al usuario a la página de dashboard o mostrar un mensaje de éxito
        } catch (error) {
            // Mostrar un mensaje de error en caso de fallo en el login
            Toast({ message: 'Error al iniciar sesión. Verifica tus credenciales.', type: 'error' });
        }
    };

    return (
        <div className="login-container">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input
                        type="email"
                        id="email"
                        {...register('email', { required: 'El correo es obligatorio', pattern: { value: /^\S+@\S+$/i, message: 'Formato de correo inválido' } })}
                    />
                    {errors.email && <span className="error-message">{errors.email.message}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        {...register('password', { required: 'La contraseña es obligatoria', minLength: { value: 6, message: 'La contraseña debe tener al menos 6 caracteres' } })}
                    />
                    {errors.password && <span className="error-message">{errors.password.message}</span>}
                </div>
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default Login;