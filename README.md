# 🚀 Cesar Frontend

Frontend moderno desarrollado con **React**, diseñado con un enfoque limpio, profesional y adaptable para aplicaciones empresariales.  
Incluye autenticación, registro de usuarios y perfil conectado a una API backend.

---

## 🧩 Tecnologías principales

- ⚛️ **React 18+**
- 🧠 **Context API** (Manejo de autenticación)
- 🎨 **TailwindCSS** (Diseño moderno y responsivo)
- 🔄 **React Router DOM** (Navegación entre páginas)
- ☁️ **Vercel** (Despliegue en la nube)
- ⚙️ **Vite / Create React App** (según configuración)

---

## 📁 Estructura del proyecto

src/
├─ auth/
│ └─ context/
│ └─ AuthContext.jsx # Manejo global de login/register/logout
├─ features/
│ ├─ profile/
│ │ ├─ pages/
│ │ │ └─ Profile.jsx # Vista de perfil
│ │ └─ hooks/
│ │ └─ useProfile.js
│ └─ auth/
│ ├─ pages/
│ │ ├─ Login.jsx # Página de inicio de sesión
│ │ └─ Register.jsx # Página de registro
├─ router.jsx # Definición de rutas
├─ main.jsx # Punto de entrada principal
└─ App.jsx # Enrutamiento global


---

## ⚙️ Instalación

Clona el repositorio y entra al proyecto:

```bash
git clone https://github.com/CesarDT-bit/Cesar-Frontend.git
cd Cesar-Frontend

