import Espacios from "../../components/ui/Parqueadero";
import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { fetchGet } from "../../helper/request_functions";
import { baseGuardias } from "../../helper/instances_routes";
const ParqueaderosGuardiasPage = () => {
  const { token } = useAuth();
  const [parkingDescription, setparkingDescription] = useState([]);
  console.log(token);

  useEffect(() => {
    getParking();
  }, [token]);

  const getParking = async () => {
    try {
      const response = await fetchGet(
        baseGuardias,
        "/parqueaderos-disponibles",
        token
      );
      console.log(response.data);
      setparkingDescription(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(
    "%csrcpagesAdministradorUsuariosAdminPage.jsx:21 parkingDescription",
    "color: white; background-color: #26bfa5;",
    parkingDescription
  );

  return (
    <div className="max-w-md mx-auto">
      <h1 className="font-black text-4xl text-center text-gray-500">
        Parqueadero
      </h1>
      <hr className="my-4" />

      <p className="text-2xl text-center">Parqueadero ESFOT</p>

      {/* Mostrar la lista de parqueaderos */}
      {parkingDescription.map((parking) => (
        <>
          <div
            key={parking.id}
            className="p-10 border-solid border-2 border-sky-700 rounded-lg m-3 flex"
          >
            <p>
              <span className="font-bold">Numero: </span>
              {parking.numero}
            </p>
            <p>
              <span>Numero: </span>
              {parking.bloque}
            </p>
            <p>
              <span>Numero: </span>
              {parking.tipo}
            </p>
            <p>
              <span>Numero: </span>
              {parking.numero}
            </p>
          </div>
          <div>
            <Espacios />
            <hr className="border-solid border-2 border-azul-20 mb-9" />
          </div>
        </>
      ))}
    </div>
  );
};

export default ParqueaderosGuardiasPage;
