import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify'; // Asegúrate de tener react-toastify instalado
import api from '../../api/api'; // Importamos la configuración de la API

const RegisterVehicle = () => {
    // Usamos react-hook-form para manejar el formulario
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Función para manejar el envío del formulario
    const onSubmit = async (data) => {
        try {
            // Realizamos la llamada a la API para registrar el vehículo
            const response = await api.post('/vehicles', data);
            // Si la respuesta es exitosa, mostramos un mensaje de éxito
            toast.success('Vehículo registrado exitosamente!');
        } catch (error) {
            // Si hay un error, mostramos un mensaje de error
            toast.error('Error al registrar el vehículo. Inténtalo de nuevo.');
        }
    };

    return (
        <div className="register-vehicle">
            <h2>Registrar Vehículo</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="make">Marca</label>
                    <input
                        id="make"
                        type="text"
                        {...register('make', { required: 'La marca es obligatoria' })}
                    />
                    {errors.make && <span>{errors.make.message}</span>}
                </div>
                <div>
                    <label htmlFor="model">Modelo</label>
                    <input
                        id="model"
                        type="text"
                        {...register('model', { required: 'El modelo es obligatorio' })}
                    />
                    {errors.model && <span>{errors.model.message}</span>}
                </div>
                <div>
                    <label htmlFor="year">Año</label>
                    <input
                        id="year"
                        type="number"
                        {...register('year', { required: 'El año es obligatorio', min: { value: 1886, message: 'El año debe ser mayor a 1885' } })}
                    />
                    {errors.year && <span>{errors.year.message}</span>}
                </div>
                <div>
                    <label htmlFor="licensePlate">Placa</label>
                    <input
                        id="licensePlate"
                        type="text"
                        {...register('licensePlate', { required: 'La placa es obligatoria' })}
                    />
                    {errors.licensePlate && <span>{errors.licensePlate.message}</span>}
                </div>
                <button type="submit">Registrar Vehículo</button>
            </form>
        </div>
    );
};

export default RegisterVehicle;