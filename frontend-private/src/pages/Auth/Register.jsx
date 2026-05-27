import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../hooks/useAuth';
import Toast from '../../components/Toast';
import './Register.css'; // Asegúrate de crear este archivo para los estilos específicos

const Register = () => {
    // Desestructuramos el método de registro del contexto de autenticación
    const { registerUser, errorMessage } = useAuth();
    
    // Inicializamos el formulario con react-hook-form
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Función que se ejecuta al enviar el formulario
    const onSubmit = async (data) => {
        // Llamamos a la función de registro con los datos del formulario
        await registerUser(data);
    };

    return (
        <div className="register-container">
            <h2>Registro de Usuario</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="email">Correo Electrónico</label>
                    <input
                        type="email"
                        id="email"
                        {...register('email', { 
                            required: 'El correo electrónico es obligatorio', 
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: 'Formato de correo electrónico inválido'
                            }
                        })}
                    />
                    {errors.email && <span className="error">{errors.email.message}</span>}
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        {...register('password', { 
                            required: 'La contraseña es obligatoria', 
                            minLength: {
                                value: 6,
                                message: 'La contraseña debe tener al menos 6 caracteres'
                            }
                        })}
                    />
                    {errors.password && <span className="error">{errors.password.message}</span>}
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        {...register('confirmPassword', { 
                            required: 'La confirmación de la contraseña es obligatoria', 
                            validate: (value) => value === watch('password') || 'Las contraseñas no coinciden'
                        })}
                    />
                    {errors.confirmPassword && <span className="error">{errors.confirmPassword.message}</span>}
                </div>
                <button type="submit">Registrar</button>
            </form>
            {errorMessage && <Toast message={errorMessage} type="error" />}
        </div>
    );
};

export default Register;