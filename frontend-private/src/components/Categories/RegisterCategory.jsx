import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify'; // Asegúrate de tener react-toastify instalado
import api from '../../api/api'; // Importa la configuración de la API

const RegisterCategory = () => {
    // Inicializa el formulario con react-hook-form
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Función para manejar el envío del formulario
    const onSubmit = async (data) => {
        try {
            // Realiza la llamada a la API para registrar la nueva categoría
            const response = await api.post('/categories', data);
            // Muestra un mensaje de éxito
            toast.success('Categoría registrada con éxito!');
            // Limpia el formulario después de un registro exitoso
            console.log(response.data);
        } catch (error) {
            // Muestra un mensaje de error en caso de fallo
            toast.error('Error al registrar la categoría. Inténtalo de nuevo.');
            console.error(error);
        }
    };

    return (
        <div className="register-category">
            <h2>Registrar Nueva Categoría</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Nombre de la Categoría</label>
                    <input
                        id="name"
                        type="text"
                        {...register('name', { required: 'Este campo es obligatorio' })}
                    />
                    {errors.name && <span>{errors.name.message}</span>}
                </div>
                <div>
                    <label htmlFor="description">Descripción</label>
                    <textarea
                        id="description"
                        {...register('description', { required: 'Este campo es obligatorio' })}
                    />
                    {errors.description && <span>{errors.description.message}</span>}
                </div>
                <button type="submit">Registrar Categoría</button>
            </form>
        </div>
    );
};

export default RegisterCategory;