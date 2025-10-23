import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [userData, setUserData] = useState({
    document_number: "",
    name: "",
    paternal_lastname: "",
    maternal_lastname: "",
    email: "",
    phone: "",
    user_name: "",
    password: "",
    last_session: new Date().toISOString().split("T")[0],
    account_statement: true,
    document_type_id: 1,
    country_id: 179,
  });

  const { register, loading, error } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setUserData({
      ...userData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(userData);
      alert("✅ Usuario registrado exitosamente!");
      navigate("/login", {
        replace: true,
        state: { registeredEmail: userData.email },
      });
    } catch (error) {
      console.error("Error:", error);
      if (error.response?.data?.errors) {
        const errorMessages = Object.values(error.response.data.errors).flat();
        alert(`Errores:\n\n${errorMessages.join("\n")}`);
      } else {
        alert(
          `Error: ${
            error.response?.data?.message || "Error al registrar usuario"
          }`
        );
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-lg shadow-sm p-8">
        <div className="mb-6 text-center">
          <h1 className="text-xl font-semibold text-gray-900">Crear cuenta</h1>
          <p className="mt-1 text-sm text-gray-500">Completa tu información</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nombre y apellidos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre *</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={userData.name}
                onChange={handleChange}
                placeholder="Ej: Juan"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
              />
            </div>

            <div>
              <label htmlFor="paternal_lastname" className="block text-sm font-medium text-gray-700">Apellido paterno *</label>
              <input
                id="paternal_lastname"
                name="paternal_lastname"
                type="text"
                required
                value={userData.paternal_lastname}
                onChange={handleChange}
                placeholder="Ej: Pérez"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
              />
            </div>
          </div>

          {/* Apellido materno y documento */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="maternal_lastname" className="block text-sm font-medium text-gray-700">Apellido materno *</label>
              <input
                id="maternal_lastname"
                name="maternal_lastname"
                type="text"
                required
                value={userData.maternal_lastname}
                onChange={handleChange}
                placeholder="Ej: García"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
              />
            </div>

            <div>
              <label htmlFor="document_number" className="block text_sm font-medium text_gray_700">Documento *</label>
              <input
                id="document_number"
                name="document_number"
                type="text"
                required
                value={userData.document_number}
                onChange={handleChange}
                placeholder="Ej: 87654321"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico *</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={userData.email}
              onChange={handleChange}
              placeholder="usuario@empresa.com"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md bg_white text_gray_900 placeholder_gray_400 focus_outline_none focus_ring_2 focus_ring_gray_400 focus_border_gray_400"
            />
          </div>

          {/* Nombre de usuario */}
          <div>
            <label htmlFor="user_name" className="block text-sm font-medium text-gray-700">Usuario *</label>
            <input
              id="user_name"
              name="user_name"
              type="text"
              required
              value={userData.user_name}
              onChange={handleChange}
              placeholder="Ej: jperez"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
            />
          </div>

          {/* Teléfono y contraseña */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono *</label>
              <input
                id="phone"
                name="phone"
                type="text"
                required
                value={userData.phone}
                onChange={handleChange}
                placeholder="Ej: 987654321"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña *</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={userData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="mt-1 w-full px-3 py-2 border border_gray_300 rounded_md bg_white text_gray_900 placeholder_gray_400 focus_outline_none focus_ring_2 focus_ring_gray_400 focus_border_gray_400"
              />
            </div>
          </div>

          {error && (
            <div className="rounded-md border border-red-300 bg-red-50 text-red-700 text-sm px-3 py-2">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 transition disabled:opacity-60"
          >
            {loading ? "Creando cuenta..." : "Registrarme"}
          </button>

          <p className="text-center text-sm text-gray-600">
            ¿Ya tienes una cuenta?{" "}
            <Link to="/login" className="font-medium text-gray-900 hover:underline">
              Inicia sesión aquí
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
