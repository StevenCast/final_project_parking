import React from "react";
import "../styles/sideBar.css";

import Header from "../components/Header";
import LeftSideMenu from "../components/LeftSideMenu";
import {
  adminNavData,
  guardiaNavData,
  usuarioNavData,
} from "../assets/data/NavData";
import { Card } from "../components/ui";

export const SideBar = ({ header, leftSide, children }) => {
  return (
    <section className="layout">
      <section className="header">
        {header || <div>Default Header</div>}
      </section>
      <section className="leftSide">
        {leftSide || <div>Default Left Side</div>}
      </section>
      <section className="body">
        <Card>{children || <div>Default Body Content</div>}</Card>
      </section>
    </section>
  );
};

export const AdminLayout = ({ children }) => {
  return (
    <SideBar
      header={<Header />}
      leftSide={<LeftSideMenu data={adminNavData} />}
    >
      {children}
    </SideBar>
  );
};
export const GuardiaLayout = ({ children }) => {
  return (
    <SideBar
      header={<Header />}
      leftSide={<LeftSideMenu data={guardiaNavData} />}
    >
      {children}
    </SideBar>
  );
};
export const UsuarioLayout = ({ children }) => {
  return (
    <SideBar
      header={<Header />}
      leftSide={<LeftSideMenu data={usuarioNavData} />}
    >
      {children}
    </SideBar>
  );
};

export default SideBar;
