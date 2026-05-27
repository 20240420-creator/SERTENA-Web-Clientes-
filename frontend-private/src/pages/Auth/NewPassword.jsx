import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Toast } from '../../components/Toast'; // Importamos el componente de Toast para mostrar mensajes
import { useAuth } from '../../hooks/useAuth'; // Importamos el hook de autenticación

const NewPassword = () => {
    const { register, handleSubmit, formState: { errors } } = useForm(); // Inicializamos react-hook-form
    const { resetPassword } = useAuth(); // Obtenemos la función para resetear la contraseña
    const history = useHistory(); // Usamos el hook de historia para redirigir

    // Función que se ejecuta al enviar el formulario
    const onSubmit = async (data) => {
        try {
            await resetPassword(data.password); // Llamamos a la función para resetear la contraseña
            Toast.success('Contraseña actualizada con éxito'); // Mostramos un mensaje de éxito
            history.push('/login'); // Redirigimos al usuario a la página de login
        } catch (error) {
            Toast.error('Error al actualizar la contraseña'); // Mostramos un mensaje de error
        }
    };

    return (
        <div className="new-password-container">
            <h2>Establecer Nueva Contraseña</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="password">Nueva Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        {...register('password', { 
                            required: 'La contraseña es obligatoria', 
                            minLength: { value: 6, message: 'La contraseña debe tener al menos 6 caracteres' } 
                        })}
                    />
                    {errors.password && <span>{errors.password.message}</span>} {/* Mostramos errores de validación */}
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
                    {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>} {/* Mostramos errores de validación */}
                </div>
                <button type="submit">Actualizar Contraseña</button>
            </form>
        </div>
    );
};

export default NewPassword;