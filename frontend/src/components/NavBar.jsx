import { Link } from "react-router-dom";
import { ButtonMenu } from "./ui";
import { GeneralNavData } from "../assets/data/NavData";
const NavBar = () => {
  return (
    <>
      <nav className="flex bg-azul-10 text-white px-10 py-1 justify-between items-center">
        <div>
          <Link to="/"><img src="\src\assets\images\logo_esfot_buho.png" alt="" className="w-20"/></Link>
        </div>
        <ul className="flex ">
          {GeneralNavData.map((item) => (
            <ButtonMenu key={item.id} item={item} />
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
