# Frontend React + Tailwind (Diseño Minimal)

Este proyecto es una SPA construida con React y Vite, usando TailwindCSS. Integra autenticación (login, registro, perfil) y un diseño visual sencillo, sobrio y no futurista.

## Características
- Rutas públicas y protegidas: `login`, `register`, `profile`.
- Estado de autenticación con contexto React.
- Consumo de API con Axios y token `Bearer`.
- Estilos minimalistas con tarjetas blancas, bordes grises y tipografía sobria.

## Requisitos
- Node.js 18+ y npm.

## Inicio Rápido
1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Ejecutar entorno de desarrollo:
   ```bash
   npm run dev
   ```
3. Abre `http://localhost:5174/`.

## Scripts
- `npm run dev`: servidor de desarrollo (Vite).
- `npm run build`: build de producción.
- `npm run preview`: vista previa del build.

## Estructura
```
src/
  features/
    auth/        # Login, Register, contexto y servicios
    profile/     # Página de perfil y hooks
  components/    # ProtectedRoute
  router.jsx     # Definición de rutas
  main.jsx       # Punto de entrada
  index.css      # Estilos globales (Tailwind)
```

## Rutas
- `/login`: inicia sesión y almacena el token en `localStorage`.
- `/register`: registro de usuario (no inicia sesión automáticamente).
- `/profile`: requiere autenticación; muestra datos del usuario.

## Configuración de API
El endpoint base está definido en `src/features/auth/services/authService.js`:
```js
const BASE_URL = 'https://reflexoperu-v3.marketingmedico.vip/backend/public/api';
```
- El token se envía en cada request con `Authorization: Bearer <token>`.
- Si el backend responde `401`, el token se limpia automáticamente del `localStorage`.

## Estilo y Diseño
- Fondo general gris claro (`bg-gray-100`), tarjetas blancas con bordes grises.
- Inputs simples, sin gradientes ni efectos.
- Íconos y tipografía en tonos grises para máxima legibilidad.

## Problemas Comunes
- `422 Unprocessable Entity` en registro: el backend valida campos. Por ejemplo, "The email has already been taken" o contraseñas que no coinciden.
- `401 Unauthenticated` en login/perfil: credenciales inválidas o token vencido/invalidado.
- Solución rápida:
  - Usa un correo único y completa campos requeridos.
  - Asegura que `password` y `password_confirmation` coincidan.
  - Limpia el token si persiste el error: `localStorage.removeItem('token')` y vuelve a iniciar sesión.

## Licencia
Sin licencia específica. Usa y adapta según tus necesidades.

