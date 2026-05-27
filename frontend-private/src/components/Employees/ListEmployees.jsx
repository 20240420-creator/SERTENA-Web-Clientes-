import React, { useEffect, useState, useContext } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { AuthContext } from '../../hooks/useAuth';
import EmployeeCard from './EmployeeCard';
import Toast from '../Toast';

const ListEmployees = () => {
    // Estado para almacenar los empleados
    const [employees, setEmployees] = useState([]);
    // Estado para manejar errores
    const [error, setError] = useState(null);
    // Contexto de autenticación para manejar el token
    const { token } = useContext(AuthContext);
    // Hook personalizado para obtener datos
    const { fetchData } = useFetch();

    // Función para obtener la lista de empleados
    const getEmployees = async () => {
        try {
            const response = await fetchData('/api/employees', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            setEmployees(response.data); // Almacena los empleados en el estado
        } catch (err) {
            setError(err.message); // Manejo de errores
        }
    };

    // Efecto para cargar los empleados al montar el componente
    useEffect(() => {
        getEmployees();
    }, [fetchData, token]);

    return (
        <div className="list-employees">
            <h2>Lista de Empleados</h2>
            {error && <Toast message={error} type="error" />} {/* Muestra un toast en caso de error */}
            <div className="employee-cards">
                {employees.map(employee => (
                    <EmployeeCard key={employee.id} employee={employee} /> // Renderiza cada empleado
                ))}
            </div>
        </div>
    );
};

export default ListEmployees;