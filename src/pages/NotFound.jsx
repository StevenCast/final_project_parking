import React from 'react';
import { CustomLink } from "../components/ui";
const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] bg-azul-10">
      <div className="p-10 border-solid border-2 border-amarillo-10  rounded-lg">
        <p className="text-6xl text-celeste-10 pb-6">NotFound - 404</p>
        <div className="flex justify-center">
          <CustomLink
            route="/"
            text="Volver al inicio"
            className="!text-white hover:!text-amarillo-10"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
