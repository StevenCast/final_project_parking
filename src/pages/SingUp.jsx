import { useForm } from "react-hook-form";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

import NavBar from "../components/NavBar";
import {
  LogoTitle,
  Mensaje,
  Input,
  Button,
  Card,
  Label,
  CustomLink,
  AlertText,
} from "../components/ui";

const SingUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [mensaje, setmensaje] = useState({});

  const { signup } = useAuth();

  const onSubmit = async (values) => {
    try {
      const response = await signup(values);
      setmensaje({
        respuesta: response.data.msg,
        tipo: true,
      });
    } catch (error) {
      console.error("Error:", error);
      setmensaje({
        respuesta:
          error.response?.data?.msg || "Ha ocurrido un error, intente de nuevo",
        tipo: false,
      });
    }
  };

  return (
    <>
      <NavBar />
      <div className="flex w-full justify-items-end ">
        <div className="w-2/3 h-[100vh] bg-celeste-20 flex flex-col items-center justify-center gap-3">
          <LogoTitle
            imgSrc="/src/assets/images/logoBuho.png"
            imgAlt="Logo"
            text="Poli Parking"
          />
          <div>
            {Object.keys(mensaje).length > 0 && (
              <Mensaje tipo={mensaje.tipo}>{mensaje.respuesta}</Mensaje>
            )}
          </div>
          <h1 className="text-4xl font-bold text-azul-10 ">Registrarse</h1>
          <div className="w-1/2">
            <Card>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col w-full"
              >
                <div className="w-full flex justify-between">
                  <Label text="Nombre" />
                  {errors?.nombre && (
                    <AlertText text="El nombre es obligatorio" />
                  )}
                </div>
                <Input
                  type="text"
                  placeholder="Juan"
                  {...register("nombre", { required: true })}
                />
                <div className="w-full flex justify-between">
                  <Label text="Apellido" />
                  {errors?.apellido && (
                    <AlertText text="El apellido es obligatorio" />
                  )}
                </div>
                <Input
                  type="text"
                  placeholder="Perez"
                  {...register("apellido", { required: true })}
                />
                <div className="w-full flex justify-between">
                  <Label text="Email" />
                  {errors?.email && <AlertText text="El email es obligatorio" />}
                </div>
                <Input
                  type="email"
                  placeholder="JuanPerez@gmail.com"
                  {...register("email", { required: true })}
                />
                <div className="w-full flex justify-between">
                  <Label text="placa del vehiculo" />
                  {errors?.placa_vehiculo && (
                    <AlertText text="La placa es obligatoria" />
                  )}
                </div>
                <Input
                  type="text"
                  placeholder="AAC-424"
                  {...register("placa_vehiculo", { required: true })}
                />
                <div className="w-full flex justify-between">
                  <Label text="Telefono" />
                  {errors?.telefono && (
                    <AlertText text="El telefono es obligatorio" />
                  )}
                </div>
                <Input
                  type="number"
                  placeholder="123456789"
                  {...register("telefono", { required: true })}
                />
                <div className="w-full flex justify-between">
                  <Label text="Contraseña" />
                  {errors?.password && (
                    <AlertText text="La contraseña es obligatoria" />
                  )}
                </div>
                <Input
                  type="password"
                  placeholder="***********"
                  {...register("password", { required: true })}
                />
                <Button type="submit">Registrarse</Button>
                <div className="flex flex-col gap-2 my-4">
                  <span className="flex gap-3 justify-end">
                    <p>¿Ya tiene una cuenta?</p>
                    <CustomLink route="/singin" text="Ingresar" />
                  </span>
                  <span className="flex gap-3 justify-end">
                    <p>¿Olvidó su contraseña?</p>
                    <CustomLink
                      route="/RecoverPassword"
                      text="Recuperar contraseña"
                    />
                  </span>
                </div>
              </form>
            </Card>
          </div>
        </div>
        <div className="w-1/3">
          <img
            src="/src/assets/images/carretera.png"
            alt="carretera"
            className="w-full h-[100vh]"
          />
        </div>
      </div>
    </>
  );
};

export default SingUp;
