import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth'; // Proveedor de contexto para autenticación
import ProtectedRoute from './components/ProtectedRoute'; // Componente para rutas protegidas
import Dashboard from './pages/Dashboard'; // Página principal del dashboard
import Login from './pages/Auth/Login'; // Página de inicio de sesión
import Register from './pages/Auth/Register'; // Página de registro
import ForgotPassword from './pages/Auth/ForgotPassword'; // Página para recuperar contraseña
import ResetToken from './pages/Auth/ResetToken'; // Página para ingresar el token de recuperación
import NewPassword from './pages/Auth/NewPassword'; // Página para establecer nueva contraseña
import Brands from './pages/Brands'; // Página de gestión de marcas
import Categories from './pages/Categories'; // Página de gestión de categorías
import Employees from './pages/Employees'; // Página de gestión de empleados
import Models from './pages/Models'; // Página de gestión de modelos
import Vehicles from './pages/Vehicles'; // Página de gestión de vehículos
import Clients from './pages/Clients'; // Página de gestión de clientes
import Services from './pages/Services'; // Página de gestión de servicios
import SpareParts from './pages/SpareParts'; // Página de gestión de repuestos
import Landing from './pages/Landing/Landing'; // Página de aterrizaje pública

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          {/* Ruta pública para la página de aterrizaje */}
          <Route exact path="/" component={Landing} />
          {/* Rutas de autenticación */}
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/reset-token" component={ResetToken} />
          <Route path="/new-password" component={NewPassword} />
          {/* Rutas protegidas para el dashboard y gestión de módulos */}
          <ProtectedRoute path="/dashboard" component={Dashboard} />
          <ProtectedRoute path="/brands" component={Brands} />
          <ProtectedRoute path="/categories" component={Categories} />
          <ProtectedRoute path="/employees" component={Employees} />
          <ProtectedRoute path="/models" component={Models} />
          <ProtectedRoute path="/vehicles" component={Vehicles} />
          <ProtectedRoute path="/clients" component={Clients} />
          <ProtectedRoute path="/services" component={Services} />
          <ProtectedRoute path="/spare-parts" component={SpareParts} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;