import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";

export const Espacios = () => {
  const { token } = useAuth();
  const [data, setData] = useState([]); // Nuevo estado para los datos de Arduino

  useEffect(() => {
    getUsers();
  }, [token]);

  const getUsers = async () => {
    try {
      // Simulación de datos de Arduino
      const simulatedData = [
        { espacio: "Espacio 1", disponibilidad: 1 },
        { espacio: "Espacio 2", disponibilidad: 0 },
        { espacio: "Espacio 3", disponibilidad: 1 },
        { espacio: "Espacio 4", disponibilidad: 0 },
        { espacio: "Espacio 5", disponibilidad: 0 },
        { espacio: "Espacio 6", disponibilidad: 0 },
        { espacio: "Espacio 7", disponibilidad: 0 },
        { espacio: "Espacio 8", disponibilidad: 0 },
      ];
      setData(simulatedData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* Tabla de Espacios y Disponibilidad */}
      <div className="mt-10">
        <h2 className="text-2xl ">Espacios y Disponibilidad</h2>
        <table className="min-w-full border-collapse border border-slate-950 mt-4">
          <thead>
            <tr>
              <th className="border border-slate-200 p-2">Espacios</th>
              <th className="border border-slate-200 p-2">Disponibilidad</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-300 text-center"
              >
                <td className="py-2">{item.espacio}</td>
                <td className="py-2">
                  {item.disponibilidad === 1 ? "Sí" : "No"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Espacios;
