# 🎲 Random Users Web App

Aplicación web desarrollada con Node.js y Express que muestra una lista de usuarios aleatorios obtenidos desde la API de [Random User](https://randomuser.me/).

## 📋 Características

- 🚀 Servidor Express.js
- 🎨 Interfaz web moderna y responsiva
- 🔄 Carga dinámica de datos desde API externa
- ✅ Pruebas unitarias con Jest
- 📱 Diseño adaptable (responsive)
- 🎯 Cobertura de código

## 🛠️ Tecnologías Utilizadas

- **Backend:**
  - Node.js
  - Express.js
  - node-fetch

- **Frontend:**
  - HTML5
  - CSS3 (con animaciones)
  - JavaScript (Vanilla)

- **Testing:**
  - Jest
  - Supertest

## 📁 Estructura del Proyecto

```
clase-cf-actions/
├── src/
│   ├── api.js           # Lógica para consumir la API
│   └── routes.js        # Definición de rutas
├── public/
│   ├── index.html       # Página principal
│   ├── styles.css       # Estilos CSS
│   └── app.js           # JavaScript del cliente
├── tests/
│   ├── api.test.js      # Tests de la API
│   └── routes.test.js   # Tests de las rutas
├── server.js            # Servidor Express
├── package.json
└── README.md
```

## 🚀 Instalación

1. Clona el repositorio (o asegúrate de estar en el directorio del proyecto)

2. Instala las dependencias:
```bash
npm install
```

## 💻 Uso

### Modo Producción
```bash
npm start
```

### Modo Desarrollo (con hot-reload)
```bash
npm run dev
```

La aplicación estará disponible en: `http://localhost:3000`

## 🧪 Pruebas

### Ejecutar todas las pruebas
```bash
npm test
```

### Ejecutar pruebas en modo watch
```bash
npm run test:watch
```

Las pruebas incluyen:
- ✅ Tests de la función `getRandomUsers`
- ✅ Tests de las rutas HTTP
- ✅ Tests de manejo de errores
- ✅ Cobertura de código

## 📡 API Endpoints

### `GET /`
Sirve la página principal HTML

### `GET /api/users?count=10`
Retorna una lista de usuarios aleatorios
- **Parámetros:** 
  - `count` (opcional): número de usuarios (1-50, default: 10)
- **Respuesta:**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "name": "John Doe",
      "email": "john@example.com",
      "country": "USA",
      "city": "New York",
      "picture": "url",
      "phone": "123-456-7890"
    }
  ]
}
```

### `GET /health`
Endpoint de salud del servidor
- **Respuesta:**
```json
{
  "status": "ok",
  "timestamp": "2025-11-13T..."
}
```

## 🎨 Características de la Interfaz

- Diseño moderno con gradientes
- Cards animadas con hover effects
- Validación de entrada
- Mensajes de error amigables
- Loading states
- Responsive design para móviles

## 🔧 Configuración

El servidor usa el puerto configurado en la variable de entorno `PORT` o 3000 por defecto.

Para cambiar el puerto:
```bash
PORT=8080 npm start
```

## 📝 Scripts Disponibles

- `npm start` - Inicia el servidor
- `npm run dev` - Inicia en modo desarrollo con nodemon
- `npm test` - Ejecuta las pruebas con cobertura
- `npm run test:watch` - Ejecuta las pruebas en modo watch

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 🙏 Agradecimientos

- [Random User API](https://randomuser.me/) por proporcionar los datos de usuarios aleatorios
- Express.js por el framework web
- Jest por el framework de testing

## 📞 Soporte

Si tienes alguna pregunta o problema, por favor abre un issue en el repositorio.

---

Desarrollado con ❤️ usando Node.js
