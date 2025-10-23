import React from "react";
import { useProfile } from "../hooks/useProfile";
import { useAuth } from "../../auth/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { User, Mail, Phone, Globe, Shield, Hash, LogOut } from "lucide-react";

const Profile = () => {
  const { profile, loading, error } = useProfile();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const getInitials = (name = "", paternal = "") =>
    `${name.charAt(0) || ""}${paternal.charAt(0) || ""}`.toUpperCase();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-700 text-sm">Cargando perfil...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white border border-gray-200 rounded-lg shadow-sm p-8">
        <div className="flex flex-col items-center text-center">
          {/* Avatar */}
          {profile.image_url ? (
            <img
              src={profile.image_url}
              alt="Foto de perfil"
              className="w-24 h-24 rounded-full border border-gray-300 object-cover mb-3"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-800 text-2xl font-semibold border border-gray-300 mb-3">
              {getInitials(profile.name, profile.paternal_lastname)}
            </div>
          )}

          {/* Nombre y Rol */}
          <h2 className="text-lg font-semibold text-gray-900">
            {profile.name} {profile.paternal_lastname} {profile.maternal_lastname}
          </h2>
          <p className="text-gray-600 text-sm">{profile.role?.name}</p>
        </div>

        {/* Información */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="space-y-3">
            <h3 className="text-gray-800 font-medium text-sm">Información Personal</h3>
            <div className="rounded-md border border-gray-200 p-4 space-y-3">
              <p className="flex items-center text-gray-700 text-sm">
                <Mail className="w-4 h-4 mr-2 text-gray-500" /> {profile.email}
              </p>
              <p className="flex items-center text-gray-700 text-sm">
                <Phone className="w-4 h-4 mr-2 text-gray-500" /> {profile.phone || "No registrado"}
              </p>
              <p className="flex items-center text-gray-700 text-sm">
                <Shield className="w-4 h-4 mr-2 text-gray-500" /> Usuario: {profile.user_name}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-gray-800 font-medium text-sm">Información Adicional</h3>
            <div className="rounded-md border border-gray-200 p-4 space-y-3">
              <p className="flex items-center text-gray-700 text-sm">
                <Globe className="w-4 h-4 mr-2 text-gray-500" /> País: {profile.country?.name || "No disponible"}
              </p>
              <p className="flex items-center text-gray-700 text-sm">
                <Hash className="w-4 h-4 mr-2 text-gray-500" /> ID: {profile.id}
              </p>
            </div>
          </div>
        </div>

        {/* Botón Logout */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition text-sm"
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
