import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { fetchGet, fetchDelete } from "../../helper/request_functions";
import { baseAdmin } from "../../helper/instances_routes";
const Usuarios = () => {
  const { token } = useAuth();
  const [users, setUsers] = useState([]);
  console.log(token);

  useEffect(() => {
    getUsers();
  }, [token]);
  const getUsers = async () => {
    try {
      const response = await fetchGet(baseAdmin, "/listar-usuarios", token);
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(
    "%csrcpagesAdministradorUsuariosAdminPage.jsx:21 guardias",
    "color: white; background-color: #26bfa5;",
    users
  );
  const deleteUser = async (id, email) => {
    console.log("**************************");
    console.log("id", id);
    try {
      if (confirm(`Deseas eliminar al usuario ${email}?`)) {
        const response = await fetchDelete(
          baseAdmin,
          `/eliminar_usuario/${id}`,
          token
        );
        console.log("response", response);
        getUsers();
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <h1 className="text-4xl font-bold mb-10 text-azul-10">Usuarios</h1>
      <div className=" h-[90vh]">
        <table className="min-w-full bg-white border border-gray-300 ">
          <thead className="bg-azul-20 text-white border-solid border-t-2 border-gray-300 ">
            <tr>
              <th className="px-4 py-2 text-left font-semibold">Nombre</th>
              <th className="px-4 py-2 text-left font-semibold">Apellido</th>
              <th className="px-4 py-2 text-left font-semibold">Email</th>
              <th className="px-4 py-2 text-left font-semibold">
                placa del vehiculo
              </th>
              <th className="px-4 py-2 text-left font-semibold">Telefono</th>
              <th className="px-4 py-2 text-left text-red-500 font-semibold ">
                Eliminar
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                className="hover:bg-gray-100 border-solid border-t-2 border-gray-300"
                key={user._id}
              >
                <td className="px-4 py-2 border-b border-gray-300">
                  {user.nombre}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  {user.apellido}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  {user.email}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  {user.placa_vehiculo}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  {user.telefono}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  <button
                    type="button"
                    onClick={() => deleteUser(user._id, user.email)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Usuarios;
