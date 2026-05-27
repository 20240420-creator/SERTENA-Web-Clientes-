import { createContext, useContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';

// Creamos el contexto de autenticación
const AuthContext = createContext();

// Proveedor del contexto de autenticación
export const AuthProvider = ({ children }) => {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Función para iniciar sesión
    const login = async (email, password) => {
        try {
            const response = await axios.post('/api/login', { email, password });
            setCookie('token', response.data.token, { path: '/' });
            setUser(response.data.user);
        } catch (error) {
            throw new Error('Error al iniciar sesión');
        }
    };

    // Función para cerrar sesión
    const logout = () => {
        removeCookie('token', { path: '/' });
        setUser(null);
    };

    // Función para verificar si el usuario está autenticado
    const isAuthenticated = () => {
        return !!cookies.token;
    };

    // Efecto para cargar el usuario al iniciar
    useEffect(() => {
        const fetchUser = async () => {
            if (isAuthenticated()) {
                try {
                    const response = await axios.get('/api/user', {
                        headers: {
                            Authorization: `Bearer ${cookies.token}`,
                        },
                    });
                    setUser(response.data);
                } catch (error) {
                    logout();
                }
            }
            setLoading(false);
        };

        fetchUser();
    }, [cookies.token]);

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook para usar el contexto de autenticación
export const useAuth = () => {
    return useContext(AuthContext);
};