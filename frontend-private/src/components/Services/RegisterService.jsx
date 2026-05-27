import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify'; // Asegúrate de tener react-toastify instalado
import api from '../../api/api'; // Importa la configuración de Axios

const RegisterService = () => {
    // Inicializa el formulario con react-hook-form
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Función para manejar el envío del formulario
    const onSubmit = async (data) => {
        try {
            // Realiza la llamada a la API para registrar el servicio
            const response = await api.post('/services', data);
            // Muestra un mensaje de éxito
            toast.success('Servicio registrado exitosamente');
            // Aquí puedes agregar lógica adicional, como redirigir al usuario
        } catch (error) {
            // Maneja errores y muestra un mensaje de error
            toast.error('Error al registrar el servicio: ' + error.response.data.message);
        }
    };

    return (
        <div className="register-service">
            <h2>Registrar Servicio</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Nombre del Servicio</label>
                    <input
                        id="name"
                        type="text"
                        {...register('name', { required: 'Este campo es obligatorio' })}
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                </div>
                <div>
                    <label htmlFor="description">Descripción</label>
                    <textarea
                        id="description"
                        {...register('description', { required: 'Este campo es obligatorio' })}
                    />
                    {errors.description && <p>{errors.description.message}</p>}
                </div>
                <div>
                    <label htmlFor="price">Precio</label>
                    <input
                        id="price"
                        type="number"
                        {...register('price', { required: 'Este campo es obligatorio', min: { value: 0, message: 'El precio debe ser mayor o igual a 0' } })}
                    />
                    {errors.price && <p>{errors.price.message}</p>}
                </div>
                <button type="submit">Registrar Servicio</button>
            </form>
        </div>
    );
};

export default RegisterService;