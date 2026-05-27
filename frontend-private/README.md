# Proyecto Expo SERTENA

Este proyecto es una aplicación desarrollada con React.js y Expo, orientada a la gestión de servicios técnicos industriales y residenciales. A continuación, se detallan las instrucciones para la configuración y uso de la aplicación.

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

```
expo-sertena-app
├── src
│   ├── api                # Configuración de Axios/Fetch y llamadas al backend
│   ├── assets             # Imágenes, logos e íconos locales
│   ├── components         # Componentes globales reutilizables
│   ├── hooks              # Custom Hooks globales o por módulo
│   ├── pages              # Pantallas completas
│   ├── App.css            # Estilos globales comunes
│   ├── App.jsx            # Enrutador principal
│   └── main.jsx           # Punto de entrada
├── package.json           # Configuración de npm
└── README.md              # Documentación del proyecto
```

## Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd expo-sertena-app
   ```

2. **Instalar dependencias:**
   Asegúrate de tener Node.js y npm instalados. Luego, ejecuta:
   ```bash
   npm install
   ```

3. **Iniciar la aplicación:**
   Para iniciar la aplicación en modo de desarrollo, ejecuta:
   ```bash
   npm start
   ```

## Funcionalidades

- **Autenticación de Usuarios:** Registro, inicio de sesión y recuperación de contraseñas.
- **Gestión de CRUDs:** Módulos para gestionar marcas, categorías, empleados, modelos, vehículos, clientes, servicios y repuestos.
- **Interfaz de Usuario Adaptable:** Diseño responsivo que se adapta a diferentes dispositivos.
- **Notificaciones:** Alertas visuales para confirmar acciones exitosas o errores.
- **Gráficas:** Visualización de métricas estadísticas en el panel administrativo.

## Tecnologías Utilizadas

- **React.js:** Biblioteca principal para la construcción de la interfaz de usuario.
- **React Router:** Para la gestión de rutas y navegación.
- **Axios:** Para realizar llamadas a la API.
- **React Hook Form:** Para la gestión de formularios y validaciones.
- **Context API:** Para el manejo del estado global de autenticación.
- **Recharts:** Para la visualización de gráficos.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva funcionalidad'`).
4. Envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

---

Para más información, consulta la documentación de cada módulo y componente dentro del proyecto.