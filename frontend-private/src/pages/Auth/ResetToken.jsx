import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Toast from '../../components/Toast';

const ResetToken = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { verifyToken } = useAuth();
    const history = useHistory();
    const [toast, setToast] = React.useState({ message: '', type: '' });

    // Función para manejar el envío del formulario
    const onSubmit = async (data) => {
        try {
            // Llamada a la función de verificación del token
            await verifyToken(data.token);
            setToast({ message: 'Token verificado con éxito.', type: 'success' });
            // Redirigir a la página de establecer nueva contraseña
            history.push('/auth/new-password');
        } catch (error) {
            // Manejo de errores en caso de que la verificación falle
            setToast({ message: 'Error al verificar el token. Intente nuevamente.', type: 'error' });
        }
    };

    return (
        <div className="reset-token-container">
            <h2>Verificación de Token</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="token">Ingrese el token recibido:</label>
                    <input
                        type="text"
                        id="token"
                        {...register('token', { required: 'El token es obligatorio.' })}
                    />
                    {errors.token && <span className="error">{errors.token.message}</span>}
                </div>
                <button type="submit">Verificar Token</button>
            </form>
            {toast.message && <Toast message={toast.message} type={toast.type} />}
        </div>
    );
};

export default ResetToken;